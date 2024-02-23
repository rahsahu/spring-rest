import requests

# Replace 'your-token' with your GitHub personal access token
token = 'your-token'

# GitHub API endpoint for listing organizations
api_url = 'https://api.github.com/user/orgs'

# Headers with the authorization token
headers = {
    'Authorization': f'Bearer {token}',
    'Accept': 'application/vnd.github.v3+json'
}

# Make the GET request
response = requests.get(api_url, headers=headers)

# Check the response
if response.status_code == 200:  # 200 OK indicates success
    organizations = response.json()
    print('List of organizations:')
    for org in organizations:
        print(org['login'])
else:
    print('Error:', response.status_code)
    print('Response:', response.text)

