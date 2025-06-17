# Contributing to AgOpenGPS Documentation

Thank you for helping improve the AgOpenGPS docs! Clear, accurate documentation makes the project more accessible to farmers, builders, and developers around the world.

---

## 🛠 How to Contribute
You can help in many ways:

### 0. Request a change (if you dont feel comfortable making changes yourself)

If you're not comfortable editing files, no problem! You can open a GitHub issue and describe what needs to change.

Please include:
- What you were trying to do
- What was missing or unclear
- Link to the page or section you're referring to

### 1. ✏️ Fix a typo, broken link, or unclear sentence

- Navigate to the `content/` folder
- Find the `.md` file that needs editing (e.g., `content/hardware/keya-can.md`)
- Edit the text directly
- Preview locally (see below), commit, and open a Pull Request

### 2. 🧑‍🏫 Add a new guide or tutorial

- Use the frontmatter template below
- Keep guides simple, clear, and focused
- Include images or diagrams if helpful

```toml
---
title: "Installing the Keya CAN Motor"
date: 2025-06-08
draft: false
menu:
  main:
    parent: "Hardware"
    weight: 10
---
```

### 3. 🔗 Link to useful community resources

Found a great Discourse thread or forum answer? Link to it at the bottom of the relevant doc page under:
#### 🧠 Community Insights
- _(e.g.,)_[Great Keya setup post on Discourse](https://discourse.agopengps.com/t/keya-setup-guide/12345)
