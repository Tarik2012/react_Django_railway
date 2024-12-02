from django.db import models

# Create your models here.
class ProductoModel(models.Model):
    name = models.CharField('Nombre',max_length=20)
    description = models.TextField('descripcion')
    price = models.DecimalField('precio',max_digits=10,decimal_places=2)
    date = models.DateField(("fecha"), auto_now=False, auto_now_add=False)


    class Meta:
        verbose_name = ("Producto")
        verbose_name_plural = ("Productos")

    def __str__(self):
        return self.name

    # def get_absolute_url(self):
    #     return reverse("_detail", kwargs={"pk": self.pk})
