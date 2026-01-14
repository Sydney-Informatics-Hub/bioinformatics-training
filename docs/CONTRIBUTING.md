---
hide:
  - navigation
  - toc
---

# Contribution guidelines

This guide is for SIH staff maintaining the bioinformatics training catalogue.

## Before you start

1. **Clone the repository** if you haven't already:
   ```bash
   git clone https://github.com/Sydney-Informatics-Hub/bioinformatics-training.git
   cd bioinformatics-training
   ```

2. **Install dependencies**:
  
  ```bash
  pip3 install -r requirements.txt
  ```

3. **Create a branch** for your changes:
  
  ```bash
  git checkout -b your-branch-name
  ```

## Adding new materials

### Learner-facing materials

Edit `docs/nextflow_courses.csv` (or the relevant topic CSV file):

Add a new row with all required fields:

  - **Topic**: Category (e.g., Nextflow, RNA-seq, etc.)
  - **Course**: Course title
  - **Description**: Brief description of the course
  - **Workshop materials**: Link to workshop documentation
  - **Repository**: Link to code repository
  - **Dataset**: Link to training dataset
  - **Webinar slides**: Link to presentation slides
  - **Webinar recording**: Link to video recording

Use the correct formatting

  - Icons
  - Workshop materials: `[:simple-readme:](url)`
  - Repository: `[:simple-github:](url)`
  - Webinar slides: `[:material-presentation:](url)`
  - Webinar recording: `[:simple-youtube:](url)`

**For empty cells**, use a space: `" "` (not `""` or blank, which renders as "nan")

#### Example
```csv
Nextflow,My New Course,Introduction to X,[:simple-readme:](https://link),[:simple-github:](https://repo)," ",[:material-presentation:](https://slides),[:simple-youtube:](https://video)
```

### Trainer resources

Edit `docs/assets/trainers.csv`:

Add a new row with:

  - **Course**: Course title
  - **Instructor notes**: Link to instructor guide
  - **Materials**: Link to materials repository
  - **Data**: Link to data repository
  - **Reference**: Link to reference documentation
  - **Maintainers**: Name(s) of course maintainer(s)

#### Use the correct icons
  - Instructor notes: `[:material-note-plus-outline:](url)`
  - Materials/Data: `[:simple-github:](url)`
  - Reference: `[:material-note-plus-outline:](url)`

#### Example
```csv
My Course,[:material-note-plus-outline:](https://instructor-notes),[:simple-github:](https://materials),[:simple-github:](https://data),[:material-note-plus-outline:](https://reference),Jane Doe
```

## Testing your changes

**Always test locally before pushing:**

```bash
mkdocs serve
```

Then open `http://127.0.0.1:8000` in your browser and verify:

- ✓ Tables render correctly
- ✓ No "nan" values appear in empty cells
- ✓ All links work
- ✓ Icons display properly
- ✓ Formatting is consistent

## Submitting changes

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add [course name] to [learners/trainers] page"
   ```

2. **Push to GitHub**:
   ```bash
   git push origin your-branch-name
   ```

3. **Create a pull request** on GitHub and request review from another team member

## Standards and best practices

### CSV formatting
- Use consistent capitalization in course titles
- Keep descriptions concise (1-2 sentences)
- Always use spaces `" "` for empty cells
- Test that all URLs are working before submitting

### Icons
- Only use the [approved icon set](https://simpleicons.org/) 
- Always link icons to relevant resources: `[:icon:](url)` not just `:icon:`
- Maintain consistency with existing entries

### Commit messages
- Use clear, descriptive commit messages
- Format: `Add/Update/Fix [what] for [course/page]`
- Examples:
  - `Add Nextflow on HPC course to learners page`
  - `Update instructor notes for RNA-seq workshop`
  - `Fix broken link in trainers materials`

### Documentation
- Update the README.md if you add new CSV files or change the structure
- Document any new icons or conventions you introduce
- Keep the contribution guidelines up to date
