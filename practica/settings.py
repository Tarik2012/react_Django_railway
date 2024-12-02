from pathlib import Path
import os
from decouple import config  # Manejo de variables de entorno
import dj_database_url  # Configuración simplificada de la base de datos

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECRET_KEY y DEBUG se manejan con variables de entorno
SECRET_KEY = config('SECRET_KEY', default='django-insecure-default-key')  # Cambiar en producción
DEBUG = config('DEBUG', default=True, cast=bool)

# Hosts permitidos
ALLOWED_HOSTS = config('ALLOWED_HOSTS', default='localhost,127.0.0.1').split(',')

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'producto',  # Tu aplicación
    'rest_framework',  # Django REST Framework
    'corsheaders',  # CORS Headers
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # CORS para manejar orígenes
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'practica.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'practica.wsgi.application'

# Database configuration
DATABASES = {
    'default': dj_database_url.config(
        default=f'sqlite:///{BASE_DIR / "db.sqlite3"}'
    )
}

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# CORS settings
CORS_ALLOW_ALL_ORIGINS = False  # Desactivado para producción
CORS_ALLOWED_ORIGINS = [
    "https://your-frontend-react.com",  # Reemplaza con el dominio de tu frontend
    "https://your-app-name.up.railway.app",  # Dominio generado por Railway
    "http://localhost:3000",  # Para desarrollo local
]

# Configuración para servir archivos estáticos en producción
MIDDLEWARE.insert(1, 'whitenoise.middleware.WhiteNoiseMiddleware')  # Agrega WhiteNoise al middleware

# Configuración de archivos estáticos y medios
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

