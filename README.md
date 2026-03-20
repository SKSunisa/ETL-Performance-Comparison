# ETL Pipeline Comparison Website

A modern, multilingual Django website comparing 4 ETL pipeline approaches with impressive 3D design.

## Project Overview

This website showcases a comprehensive comparison of four ETL (Extract, Transform, Load) pipeline implementations:
1. **SSIS** - SQL Server Integration Services
2. **KNIME** - Open-source Analytics Platform
3. **Airflow + PySpark** - Distributed processing with Apache Spark
4. **Airflow + Pandas** - Lightweight Python processing

## Features

- **Multilingual Support**: Thai (ไทย), English, and Chinese (中文)
- **Modern 3D UI**: Impressive dimensional design with animations
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Interactive Elements**: 3D card effects, parallax backgrounds
- **Comprehensive Content**: Methodology, analysis, and benchmarks for each tool

## Project Structure

```
seniorproject/
├── etl_comparison/          # Django project settings
├── pipeline/                # Main Django app
│   ├── templates/          # HTML templates
│   └── views.py            # View functions
├── static/                 # Static files
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript
│   └── images/            # Images from documents
├── document/              # Source documents
└── manage.py              # Django management script
```

## Installation & Setup

### Prerequisites
- Python 3.13+
- Django 4.2+

### Quick Start

1. **Navigate to project directory**:
   ```bash
   cd D:\seniorproject
   ```

2. **Run database migrations** (if not done):
   ```bash
   python manage.py migrate
   ```

3. **Start development server**:
   ```bash
   python manage.py runserver
   ```

4. **Access the website**:
   Open your browser and go to: `http://127.0.0.1:8000`

## Usage

### Changing Language

Click the language switcher button in the top-right corner to switch between:
- 🇹🇭 ไทย (Thai)
- 🇬🇧 English
- 🇨🇳 中文 (Chinese)

### Navigation

Use the top navigation bar to explore different sections:
- **Home**: Project overview and system architecture
- **SSIS**: Microsoft's ETL platform details
- **KNIME**: Open-source visual ETL tool
- **Airflow + PySpark**: Distributed big data processing
- **Airflow + Pandas**: Lightweight Python ETL
- **Analysis**: Comprehensive comparison and recommendations

## Pages

### 1. Home Page
- Project introduction
- System architecture diagrams
- Quick navigation to all tools

### 2. Tool-Specific Pages (SSIS, KNIME, Airflow+PySpark, Airflow+Pandas)
Each tool page includes:
- Implementation methodology
- Step-by-step setup guide
- Performance benchmarks
- Strengths and limitations
- Visual charts and diagrams

### 3. Analysis Page
- Overall performance comparison
- Feature comparison matrix
- Tool selection recommendations
- Comprehensive conclusion

## Design Features

### 3D Effects
- Animated background cubes and spheres
- Interactive card tilt on hover
- Parallax mouse movement effects
- Smooth transitions and animations

### Layout
- Text content: **Left-aligned** for readability
- Images: **Centered** with proper sizing
- Tables: **Centered** with modern styling
- Responsive grid layouts

## Technologies Used

- **Backend**: Django 4.2
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with 3D transforms
- **Fonts**: Kanit (Thai), Poppins (Latin)
- **Icons**: Font Awesome 6.4

## Content Source

All content and images are extracted from the original research documents located in `D:\seniorproject\document/`:
- Home: System architecture and overview
- SSIS: 16 files (PDFs, images, charts)
- KNIME: 10 files (PDFs, images, charts)
- Airflow + PySpark: 18 files (PDFs, images, charts)
- Airflow + Pandas: 4 files (PDFs, comparison charts)
- Timing Benchmark Results: 5 files (comparison visualizations)

## Development Notes

### Adding New Content
1. Place images in appropriate `static/images/` subdirectory
2. Update corresponding template in `pipeline/templates/pipeline/`
3. Add translations if needed

### Customizing Styles
- Main stylesheet: `static/css/style.css`
- JavaScript interactions: `static/js/main.js`

### Database
- Uses SQLite by default (db.sqlite3)
- No custom models required for current implementation

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Modern mobile browsers

## Performance

The website features:
- Lazy loading for images
- Optimized CSS animations
- Smooth scrolling
- Responsive image sizing

## License

This is a senior project for academic purposes.

## Credits

Developed as part of a comprehensive ETL pipeline comparison research project.

---

**Note**: Make sure to run the development server with `python manage.py runserver` before accessing the website.
"# ETL-Performance-Comparison" 
