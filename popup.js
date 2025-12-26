// Popup script for NotebookLM Connect

document.addEventListener('DOMContentLoaded', async () => {
  // Load stats from storage
  loadStats();
  
  // Set up event listeners
  document.getElementById('open-notebooklm').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://notebooklm.google.com/' });
  });
  
  document.getElementById('feedback-link').addEventListener('click', (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: 'mailto:feedback@notebooklmconnect.com?subject=NotebookLM Connect Feedback' });
  });
});

async function loadStats() {
  const data = await chrome.storage.local.get(['totalSent', 'lastSent']);
  
  // Update total sent
  document.getElementById('total-sent').textContent = data.totalSent || 0;
  
  // Update last sent if exists
  if (data.lastSent) {
    const container = document.getElementById('last-sent-container');
    const emptyState = document.getElementById('empty-state');
    
    container.style.display = 'block';
    emptyState.style.display = 'none';
    
    document.getElementById('last-sent-title').textContent = data.lastSent.title;
    
    const urlLink = document.getElementById('last-sent-url');
    urlLink.href = data.lastSent.url;
    urlLink.textContent = data.lastSent.url;
    
    const timeAgo = getTimeAgo(data.lastSent.timestamp);
    document.getElementById('last-sent-time').textContent = `Sent ${timeAgo}`;
  }
}

function getTimeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  return `${Math.floor(seconds / 86400)} days ago`;
}

// Listen for storage changes to update in real-time
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local') {
    loadStats();
  }
});
