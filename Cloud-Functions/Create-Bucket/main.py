import os
from google.cloud import storage
from datetime import datetime

def create_bucket(request):
    storage_client = storage.Client()

    current_time = datetime.now().strftime("%Y%m%d%H%M%S")
    bucket_name = f"{current_time}-matvey"

    bucket = storage_client.bucket(bucket_name)
    bucket.location = 'US'

    try:
        new_bucket = storage_client.create_bucket(bucket)
        return f'Bucket {new_bucket.name} created successfully.'
    except Exception as e:
        return str(e), 500
