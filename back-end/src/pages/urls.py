from django.urls import path, include
from .views import SongViewSet, UserCreateViewSet, OrderViewSet
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register("api/songs", SongViewSet, basename="song-viewset")
router.register("api/users", UserCreateViewSet, basename="users")
router.register("api/orders", OrderViewSet, basename="orders")


urlpatterns = [
  path("", include(router.urls))
]
