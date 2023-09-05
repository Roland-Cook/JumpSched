from main import app
from queries.accounts import AccountQueries, AccountOut
from fastapi.testclient import TestClient


client = TestClient(app)


class MockAccountQueries:
    def get(self, account):
            return [account]
    def create(self, account):
        result = {
                "id":"1010",
                "first_name":"name",
                "last_name":"lname",
                "email":"email@email.com",
                "username":"uname"
        }
        result.update(account)
        return AccountOut(**result)


def test_delete():
    app.dependency_overrides[AccountQueries]=MockAccountQueries
    id = "1010"
    response = client.delete("/api/accounts/{}".format(id))
    assert response.status_code == 404
    assert response.json()["detail"] == "Not Found"
