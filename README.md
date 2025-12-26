# 📓 NotebookLM Connect

> One-click content import for Google NotebookLM

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue?logo=google-chrome)](https://chrome.google.com/webstore)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()

Stop manually copying and pasting web content into NotebookLM. Send any webpage directly to your research notebooks with a single right-click.

![NotebookLM Connect Demo](https://via.placeholder.com/800x400?text=Demo+Screenshot+Here)

---

## ✨ Features

- 🚀 **One-Click Import** - Right-click → "Send to NotebookLM"
- 🧹 **Smart Extraction** - Automatically removes ads and navigation
- 📝 **Source Attribution** - Preserves URL, title, author, and timestamp  
- ✂️ **Text Selection** - Highlight and send specific paragraphs
- 📊 **Usage Stats** - Track your research activity
- 🔒 **Privacy First** - All processing happens locally

---

## 🎯 Perfect For

- 📚 **Researchers** - Organizing academic papers and sources
- 🎓 **Students** - Building study notebooks faster
- ⚖️ **Legal Professionals** - Tracking case law and documents
- ✍️ **Writers** - Collecting research for articles
- 💼 **Knowledge Workers** - Creating reference libraries

---

## 🚀 Installation

### From Chrome Web Store (Coming Soon)
*Extension is currently under review*

### Manual Installation (Developer Mode)

1. Download the [latest release](https://github.com/yourusername/notebooklm-connect/releases)
2. Extract the ZIP file
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" (toggle in top-right)
5. Click "Load unpacked"
6. Select the extracted folder
7. Done! 🎉

---

## 📖 How to Use

### Send Full Page
1. Navigate to any article or webpage
2. Right-click anywhere on the page
3. Select **"Send to NotebookLM"**
4. NotebookLM opens with formatted content
5. Click the blue "Copy Content" button
6. Paste into your notebook

### Send Selected Text
1. Highlight the text you want to save
2. Right-click on the selection
3. Select **"Send to NotebookLM"**
4. Only the selected text will be sent

### View Stats
- Click the extension icon to see:
  - Total pages sent
  - Last sent item
  - Quick link to NotebookLM

---

## 🛠️ Technology

Built with:
- Chrome Extension Manifest V3
- Vanilla JavaScript (zero dependencies)
- Local Storage API
- Chrome Scripting API

---

## 📂 Project Structure

```
notebooklm-connect/
├── manifest.json          # Extension configuration
├── background.js          # Service worker (context menu, logic)
├── content.js            # Page interaction & clipboard handling
├── popup.html            # Extension popup UI
├── popup.js              # Popup functionality
└── icons/                # Extension icons
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

---

## 🔐 Privacy & Permissions

### Permissions Explained

- **activeTab** - Access current page content when you click "Send"
- **contextMenus** - Add right-click menu option
- **scripting** - Extract content from webpages
- **storage** - Save usage statistics locally

### What We DON'T Do

- ❌ Collect or transmit your data
- ❌ Track your browsing
- ❌ Store content on external servers
- ❌ Require account signup
- ❌ Show ads or analytics

**Everything happens locally in your browser.**

See our full [Privacy Policy](PRIVACY.md)

---

## 🚧 Roadmap

### MVP (Current - v1.0.0) ✅
- [x] One-click content extraction
- [x] Context menu integration
- [x] Smart content cleaning
- [x] Usage statistics
- [x] Text selection support

### Pro Version (Planned - v2.0.0)
- [ ] Direct API integration (auto-paste without manual copy)
- [ ] Multi-notebook selector
- [ ] Auto-tagging and categorization
- [ ] Citation formatting (APA, MLA, Chicago)
- [ ] Batch operations (send multiple tabs)
- [ ] PDF extraction improvements
- [ ] Keyboard shortcuts
- [ ] Custom templates
- [ ] Browser sync

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🐛 **Report bugs** - Open an issue with details
2. 💡 **Suggest features** - Tell us what you'd like to see
3. 🔧 **Submit PRs** - Fix bugs or add features
4. ⭐ **Star the repo** - Show your support
5. 📣 **Share** - Help others discover the tool

### Development Setup

```bash
# Clone the repository
git clone https://github.com/pabs-ai/notebooklm-connect.git

# Navigate to the project
cd notebooklm-connect

# Load in Chrome
# 1. Open chrome://extensions/
# 2. Enable Developer mode
# 3. Click "Load unpacked"
# 4. Select this folder
```

### Making Changes

1. Create a new branch (`git checkout -b feature/amazing-feature`)
2. Make your changes
3. Test thoroughly in Chrome
4. Commit (`git commit -m 'Add amazing feature'`)
5. Push (`git push origin feature/amazing-feature`)
6. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by the [NotebookLM](https://notebooklm.google.com) team at Google
- Built for researchers, students, and knowledge workers everywhere
- Special thanks to all beta testers and contributors

---

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/notebooklm-connect/issues)
- **Email**: feedback@notebooklmconnect.com
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/notebooklm-connect/discussions)

---

## ⭐ Show Your Support

If this extension helps your research workflow, consider:
- ⭐ Starring the repository
- 🐦 Sharing on social media
- ☕ [Buying me a coffee](https://buymeacoffee.com/yourusername)
- ✍️ Writing a review on the Chrome Web Store

---

**Built with ❤️ for researchers, students, and knowledge workers**

*NotebookLM Connect is not affiliated with Google or NotebookLM. It's an independent tool built to enhance the NotebookLM experience.*
