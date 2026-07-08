from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import User
from .serializers import RegisterSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]


class MeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = RegisterSerializer(request.user)
        return Response(serializer.data)