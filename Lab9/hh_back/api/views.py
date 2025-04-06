from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Company, Vacancy

# Create your views here.

# 1. List of all Companies
def company_list(request):
    companies = Company.objects.all()
    return JsonResponse([c.to_json() for c in companies], safe=False)

# 2. Get one Company
def company_detail(request, id):
    company = get_object_or_404(Company, id=id)
    return JsonResponse(company.to_json())

# 3. List of Vacancies by Company
def vacancy_by_company(request, id):
    vacancies_by_company = Vacancy.objects.filter(company__id=id)
    return JsonResponse([v.to_json() for v in vacancies_by_company], safe=False)

# 4. List of all Vacancies
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    return JsonResponse([v.to_json() for v in vacancies], safe=False)

# 5. Get one Vacancy
def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, id=id)
    return JsonResponse(vacancy.to_json())

# 6. List of top 10 Vacancies by decreasing salary
def top_ten_vacancies(request):
    sorted_vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    return JsonResponse([v.to_json() for v in sorted_vacancies], safe=False)
