// Background service worker for NotebookLM Connect

// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sendToNotebookLM",
    title: "Send to NotebookLM",
    contexts: ["page", "selection", "link"]
  });
  
  // Set default settings
  chrome.storage.local.set({
    lastSent: null,
    totalSent: 0
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "sendToNotebookLM") {
    handleSendToNotebookLM(info, tab);
  }
});

// Main function to send content to NotebookLM
async function handleSendToNotebookLM(info, tab) {
  try {
    // Inject content script to extract page data
    const [result] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: extractPageContent,
      args: [info.selectionText || ""]
    });

    const pageData = result.result;
    
    // Update stats
    const stats = await chrome.storage.local.get(['totalSent']);
    await chrome.storage.local.set({
      lastSent: {
        title: pageData.title,
        url: pageData.url,
        timestamp: Date.now()
      },
      totalSent: (stats.totalSent || 0) + 1
    });

    // Open NotebookLM with the content
    await openInNotebookLM(pageData);
    
    // Show success notification
    chrome.action.setBadgeText({ text: '✓' });
    chrome.action.setBadgeBackgroundColor({ color: '#4CAF50' });
    setTimeout(() => {
      chrome.action.setBadgeText({ text: '' });
    }, 2000);
    
  } catch (error) {
    console.error('Error sending to NotebookLM:', error);
    chrome.action.setBadgeText({ text: '✗' });
    chrome.action.setBadgeBackgroundColor({ color: '#f44336' });
    setTimeout(() => {
      chrome.action.setBadgeText({ text: '' });
    }, 2000);
  }
}

// Function to extract page content (runs in page context)
function extractPageContent(selectionText) {
  // Get page metadata
  const getMetaContent = (name) => {
    const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"], meta[property="og:${name}"]`);
    return meta ? meta.content : '';
  };

  // Extract main content
  let content = '';
  
  if (selectionText) {
    // User selected text
    content = selectionText;
  } else {
    // Try to find main article content
    const article = document.querySelector('article, main, [role="main"], .post-content, .article-content, .entry-content');
    
    if (article) {
      content = article.innerText;
    } else {
      // Fallback to body text, but try to remove nav/footer
      const clone = document.body.cloneNode(true);
      const removals = clone.querySelectorAll('nav, header, footer, aside, .nav, .menu, .sidebar, .comments');
      removals.forEach(el => el.remove());
      content = clone.innerText;
    }
    
    // Clean up excessive whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n').trim();
  }

  return {
    title: document.title,
    url: window.location.href,
    description: getMetaContent('description'),
    author: getMetaContent('author'),
    content: content.substring(0, 50000), // Limit to 50k chars
    timestamp: new Date().toISOString(),
    domain: window.location.hostname
  };
}

// Open NotebookLM with the extracted content
async function openInNotebookLM(pageData) {
  // Create formatted content for NotebookLM
  const formattedContent = `
# ${pageData.title}

**Source:** ${pageData.url}
**Domain:** ${pageData.domain}
**Captured:** ${new Date(pageData.timestamp).toLocaleString()}
${pageData.author ? `**Author:** ${pageData.author}` : ''}
${pageData.description ? `**Description:** ${pageData.description}` : ''}

---

${pageData.content}
  `.trim();

  // Encode content for URL
  const encodedContent = encodeURIComponent(formattedContent);
  const encodedTitle = encodeURIComponent(pageData.title);
  
  // NotebookLM URL - opens with source dialog
  // Note: This opens NotebookLM and the user will need to paste the content
  // A more advanced version would use Google Drive API
  const notebookLMUrl = `https://notebooklm.google.com/`;
  
  // Store the content in storage so the user can easily access it
  await chrome.storage.local.set({
    pendingContent: formattedContent,
    pendingTitle: pageData.title,
    pendingUrl: pageData.url
  });
  
  // Open NotebookLM in new tab
  chrome.tabs.create({ url: notebookLMUrl });
  
  // Copy content to clipboard for easy pasting
  // Note: Clipboard API requires user interaction, so we'll handle this in content script
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPendingContent') {
    chrome.storage.local.get(['pendingContent', 'pendingTitle', 'pendingUrl'], (data) => {
      sendResponse(data);
    });
    return true;
  }
  
  if (request.action === 'clearPendingContent') {
    chrome.storage.local.remove(['pendingContent', 'pendingTitle', 'pendingUrl']);
    sendResponse({ success: true });
    return true;
  }
});
