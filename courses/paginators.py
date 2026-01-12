from rest_framework.pagination import PageNumberPagination


class CoursePaginatior(PageNumberPagination):
    page_size = 6
