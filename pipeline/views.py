from django.shortcuts import render
from django.utils.translation import gettext as _

def home(request):
    """Home page view"""
    context = {
        'title': _('Home'),
        'page': 'home'
    }
    return render(request, 'pipeline/home.html', context)

def ssis(request):
    """SSIS page view"""
    context = {
        'title': 'SSIS',
        'page': 'ssis'
    }
    return render(request, 'pipeline/ssis.html', context)

def knime(request):
    """KNIME page view"""
    context = {
        'title': 'KNIME',
        'page': 'knime'
    }
    return render(request, 'pipeline/knime.html', context)

def airflow_pyspark(request):
    """Airflow with PySpark page view"""
    context = {
        'title': 'Airflow + PySpark',
        'page': 'airflow_pyspark'
    }
    return render(request, 'pipeline/airflow_pyspark.html', context)

def airflow_pandas(request):
    """Airflow with Pandas page view"""
    # Debug: Check current language
    from django.utils.translation import get_language, gettext
    current_lang = get_language()
    test_translation = gettext("STEP 1: ติดตั้ง Library เพิ่มเติม")
    print(f"DEBUG airflow_pandas: Language={current_lang}, Test translation={test_translation}")

    context = {
        'title': 'Airflow + Pandas',
        'page': 'airflow_pandas'
    }
    return render(request, 'pipeline/airflow_pandas.html', context)

def analysis(request):
    """Overall analysis and conclusion page view"""
    context = {
        'title': _('Analysis and Conclusion'),
        'page': 'analysis'
    }
    return render(request, 'pipeline/analysis.html', context)

def test_translation(request):
    """Test translation page"""
    from django.utils.translation import get_language
    context = {
        'LANGUAGE_CODE': get_language()
    }
    return render(request, 'pipeline/test_translation.html', context)
