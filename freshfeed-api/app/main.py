from flask import Blueprint
from .db import mongo
from flask_cors import CORS

main = Blueprint('main', __name__)
CORS(main)

@main.route('/')
def hello_world():
    return 'Hello World!'

