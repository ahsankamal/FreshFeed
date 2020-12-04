# application factory
import os

from flask import Flask
from app.db import mongo
from app.main import main
from app.api.routes import api


def create_app(test_config='app.settings'):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )
    if test_config is None:
        print("test_config")
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_object(test_config)

    # initialize mongo with app
    mongo.init_app(app)

    # register blueprints
    app.register_blueprint(main)
    app.register_blueprint(api)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    return app
