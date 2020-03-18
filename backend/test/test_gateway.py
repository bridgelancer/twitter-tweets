import os
import json

import pytest
from flask import request

import app as flaskr


@pytest.fixture(scope='module')
def client():
    with flaskr.app.test_client() as client:
        yield client

TIMELIME = '/timeline'

def test_public_timeline_retrieval(client):
    rv = client.get(f'{TIMELIME}?screen_name=realDonaldTrump')
    assert request.args['screen_name'] == 'realDonaldTrump'

    decoded_response_str = rv.data.decode()
    data = json.loads(decoded_response_str)
    assert len(data) == 10


def test_private_timeline_retrieval(client):
    rv = client.get(f'{TIMELIME}?screen_name=def')
    assert request.args['screen_name'] == 'def'

    decoded_response_str = rv.data.decode()
    data = json.loads(decoded_response_str)

    assert 'error' in data
    assert data['error'] == 'Not authorized.'

def test_http_methods_allowed(client):
    rv = client.post(f'{TIMELIME}?screen_name=def')
    assert rv.status == '405 METHOD NOT ALLOWED'

def test_no_query_string(client):
    rv = client.get(f'{TIMELIME}')
    assert request.args.get('screen_name') is None

    decoded_response_str = rv.data.decode()
    data = json.loads(decoded_response_str)
    assert len(data) == 10
