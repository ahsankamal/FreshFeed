from flask import Blueprint
from app.db import mongo
from app.forms.duck_feed_form import DuckFeedForm
from flask_cors import CORS
from flask import jsonify, request
from app.models.feed import Feed
from datetime import datetime

api = Blueprint('api', __name__, url_prefix='/api')
CORS(api, resources=r'/api/*')

@api.route('/submit', methods=['POST'])
def submit_feed_form():
    print(request.form)
    form_data = request.get_json()
    print(form_data)
    if form_data is not None and form_data.get('formData') is not None:
        duck_feed_form = DuckFeedForm()
        validation_result = duck_feed_form.is_valid(form_data.get('formData'))
        if validation_result.get('valid') is False:
            return jsonify({'success': False, 'message':validation_result.get('message')}), 400
        # validation successful
        permitted_params = duck_feed_form.get_permitted_params(form_data.get('formData'))
        try:
            permitted_params['feedTime'] = datetime.strptime(permitted_params.pop('dateTime'), '%Y-%m-%dT%H:%M:%S.%fZ')
        except Exception as e:
            return jsonify({'success': False, 'message': 'Bad request. Invalid format of dateTime. Expected format is %Y-%m-%dT%H:%M:%S.%fZ'}), 400
            print(e)
        print(permitted_params)
        # insert in mongo
        feed_id = Feed().insert_one(permitted_params)
        if feed_id is not None:
            return jsonify({'success': True, 'message':'Feed Form successfully submitted', 'feed_id':str(feed_id)}), 200
        else:
            return jsonify({'success': False, 'message': 'Error while submitting feed form data'}), 400
    return jsonify({'success': False, 'message':'Bad request. Form data cannot be empty'}), 400

@api.route('/viewSubmissions', methods=['GET'])
def get_feed_form_submissions():
    form_data = Feed().fetch_all()
    if form_data is not None:
        return jsonify({'success': True, 'message':'successfully fetched feed form data', 'data':form_data}), 200
    else:
        return jsonify({'success': False, 'message': 'Something went wrong.'}), 400