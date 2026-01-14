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

### Adding new training materials

To add new courses or workshops to the learners page:

1. Edit the relevant CSV file in the `docs/` directory (e.g., `nextflow_courses.csv`)
2. Add a new row with the course information:
   - Fill in all required columns (Topic, Course, Description, Workshop materials, Repository, Dataset, Webinar slides, Webinar recording)
   - Use a space `" "` for empty cells (not empty quotes `""`) to avoid "nan" rendering
   - For links, use markdown format: `[text](url)` or `[:icon-name:](url)` for icons with links
   - For icons without links, just use `:icon-name:`
3. Preview your changes with `mkdocs serve`
4. Commit and push your changes

**Icon reference for each column:**

- **Workshop materials**: `:simple-readme:` - Readme icon for workshop documentation
- **Repository**: `:simple-github:` - GitHub icon for code repositories
- **Dataset**: Use appropriate icon for the dataset type
- **Webinar slides**: `:material-presentation:` - Presentation/slides icon
- **Webinar recording**: `:simple-youtube:` - YouTube icon for video recordings

**Example CSV row:**
```csv
Nextflow,My Course,Course description,[:simple-readme:](https://link-to-materials),:simple-github:," ",:material-presentation:,:simple-youtube:
```

**Note:** The tables on the site are automatically generated from CSV files using the table-reader-plugin, so edit the CSV files directly rather than markdown tables.

### Adding new pages

1. Create a new `.md` file in the `docs/` directory
2. Add the page to the navigation in `mkdocs.yml` under the `nav:` section