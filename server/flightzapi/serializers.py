from rest_framework import serializers

from .models import Inquiry

class InquirySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Inquiry
        fields = ('name', 'email', 'phone', 'message')

        