// Content script for NotebookLM Connect
// Handles clipboard operations and page-specific interactions

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'copyToClipboard') {
    copyToClipboard(request.text);
    sendResponse({ success: true });
  }
});

// Copy text to clipboard
function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    document.execCommand('copy');
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy:', err);
  }
  
  document.body.removeChild(textarea);
}

// If we're on NotebookLM and there's pending content, show a helper
if (window.location.hostname === 'notebooklm.google.com') {
  chrome.storage.local.get(['pendingContent', 'pendingTitle'], (data) => {
    if (data.pendingContent) {
      showNotebookLMHelper(data);
    }
  });
}

function showNotebookLMHelper(data) {
  // Create a floating helper button
  const helper = document.createElement('div');
  helper.id = 'notebooklm-connect-helper';
  helper.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #1a73e8;
      color: white;
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 320px;
    ">
      <div style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">
        📋 Content Ready to Import
      </div>
      <div style="font-size: 13px; margin-bottom: 12px; opacity: 0.95;">
        "${data.pendingTitle}"
      </div>
      <button id="nlm-copy-btn" style="
        background: white;
        color: #1a73e8;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
        margin-right: 8px;
      ">
        Copy Content
      </button>
      <button id="nlm-dismiss-btn" style="
        background: transparent;
        color: white;
        border: 1px solid rgba(255,255,255,0.5);
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 13px;
      ">
        Dismiss
      </button>
    </div>
  `;
  
  document.body.appendChild(helper);
  
  // Copy button handler
  document.getElementById('nlm-copy-btn').addEventListener('click', () => {
    copyToClipboard(data.pendingContent);
    
    // Update button to show success
    const btn = document.getElementById('nlm-copy-btn');
    btn.textContent = '✓ Copied!';
    btn.style.background = '#34a853';
    btn.style.color = 'white';
    
    // Clear pending content
    chrome.runtime.sendMessage({ action: 'clearPendingContent' });
    
    // Remove helper after delay
    setTimeout(() => {
      helper.remove();
    }, 2000);
  });
  
  // Dismiss button handler
  document.getElementById('nlm-dismiss-btn').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'clearPendingContent' });
    helper.remove();
  });
}
