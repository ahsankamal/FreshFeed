from wtforms import Form, BooleanField, DateTimeField, StringField, validators, IntegerField, FloatField

class DuckFeedForm():

    def is_valid(self, params):
        message = ''
        isValid = True
        if params.get('feederName') is None or len(params.get('feederName'))<3 or len(params.get('feederName'))>200:
            message += '\nFeeder name is invalid\n'
            isValid = False
        if params.get('duckCount') is None or len(params.get('duckCount'))<0:
            message += '\nDuck count is invalid\n'
            isValid = False
        if params.get('foodName') is None or len(params.get('foodName'))<3 or len(params.get('foodName'))>200:
            message += '\nFood name is invalid\n'
            isValid = False
        if params.get('foodAmount') is None or len(params.get('foodAmount'))<0:
            message += '\nFood amount is invalid\n'
            isValid = False
        if params.get('parkLocation') is None or len(params.get('parkLocation'))<15 or len(params.get('parkLocation'))>250:
            message += '\nPark location/address is invalid\n'
            isValid = False
        if params.get('dateTime') is None:
            message += '\nDuck feed DateTime field is mandatory\n'
            isValid = False
        return {"valid":isValid, "message":message}

    def get_permitted_params(self, params):
        permitted_attr = ['feederName', 'email', 'duckCount', 'foodName', 'foodAmount', 'parkLocation', 'dateTime']
        return { key: params[key] for key in permitted_attr }

# sample params: {'feederName': 'sada', 'email': '', 'duckCount': '2', 'foodName': 'efwsa', 'foodAmount': '12', 'parkLocation': 'sdfew fwe f wef w fw ef w', 'dateTime': '2020-12-03T16:39:07.091Z'}
# WTform validation
# class DuckFeedForm(Form):
#     feeder_name = StringField('FeederName', [validators.DataRequired(), validators.Length(min=3, max=200)])
#     feeder_email = StringField('FeederEmail', [validators.Length(min=6, max=35)])
#     duck_count = IntegerField('DuckCount', [validators.DataRequired(), validators.NumberRange(min=0)])
#     food_name = StringField('FoodName', [validators.DataRequired(), validators.Length(min=3, max=200)])
#     food_amount = FloatField('FoodAmount', [validators.DataRequired(), validators.NumberRange(min=0)])
#     park_location = StringField('ParkLocation', [validators.DataRequired(), validators.Length(min=15, max=250)])
#     date_time = DateTimeField('DateTime', [validators.DataRequired()])