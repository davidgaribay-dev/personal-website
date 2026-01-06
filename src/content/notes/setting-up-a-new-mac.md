---
title: "Setting Up a New Mac for Agentic AI Development"
description: "My go-to apps, CLI tools, and configurations for setting up a new Mac for software development and agentic AI work. From Homebrew to Claude Code, here's everything I install on day one."
publishDate: 2025-12-24
tags: ["macos", "developer-tools", "setup", "homebrew", "productivity", "cli", "local-ai", "agentic-ai", "claude-code"]
draft: false
featured: false
image: "/mac.jpg"
---

## Why Document This?

Every time I need to do a fresh install or get a new Mac, I install these essential apps/tools. With Agentic AI taking the software industry by storm, I have drastically updated my workflow.


## Homebrew

Before anything else, install [Homebrew](https://brew.sh/). It's the package manager macOS should have shipped with.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once installed, most CLI tools and even GUI apps can be installed with a single command.

<a href="https://brew.sh/" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/homebrew.svg" alt="Homebrew" />Homebrew</a>



## Claude Code

[Claude Code](https://claude.com/product/claude-code) is Anthropic's agentic coding tool. Having an AI assistant that can read your codebase, run commands, and help you debug is a game changer. This is the main reason I set up my environment the way I do now.

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

<a href="https://claude.com/product/claude-code" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/claude-code.png" alt="Claude Code" />Claude Code</a>



## Under Evaluation

Tools I'm currently testing out:

### Agentic AI Tools

- **[Google Antigravity](https://antigravity.google/)** - Google's VS Code fork for agentic coding. Only entertaining it since I got 6 months free with my new phone. 
- **[OpenCode](https://opencode.ai/)** - Open source agentic coding CLI. Curious about open source alternatives.
- **[DeepAgents CLI](https://github.com/langchain-ai/deepagents)** - Another agentic AI tool I'm experimenting with but from my new favorite Agentic AI framework (langraph/langchain).
- **[Raycast](https://www.raycast.com/)** - Considering switching from Spotlight.
- **[Warp](https://www.warp.dev/)** - Trying out as a terminal replacement.
- **[CodeRabbit](https://www.coderabbit.ai/)** - AI-powered code review tool, im still not convinced though.



## CLI Tools

### NVM (Node Version Manager)

[NVM](https://github.com/nvm-sh/nvm) lets you switch between Node.js versions easily. Different projects need different versions, and nvm makes that painless.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

### UV

[UV](https://github.com/astral-sh/uv) is a fast Python package manager written in Rust. It's way faster than pip and handles virtual environments cleanly.

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Aerospace

[Aerospace](https://github.com/nikitabobko/AeroSpace) is a tiling window manager for macOS. If you've used i3 on Linux, this gives you similar functionality. I can't go back to manually resizing windows.

```bash
brew install --cask aerospace
```

<a href="https://github.com/nikitabobko/AeroSpace" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/aerospace.png" alt="Aerospace" />Aerospace</a>

### USQL

[USQL](https://github.com/xo/usql) is a universal CLI for databases. One tool to query PostgreSQL, MySQL, SQLite, and more.

```bash
brew install usql
```

<a href="https://github.com/xo/usql" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/usql.png" alt="USQL" />USQL</a>

### GitHub CLI

The [GitHub CLI](https://cli.github.com/) makes working with GitHub from the terminal way easier. Creating PRs, checking CI status, cloning repos.

```bash
brew install gh
gh auth login
```

### Gitea CLI (tea)

The [Gitea CLI](https://gitea.com/gitea/tea) is useful for interacting with Gitea instances from the terminal. Similar to GitHub CLI but for self-hosted Gitea.

```bash
brew install tea
```

<a href="https://gitea.com/gitea/tea" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/gitea.svg" alt="Gitea CLI" />Gitea CLI</a>



## IDEs and Editors

### VS Code

[VS Code](https://code.visualstudio.com/) is where I spend most of my time.

<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/vscode.jpeg" alt="VS Code" />VS Code</a>



## API Testing

### Insomnia

[Insomnia](https://insomnia.rest/) for API testing. It's like Postman but feels cleaner to me.

<a href="https://insomnia.rest/" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/insomnia.jpeg" alt="Insomnia" />Insomnia</a>



## SSH Setup

### Generate an SSH Key

```bash
ssh-keygen -t ed25519 -C "{REPLACE_ME}"
```

## Productivity Apps

### Xmind

[Xmind](https://xmind.app/) for mind mapping and brainstorming. When I'm planning a feature or trying to understand a complex system, visual mapping helps me think through it.

<a href="https://xmind.com/" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/xmind.png" alt="Xmind" />Xmind</a>

### Notesnook

[Notesnook](https://notesnook.com/) is my note-taking app of choice. It's end-to-end encrypted and works across all my devices.

<a href="https://notesnook.com/" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/notesnook.svg" alt="Notesnook" />Notesnook</a>

### Firefox

[Firefox](https://www.mozilla.org/firefox/) is my daily driver. I switched back to it once they added vertical tabs. I still use chrome everyonce in a while though.

<a href="https://www.firefox.com/en-US/" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/firefox.jpeg" alt="Firefox" />Firefox</a>

## Password Managers

I use two password managers for different purposes:

### 1Password

[1Password](https://1password.com/) for most day-to-day passwords. The browser extension and autofill work great.

<a href="https://1password.com/" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/1password.png" alt="1Password" />1Password</a>

### KeePassXC

[KeePassXC](https://keepassxc.org/) for offline, air-gapped secrets. Some things I don't want synced to the cloud. KeePassXC stores everything locally in an encrypted database.

<a href="https://keepassxc.org/" target="_blank" rel="noopener noreferrer" class="tool-badge"><img src="/keepassxc.svg" alt="KeePassXC" />KeePassXC</a>


## What's Next

This list keeps evolving. The goal is to go from a fresh Mac to a fully productive dev environment in under an hour. I'm not quite there yet, but documenting everything is the first step toward a fully automated [setup script](https://github.com/davidgaribay-dev/dev-setup/blob/main/setups/mac.md).
