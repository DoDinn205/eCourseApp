from rest_framework.decorators import action
from django.http import HttpResponse
from rest_framework import viewsets, generics, permissions, status
from rest_framework.pagination import PageNumberPagination
from courses.models import Category, Course
from courses import serializers, paginators
from rest_framework.response import Response

class CategoriesView(viewsets.ViewSet, generics.ListAPIView ):
    queryset = Category.objects.all()
    serializer_class = serializers.CategorySerializer
    permission_classes = [permissions.IsAuthenticated]

class CoursesView(viewsets.ViewSet, generics.ListAPIView):
    queryset = Course.objects.filter(active=True)
    serializer_class = serializers.CourseSerializer
    pagination_class = paginators.CoursePaginatior

    def get_queryset(self):
        query =self.queryset
        q = self.request.query_params.get('q')
        if q:
            query = query.filter(subject__icontains=q)

        cate_id = self.request.query_params.get('category_id')
        if cate_id:
            query = query.filter(category_id=cate_id)

        return query
    @action(methods=['get'], url_path='lessons', detail=True)
    def get_lessons(self, request, pk):
        lessons = self.get_object().lesson_set.filter(active=True)
        return Response(serializers.LessonSerializer(lessons, many=True).data, status=status.HTTP_200_OK)
