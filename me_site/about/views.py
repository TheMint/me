from about.models import Profile
from rest_framework.viewsets import ModelViewSet
from about.serializers import ProfileSerializer


class ProfileViewSet(ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
