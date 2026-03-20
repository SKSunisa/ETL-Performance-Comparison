# 🚀 ETL Pipeline Performance Comparison

## การเปรียบเทียบประสิทธิภาพ ETL Pipeline 4 แนวทาง

> A comprehensive comparison of 4 ETL pipeline approaches: SSIS, KNIME, Apache Airflow + PySpark, and Apache Airflow + Pandas

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-5.1.4-green.svg)](https://www.djangoproject.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

### 🌐 [**Live Demo**](https://etl-comparison.onrender.com) | [GitHub Repository](https://github.com/SKSunisa/ETL-Performance-Comparison)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [ETL Tools Compared](#etl-tools-compared)
- [Key Findings](#key-findings)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Languages](#languages)
- [Author](#author)

---

## 🎯 Overview

This project presents a comprehensive performance comparison of **4 different ETL pipeline approaches** using a Credit Card Fraud Detection dataset. The comparison evaluates execution time, scalability, and efficiency across different data sizes (10k, 100k, and 1 million rows).

The results are presented through an **interactive, multilingual Django website** with modern 3D design and data visualizations.

---

## ✨ Features

- 🌐 **Multilingual Support**: Thai (ไทย), English, Chinese (中文)
- 📊 **Interactive Visualizations**: Charts and graphs comparing ETL performance
- 🎨 **Modern 3D Design**: Impressive UI with smooth animations
- 📱 **Responsive Layout**: Works on desktop, tablet, and mobile
- 🔍 **Detailed Analysis**: Step-by-step methodology and results for each tool
- 📈 **Performance Metrics**: Extract, Transform, Load time comparisons
- 🎯 **Real-world Dataset**: Credit Card Fraud Detection (10k, 100k, 1M rows)

---

## 🛠️ Tech Stack

### Backend
- **Django 5.1.4** - Python web framework
- **Python 3.8+** - Core programming language

### Frontend
- **HTML5** - Structure
- **CSS3** - Modern 3D styling with animations
- **JavaScript** - Interactive components

### Internationalization
- **Django i18n** - Translation framework
- **gettext** - Message catalog management

### ETL Tools Tested
- **Microsoft SSIS** - SQL Server Integration Services
- **KNIME** - Open-source data analytics platform
- **Apache Airflow 2.8.0 + PySpark** - Distributed data processing
- **Apache Airflow 2.8.0 + Pandas** - Single-node data processing

---

## 🔧 ETL Tools Compared

### 1. **Microsoft SSIS**
Traditional ETL tool with visual workflow designer, integrated with SQL Server ecosystem.

### 2. **KNIME**
Open-source platform for data analytics, reporting, and integration with visual workflow.

### 3. **Apache Airflow + PySpark**
Modern workflow orchestration with distributed computing capabilities using Apache Spark.

### 4. **Apache Airflow + Pandas**
Workflow orchestration with lightweight, single-node data processing using Pandas.

---

## 📊 Key Findings

### Performance Summary (1 Million Rows)

| Tool | Total Time | Extract | Transform | Load |
|------|-----------|---------|-----------|------|
| **Pandas** | 130.68s | 19.04s | 9.53s | 102.11s |
| **KNIME** | 220.67s | 31.17s | 78.53s | 110.97s |
| **SSIS** | 318.29s | 25.39s | 202.53s | 90.37s |
| **PySpark** | 1,013.70s | 19.36s | 38.97s | 955.37s |

### Key Insights

- ✅ **Pandas** is fastest for small to medium datasets (10k-1M rows)
- ✅ **PySpark** overhead makes it slower for smaller datasets but scales better theoretically
- ✅ **KNIME** offers good balance between performance and ease of use
- ✅ **SSIS** shows consistent performance but slower for complex transformations

---

## 🚀 Installation

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/SKSunisa/ETL-Performance-Comparison.git
cd ETL-Performance-Comparison
```

2. **Create virtual environment** (optional but recommended)
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install django
```

4. **Compile translation messages**
```bash
python manage.py compilemessages
```

5. **Run migrations**
```bash
python manage.py migrate
```

---

## 💻 Usage

### Start the development server
```bash
python manage.py runserver
```

### Access the website
Open your browser and navigate to:
```
http://localhost:8000
```

### Change language
Click the language selector in the navigation bar to switch between:
- 🇹🇭 Thai (ไทย)
- 🇬🇧 English
- 🇨🇳 Chinese (中文)

---

## 📁 Project Structure

```
ETL-Performance-Comparison/
├── etl_comparison/          # Django project settings
│   ├── settings.py          # Main configuration
│   ├── urls.py              # URL routing
│   └── wsgi.py              # WSGI configuration
├── pipeline/                # Main Django app
│   ├── templates/           # HTML templates
│   │   └── pipeline/        # App-specific templates
│   ├── views.py             # View logic
│   └── urls.py              # App URL patterns
├── static/                  # Static files
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript files
│   └── images/              # Charts and visualizations
├── locale/                  # Translation files
│   ├── en/                  # English translations
│   ├── th/                  # Thai translations
│   └── zh_hans/             # Chinese translations
├── templates/               # Global templates
│   └── base.html            # Base template
├── manage.py                # Django management script
└── README.md                # This file
```

---

## 🌍 Languages

This website supports 3 languages:

- **Thai (ไทย)** - Default language
- **English** - Full translation
- **Chinese (中文)** - Full translation

Translation is handled using Django's built-in i18n framework with gettext.

---

## 🎓 Research Context

This project was developed as part of a senior project research comparing ETL pipeline performance using real-world fraud detection data. The study evaluates:

- **Execution Time**: How fast each tool processes data
- **Scalability**: How performance changes with data volume
- **Resource Usage**: Memory and CPU utilization
- **Ease of Use**: Development and maintenance complexity

---

## 📸 Website Pages

### Home Page
- Project overview and introduction
- System architecture diagrams
- Quick navigation to all ETL tools

### Tool-Specific Pages
Each ETL tool has a dedicated page with:
- **Implementation Tab**: Step-by-step methodology and setup
- **Analysis Tab**: Performance results and benchmarks
- Interactive charts and visualizations

### Overall Analysis Page
- Comprehensive comparison of all 4 tools
- Performance comparison charts
- Recommendations based on use case

---

## 👩‍💻 Author

**SKSunisa**
- GitHub: [@SKSunisa](https://github.com/SKSunisa)
- Repository: [ETL-Performance-Comparison](https://github.com/SKSunisa/ETL-Performance-Comparison)

---

## 📝 License

This project is open source and available for educational purposes.

---

## 🙏 Acknowledgments

- Credit Card Fraud Detection Dataset
- Django Community
- Open-source ETL tool communities (KNIME, Apache Airflow, PySpark, Pandas)

---

## 🔗 Links

- **🌐 Live Demo**: https://etl-comparison.onrender.com
- **📁 GitHub Repository**: https://github.com/SKSunisa/ETL-Performance-Comparison
- **📚 Django Documentation**: https://docs.djangoproject.com/
- **🌍 i18n Documentation**: https://docs.djangoproject.com/en/stable/topics/i18n/

---

<div align="center">

**⭐ If you find this project useful, please consider giving it a star! ⭐**

Made with ❤️ for ETL performance research

</div>
