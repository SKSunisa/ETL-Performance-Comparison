from django.urls import path
from . import views

app_name = 'pipeline'

urlpatterns = [
    path('', views.home, name='home'),
    path('ssis/', views.ssis, name='ssis'),
    path('knime/', views.knime, name='knime'),
    path('airflow-pyspark/', views.airflow_pyspark, name='airflow_pyspark'),
    path('airflow-pandas/', views.airflow_pandas, name='airflow_pandas'),
    path('analysis/', views.analysis, name='analysis'),
    path('test-translation/', views.test_translation, name='test_translation'),
]
