import os
import urllib
# MONGO_URI='mongodb+srv://admin:freshfeed@123@cluster0.ebvnf.mongodb.net/freshfeed?retryWrites=true&w=majority'
MONGO_URI= f"mongodb+srv://{urllib.parse.quote_plus(os.environ.get('MONGO_USERNAME', 'admin'))}:{urllib.parse.quote_plus(os.environ.get('MONGO_PASSWORD'))}@{os.environ.get('MONGO_HOST')}/{os.environ.get('MONGO_DATABASE')}?retryWrites=true&w=majority"
print(f"Mongo{MONGO_URI}")

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://0.0.0.0:8000',
]