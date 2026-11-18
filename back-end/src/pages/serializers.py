from rest_framework.serializers import ModelSerializer
from .models import Song, User, Order


class SongSerializer (ModelSerializer):
  class Meta:
    model = Song
    fields = [
      "title", "album", "artist", "price", "image", "id"
    ]

class UserSerializer (ModelSerializer):
  class Meta:
    model = User
    fields = [
      "name", "email", "password"
    ]
    extra_kwargs = {
      "password": {"write_only": True},
    }

class OrderSerializer (ModelSerializer):
  class Meta:
    model = Order
    fields = [
      "id", "products", "total"
    ]