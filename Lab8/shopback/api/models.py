from django.db import models

# Create your models here.

# B - Category Model
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# A - Product model
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    # To describe many-to-one relationship: each category has many
    # products, but each product belongs to only one category
    category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                related_name='products')

    def __str__(self): # represent class object as a string
        return self.name
