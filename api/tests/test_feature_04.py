from fastapi.testclient import TestClient
from unittest import TestCase
from queries.testimonial import Testimonialrepository
from main import app

client = TestClient(app)


class EmptyTestimonialQueries(TestCase):
    def get_all_test(self):
        return []

    def test_get_all_test(self):
        app.dependency_overrides[Testimonialrepository] = EmptyTestimonialQueries

        response = client.get("/testimonial")
        assert response.status_code == 200
        assert response.json() == []

        app.dependency_overrides = {}
