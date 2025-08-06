"# Agent Network Briefs

A Jekyll-powered GitHub Pages site dedicated to AI agent network analysis and research.

## Live Site

This site is automatically deployed to GitHub Pages at: `https://[your-username].github.io/agent-network-briefs`

## Adding New Briefs

To add a new brief to your site:

1. Create a new Markdown file in the `_briefs` folder
2. Use this naming convention: `YYYY-MM-DD-brief-title.md`
3. Include the front matter at the top:

```yaml
---
title: "Your Brief Title"
date: 2025-01-15
author: "Author Name"
tags: ["tag1", "tag2", "tag3"]
excerpt: "A short description that appears on the home page"
---
```

4. Write your content in Markdown below the front matter
5. Commit and push - the site will automatically update!

## Local Development

To run this Jekyll site locally:

1. Install Ruby and Bundler
2. Clone the repository
3. Run:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
4. Visit `http://localhost:4000`

## Project Structure

```
├── _briefs/            # Markdown files for your briefs
├── _layouts/           # Jekyll page templates
│   ├── default.html    # Main site layout
│   └── brief.html      # Individual brief layout
├── assets/
│   ├── css/style.css   # Site styling
│   └── js/script.js    # JavaScript functionality
├── _config.yml         # Jekyll configuration
├── index.html          # Homepage
├── Gemfile            # Ruby dependencies
├── .github/workflows/ # GitHub Actions for deployment
└── README.md          # This file
```

## Features

- **Jekyll-Powered**: Automatic generation from Markdown files
- **Responsive Design**: Works on desktop and mobile devices
- **Auto-Deploy**: Automatically updates when you push changes
- **SEO-Friendly**: Proper meta tags and sitemap generation
- **Tag System**: Organize briefs with tags
- **Excerpt Support**: Brief previews on the homepage

## Brief Template

Here's a template for new briefs:

```markdown
---
title: "Your Brief Title Here"
date: 2025-01-15
author: "Your Name"
tags: ["tag1", "tag2", "tag3"]
excerpt: "A compelling one-sentence description of your brief."
---

# Introduction

Your brief content here...

## Section Headers

Use standard Markdown formatting:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Code blocks
- Lists and tables

## Conclusion

Wrap up your analysis...

---

*Optional footer note or citation*
```

## Customization

### Styling
- Edit `assets/css/style.css` to customize colors, fonts, and layout
- The default theme uses a purple gradient

### Site Configuration
- Update `_config.yml` to change site title, description, and settings
- Modify `_layouts/default.html` to change the overall page structure

### Content Structure
- Add new sections to `index.html`
- Create new layouts in `_layouts/` for different content types

## GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar  
3. Under "Source", select "GitHub Actions"
4. The Jekyll workflow will automatically build and deploy your site

## Contributing

1. Fork the repository
2. Create a new brief in `_briefs/`
3. Submit a pull request
4. Your brief will be reviewed and published

## License

This project is open source and available under the [MIT License](LICENSE)." 
