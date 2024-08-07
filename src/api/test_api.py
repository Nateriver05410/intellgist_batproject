import requests

# Login
response = requests.post('http://localhost:5000/login', json={'username': 'john', 'password': 'password'})
print(response.json())

# Protected Route
response = requests.get('http://localhost:5000/protected')
print(response.json())

# Logout
response = requests.post('http://localhost:5000/logout')
print(response.json())