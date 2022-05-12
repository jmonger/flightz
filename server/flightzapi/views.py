from django.shortcuts import render
from rest_framework import viewsets

from .serializers import InquirySerializer
from .models import Inquiry

class InquiryViewSet(viewsets.ModelViewSet):
    queryset = Inquiry.objects.all().order_by('name')
    serializer_class = InquirySerializer