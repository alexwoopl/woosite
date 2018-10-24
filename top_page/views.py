
# Create your views here.
from django.urls import reverse
from django.views import generic

from .models import SiteSection


class IndexView(generic.ListView):
    template_name = "top_page/index.html"

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['sections'] = [SiteSection(key="game", url="", name="Game Blog"),
                               SiteSection(key="thoughts", url="", name="Thoughts"),
                               SiteSection(key="polls", url=reverse('polls:index'), name="Polls"),
                               SiteSection(key="github", url="", name="Github")]
        return context

    def get_queryset(self):
        return
