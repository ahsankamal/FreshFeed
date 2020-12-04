from app.db import mongo

class Feed:

    def insert_one(self, feed_attr_dict={}):
        if not feed_attr_dict:
            return False
        try:
            result = mongo.db.feed.insert_one(feed_attr_dict)
            return result.inserted_id
        except Exception as e:
            print(e)

    def fetch_all(self):
        result = []
        try:
            cursor = mongo.db.feed.find().sort("feedTime",-1)
            for item in cursor:
                print(item)
                item['id'] = str(item.pop('_id'))
                result.append(item)
        except Exception as e:
            print(e)
        return result