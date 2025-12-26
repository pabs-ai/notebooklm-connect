# 🚀 GitHub Repository Setup Guide

Follow these steps to get your NotebookLM Connect repository on GitHub.

---

## Step 1: Create GitHub Repository

### Option A: Via GitHub Website
1. Go to https://github.com/new
2. Repository name: `notebooklm-connect`
3. Description: `One-click content import for Google NotebookLM`
4. Make it **Public** (required for Chrome Web Store)
5. **DO NOT** initialize with README (we have one)
6. Click **"Create repository"**

### Option B: Via GitHub CLI
```bash
gh repo create notebooklm-connect --public --description "One-click content import for Google NotebookLM"
```

---

## Step 2: Initialize Local Repository

Open Terminal/Command Prompt and navigate to the `notebooklm-connect-github` folder:

```bash
cd path/to/notebooklm-connect-github

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - NotebookLM Connect v1.0.0"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/notebooklm-connect.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 3: Update Repository Settings

### Edit README
1. Open `README.md`
2. Replace `yourusername` with your GitHub username
3. Update contact email if desired
4. Add screenshot (optional but recommended)

### Add Topics
On GitHub repository page:
1. Click the gear icon next to "About"
2. Add topics: `chrome-extension`, `notebooklm`, `research`, `productivity`, `javascript`

### Enable Discussions (Optional)
1. Go to repository Settings → Features
2. Enable "Discussions"

---

## Step 4: Create First Release

### Via GitHub Website
1. Go to your repository on GitHub
2. Click "Releases" → "Create a new release"
3. Click "Choose a tag" → Type `v1.0.0` → "Create new tag"
4. Release title: `v1.0.0 - Initial Release`
5. Description:
```markdown
## 🎉 Initial Release

First public release of NotebookLM Connect!

### Features
- One-click content extraction
- Smart content cleaning
- Source attribution
- Text selection support
- Usage statistics

### Installation
Download the ZIP file below and follow the installation instructions in the README.
```
6. Upload the extension ZIP (create one using the command below)
7. Click "Publish release"

### Create ZIP for Release
```bash
cd notebooklm-connect-github
zip -r notebooklm-connect-v1.0.0.zip \
  manifest.json \
  background.js \
  content.js \
  popup.html \
  popup.js \
  icons/ \
  README.md \
  LICENSE
```

### Via Git Tags (Automated)
```bash
# Create and push tag
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0

# GitHub Actions will automatically create the release
```

---

## Step 5: Optional Enhancements

### Add Screenshot
1. Take a screenshot of the extension in action
2. Save as `screenshots/demo.png`
3. Upload to repo
4. Update README image link

### Add Badges
Update README.md with your repo URL in badges:
```markdown
[![GitHub release](https://img.shields.io/github/v/release/YOUR_USERNAME/notebooklm-connect)](https://github.com/YOUR_USERNAME/notebooklm-connect/releases)
[![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/notebooklm-connect)](https://github.com/YOUR_USERNAME/notebooklm-connect/stargazers)
```

### Set Up GitHub Pages (Optional)
1. Repository Settings → Pages
2. Source: Deploy from branch
3. Branch: main, folder: / (root)
4. Create `index.html` with landing page

---

## Step 6: Share Your Repo

Once everything is set up:

### Social Media
- **Twitter/X**: "Just open-sourced NotebookLM Connect - a Chrome extension for one-click content import 📓 https://github.com/YOUR_USERNAME/notebooklm-connect"
- **LinkedIn**: Share with professional network
- **Reddit**: r/NotebookLM, r/chrome_extensions, r/SideProject

### Developer Communities
- **Hacker News**: Submit as "Show HN"
- **Product Hunt**: Launch the repo
- **Dev.to**: Write a blog post about building it

---

## Common Git Commands

```bash
# Check status
git status

# Add new files
git add filename.js
# or add all
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push

# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Pull latest changes
git pull origin main

# View commit history
git log --oneline
```

---

## Troubleshooting

### "Permission denied" when pushing
→ Set up SSH keys or use personal access token
→ See: https://docs.github.com/en/authentication

### "Repository not found"
→ Check the remote URL: `git remote -v`
→ Update if needed: `git remote set-url origin https://github.com/YOUR_USERNAME/notebooklm-connect.git`

### "Branch 'main' not found"
→ Your default branch might be 'master'
→ Either rename: `git branch -M main`
→ Or push to master: `git push -u origin master`

---

## Next Steps After GitHub Setup

1. ✅ Submit to Chrome Web Store
2. ✅ Add to Product Hunt
3. ✅ Share on social media
4. ✅ Start collecting user feedback
5. ✅ Plan Pro version features

---

## Need Help?

- **GitHub Docs**: https://docs.github.com
- **Git Tutorial**: https://git-scm.com/docs/gittutorial
- **Questions**: Open a Discussion in your repo

---

**Your repo is ready to go live! 🚀**
