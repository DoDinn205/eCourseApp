from rest_framework.pagination import PageNumberPagination


class CoursePaginatior(PageNumberPagination):
    page_size = 6

class CommentPaginatior(PageNumberPagination):
    page_size = 10