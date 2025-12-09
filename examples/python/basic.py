"""
Wordle Helper API - Basic Usage Example

This example demonstrates the basic usage of the Wordle Helper API.
API Documentation: https://docs.apiverve.com/ref/wordlehelper
"""

import os
import requests
import json

API_KEY = os.getenv('APIVERVE_API_KEY', 'YOUR_API_KEY_HERE')
API_URL = 'https://api.apiverve.com/v1/wordlehelper'

def call_wordlehelper_api():
    """
    Make a GET request to the Wordle Helper API
    """
    try:
        # Query parameters
        params &#x3D; {&#x27;green&#x27;: &#x27;A1,E5&#x27;, &#x27;yellow&#x27;: &#x27;R2,O3&#x27;, &#x27;gray&#x27;: &#x27;STLN&#x27;, &#x27;pattern&#x27;: &#x27;A___E&#x27;, &#x27;limit&#x27;: 25}

        headers = {
            'x-api-key': API_KEY
        }

        response = requests.get(API_URL, headers=headers, params=params)

        # Raise exception for HTTP errors
        response.raise_for_status()

        data = response.json()

        # Check API response status
        if data.get('status') == 'ok':
            print('✓ Success!')
            print('Response data:', json.dumps(data['data'], indent=2))
            return data['data']
        else:
            print('✗ API Error:', data.get('error', 'Unknown error'))
            return None

    except requests.exceptions.RequestException as e:
        print(f'✗ Request failed: {e}')
        return None

if __name__ == '__main__':
    print('📤 Calling Wordle Helper API...\n')

    result = call_wordlehelper_api()

    if result:
        print('\n📊 Final Result:')
        print(json.dumps(result, indent=2))
    else:
        print('\n✗ API call failed')
