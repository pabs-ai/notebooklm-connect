# Contributing to NotebookLM Connect

First off, thank you for considering contributing to NotebookLM Connect! 🎉

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

When reporting a bug, include:
- **Extension version** (found in `chrome://extensions/`)
- **Chrome version** (found in `chrome://settings/help`)
- **Operating system** (Windows, Mac, Linux)
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Console errors** (press F12, check Console tab)

### 💡 Suggesting Features

Feature suggestions are welcome! Please:
- **Check existing issues** to avoid duplicates
- **Explain the use case** - why would this be useful?
- **Describe the solution** - how should it work?
- **Consider alternatives** - are there other ways to solve this?

### 🔧 Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Test your changes** thoroughly in Chrome
3. **Update documentation** if needed
4. **Follow the code style** (see below)
5. **Write clear commit messages**
6. **Submit the PR** with a clear description

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/notebooklm-connect.git
cd notebooklm-connect

# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and test
# Load extension in Chrome via chrome://extensions/

# Commit and push
git add .
git commit -m "Add your feature"
git push origin feature/your-feature-name
```

## Code Style Guidelines

### JavaScript
- Use **2 spaces** for indentation
- Use **semicolons**
- Use **camelCase** for variables and functions
- Use **async/await** over promises where possible
- Add **comments** for complex logic
- Keep functions **small and focused**

### File Organization
- One feature per file when possible
- Group related functions together
- Use descriptive function names

### Example
```javascript
// Good
async function extractPageContent(selectionText) {
  const content = selectionText || getFullPageContent();
  return formatContent(content);
}

// Avoid
async function doStuff(x) {
  // lots of code
}
```

## Testing Checklist

Before submitting a PR, test:
- [ ] Extension loads without errors
- [ ] Context menu appears on all pages
- [ ] Full page extraction works
- [ ] Text selection extraction works
- [ ] Popup displays correctly
- [ ] Stats are tracked correctly
- [ ] Works on various websites (news, blogs, docs)
- [ ] No console errors

## Questions?

- Open a [Discussion](https://github.com/yourusername/notebooklm-connect/discussions)
- Email: feedback@notebooklmconnect.com

Thank you for contributing! 🙏
