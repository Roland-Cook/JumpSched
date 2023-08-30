from queries.accounts import AccountQueries, AccountOut
from main import app
from fastapi.testclient import TestClient

client =TestClient(app)

class MockAccountQueries:
        def get(self, account):
                return [account]
        def create(self,account,hashed_password):
                result = {
                        "id":"1010",
                        "first_name":"name",
                        "last_name":"lname",
                        "email":"email@email.com",
                        "username":"uname"
                    # }
                }
                result.update(account)
                return AccountOut(**result)


def test_create():
        # setup
        app.dependency_overrides[AccountQueries]=MockAccountQueries
        json={
                "password":"tpass",
                "first_name": "name",
                "last_name": "lname",
                "email": "email@email.com",
                "username":"uname"
        }
        expected = {

                    "id":"1010",
                    "first_name":"name",
                    "last_name":"lname",
                    "email":"email@email.com",
                    "username":"uname"
        }
        # enact
        response = client.post("/api/accounts", json=json)
        print("response", response)
        # assert
        assert response.status_code == 200
        assert response.json() == expected
        # teardown
        app.dependency_overrides={}