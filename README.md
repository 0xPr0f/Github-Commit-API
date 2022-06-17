# Github-Commit-API

This is a project that lets you push comit from code using the github api to edit specific repo/file content.

This is project was made bare bones with no single regard for frontend lol.

## How it works/ work it

clone project locally with git clone, then install packages `npm i`, and then fix in the missing variables there are some variable
that are missing, fill them up

Name / USERNAME - username of the access token.  
Email - email the username belong to.  
REPONAME - name of the repo to look for the file in.  
FILEPATH - path to the file.  
TOKEN - authorisation token / personal access token to grant access. [read more here about the token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

The concept is that if you call the function to get repos content, github returns it with the content (encoded into base64) and the sha (hash), then you can call a fucntion to decode the content to text and the you can edit that text and encode it back to be sent, the sha is like the hash of the latest commit whhich is needed.

Then you can call the content of a file and pass it data to be able to edit the file, you will pass it the new content, the previous commit hash, the username of the commiter, the email of the username, the authorisation token for the commiter, then a message (commit message).

### Note

The authorisation token for the commiter must have the repos access, you can give it full access (select all the checks but dont push the token to github lol).  
The content needs to be decode to be read and edited and encoded to be sent back.  
The commit hash must be updated.  
example

```js
{
          message: "This is a bot upating the files",
          committer: {
            name: "Name",
            email: "Email",
          },
          content: editcontent,
          sha: data.data.sha,
        },
        {
          headers: {
            Authorization: `token TOKEN`,
          },
        }
```

Then you can call a loop that fetch the previous comit hash and the content (do the needfull) and send it in a new commit and reapeat.

## code in python

If you hate frontend, there is a python script to run (configure it in the same way above and it should run  
The script name is `commits.py`

### The github contains a basic implementation, UI will be expected in a few weeks or months

### Please earn those contribution green checks not cheat your way through it 😅😅🥲😝
