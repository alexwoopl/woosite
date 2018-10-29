from django.test import TestCase

# Create your tests here.
from django.urls import reverse


class TopPageIndexViewTests(TestCase):

    def test_top_page_shows_correct_initial_content(self):
        """
        Ensure that the top page will show the correct information on initial load
        :return:
        """
        response = self.client.get(reverse('top_page:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Woo's Things")
