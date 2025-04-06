from django.urls import path
from .views import *

urlpatterns = [
    # function-based views
    path('companies/', company_list),
    path('companies/<int:id>', company_detail),
    path('companies/<int:id>/vacancies/', vacancy_by_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/', top_ten_vacancies),
]
