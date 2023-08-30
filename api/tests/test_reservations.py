from main import app
from fastapi.testclient import TestClient
from queries.reservations import Reservationrepository
from unittest import TestCase


client = TestClient(app)

class EmptyReservationQueries(TestCase):
    def get_all(self):
        return []
    
    def test_get_all(self):
        app.dependency_overrides[Reservationrepository] = EmptyReservationQueries

        response = client.get("/reservation")
        print(response)
        assert response.status_code == 200
        assert response.json() == []

        app.dependency_overrides = {}
