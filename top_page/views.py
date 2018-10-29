# Create your views here.

from django.core import serializers
from django.urls import reverse
from django.views import generic

from .models import SiteSection


class IndexView(generic.ListView):
    template_name = "top_page/index.html"

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['sections'] = serializers.serialize('json', [SiteSection(key="game", url="", name="Game Blog",
                                                                         image="https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781"),
                                                             SiteSection(key="thoughts", url="", name="Thoughts",
                                                                         image="https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"),
                                                             SiteSection(key="polls", url=reverse('polls:index'),
                                                                         name="Polls",
                                                                         image="https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900"),
                                                             SiteSection(key="github",
                                                                         url="https://github.com/alexwoopl?tab"
                                                                             "=repositories",
                                                                         name="Github",
                                                                         image="https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg")])
        return context

    def get_queryset(self):
        return
