import os

from TwitterAPI import TwitterAPI
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.debug = True

CONSUMER_KEY = os.environ['CONSUMER_KEY']
CONSUMER_SECRET = os.environ['CONSUMER_SECRET']
api = TwitterAPI(CONSUMER_KEY, CONSUMER_SECRET, auth_type='oAuth2')

@app.route('/timeline')
def get_timeline():
    r = api.request('statuses/user_timeline',
        {
            'screen_name': request.args.get('screen_name') or 'twitterapi',
            'count': 10
        }
    )
    return r.text

if __name__ == '__main__':
    app.run(use_reloader=False)
