import requests
import jwt
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization

# Replace these values with your GitHub App's details
APP_ID = 'your-app-id'
PRIVATE_KEY_PATH = 'path-to-your-private-key.pem'
GITHUB_API_ENDPOINT = 'https://api.github.com/user'

def generate_jwt():
    # Load private key
    with open(PRIVATE_KEY_PATH, 'rb') as key_file:
        private_key = serialization.load_pem_private_key(
            key_file.read(),
            password=None,
            backend=default_backend()
        )

    # Generate JWT
    jwt_payload = {
        'iat': jwt.iat,
        'exp': jwt.exp,
        'iss': APP_ID,
    }

    jwt_token = jwt.encode(jwt_payload, private_key, algorithm='RS256')
    return jwt_token.decode('utf-8')

def make_api_call(jwt_token):
    headers = {
        'Authorization': f'Bearer {jwt_token}',
        'Accept': 'application/vnd.github.v3+json',
    }

    response = requests.get(GITHUB_API_ENDPOINT, headers=headers)

    if response.status_code == 200:
        print("API call successful:")
        print(response.json())
    else:
        print(f"API call failed with status code {response.status_code}:")
        print(response.text)

if __name__ == "__main__":
    jwt_token = generate_jwt()
    make_api_call(jwt_token)

