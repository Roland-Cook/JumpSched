import pytest
from unittest import TestCase


class TestSignupEnd(TestCase):
    def setUp(self):
        self.client=Client()
        self.response=self.client.get
    def test_signup_page(self):
        # arrange
        try:
            from ghi.src.account
        # act

        # assert
