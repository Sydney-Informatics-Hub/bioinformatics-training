# bioinformatics-training

Catalogue of SIH bioinformatics training

## For contributors 

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Sydney-Informatics-Hub/bioinformatics-training.git
cd bioinformatics-training
```

2. Install required packages:
```bash
pip3 install -r requirements.txt
```

### Local development

To preview the site locally with live reloading:
```bash
mkdocs serve
```

Then open your browser to `http://127.0.0.1:8000`

### Building the site

To build the static site:
```bash
mkdocs build
```

The built site will be in the `site/` directory.

### Project structure

- `docs/` - Documentation source files (Markdown)
- `docs/assets/` - Images and other static assets
- `mkdocs.yml` - MkDocs configuration file
- `requirements.txt` - Python dependencies

### Making changes

1. Edit Markdown files in the `docs/` directory
2. Preview changes locally using `mkdocs serve`
3. Commit and push your changes
4. Create a pull request

### Adding new pages

1. Create a new `.md` file in the `docs/` directory
2. Add the page to the navigation in `mkdocs.yml` under the `nav:` section