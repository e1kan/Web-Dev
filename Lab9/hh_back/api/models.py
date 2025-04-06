from django.db import models

# Create your models here.

# A - Company Model
class Company(models.Model):
    name = models.CharField(max_length=75)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()

    def to_json(self): # represent class object as a string
        return {
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }

    def __str__(self): # represent class object as a string
        return self.name

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

# B - Vacancy Model
class Vacancy(models.Model):
    name = models.CharField(max_length=75)
    description = models.TextField()
    salary = models.FloatField()
    # To describe many-to-one relationship: each company has many
    # vacancy, but each vacancy belongs to only one company
    company = models.ForeignKey(Company, on_delete=models.CASCADE,
                                related_name='vacancies')

    def to_json(self):  # represent class object as a string
        return {
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': {
                'id': self.company.id,
                'name': self.company.name,
            }
        }

    def __str__(self): # represent class object as a string
        return self.name

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'
