# A Flask server for retrieving latest tweets

This project leverages the [TwitterAPI](https://github.com/geduldig/twitterapi) project for connecting to the Twitter
API, without the need of engineering the authenticated keys and requests based
on the [Twitter official documentation](https://developer.twitter.com/en/docs/basics/authentication/oauth-2-0/application-only).

## Quick start
Python 3.6+ is required for development of the project.

Source code of this project could be found on this [Github link](). To clone the repository to the current working directory, run

`git clone `

To initialize the project, please run the following commands in sequence first:

### Virtual environment configuration
1. `export PYTHONPATH=src/to/your/backend/`
2. `python3 -m venv venv`
3. `. venv/bin/activate`
4. `pip install -r requirements.py`

The above commands creates the virtual environment that contains the appropriate versions of dependencies according to the requirements file.

To start the server, activate the Python virtual environment and run:
`python app.py`

### Environment variable setup
Twitter consumer API keys and secrets are required for the OAuth2 process. To
provide these values to the TwitterAPI library, please export the following
these two variables to shell:

`export CONSUMER_KEY=$your_key`
`export CONSUMER_SECRET=$your_secret`

The Flask server would *not* start (and test would also *not* run) if these are not
properly configured.

A Flask server would be fired up if dependencies are installed properly and the environmental variables configured.
The running instance would be listening to address `http://127.0.0.1:5000`.

## Testing
[Pytest](https://docs.pytest.org/en/latest/index.html) is used. To run the test batteries, execute `pytest` after virtual environment is launched, run `pytest`
