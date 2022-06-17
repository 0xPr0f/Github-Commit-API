import requests
import base64
import random
import string
import time


url = "https://api.github.com/repos/USERNAME/REPONAME/contents/FILEPATH"
headers = {"Authorization": "token TOKEN"}


def get_repo_content():
    response = requests.get(url, headers=headers)
    return response.json()


def edit_repo(name, email):
    res = get_repo_content()
    time.sleep(0.1)
    content = res['content']
    random_string_generated = random_string(2)
    decoded_content = base64.b64decode(content).decode()
    updated_content = decoded_content + random_string_generated

    edit_content = base64.b64encode(updated_content.encode('ascii'))
    time.sleep(0.1)
    data = {
        "message": "This is a bot upating the files",
        "committer": {
            "name": name,
            "email": email,
        },
        "content": edit_content.decode('utf-8'),
        "sha": res['sha'],
    }
    resp = requests.put(url, headers=headers, json=data)
    time.sleep(0.5)
    print(resp.status_code)
    print("edited and pushed")


def random_string(length):
    result = ''.join((random.choice(string.ascii_lowercase)
                     for x in range(length)))
    return result


x = 1
while x == 1:
    edit_repo("github_username", "email")
