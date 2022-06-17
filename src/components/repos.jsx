import axios from "axios";
export const editRepos = async (
  editcontent,
  name,
  email,
  repopath,
  contentpath
) => {
  const data = await getReposTouse(repopath, contentpath);
  delay(2);
  try {
    const res = await axios
      .put(
        `https://api.github.com/repos/${repopath}/contents/${contentpath}`,
        {
          message: "Upated files",
          committer: {
            name: name,
            email: email,
          },
          content: editcontent,
          sha: data.data.sha,
        },
        {
          headers: {
            Authorization: `token ${window.localStorage.getItem(
              "accessToken"
            )}`,
          },
        }
      )
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("done and commited");
      });
    delay(2);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
export const getReposTouse = async (repopath, contentpath) => {
  try {
    const res = await axios(
      `https://api.github.com/repos/${repopath}/contents/${contentpath}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
//0xPr0f/complete-UI-project

export const getRepos = async () => {
  try {
    const res = await axios(
      `https://api.github.com/repos/USERNAME/REPONAME/contents/FILEPATH`,
      {
        headers: {
          Authorization: `token TOKEN`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export function delay(time) {
  const timesec = time * 1000;
  return new Promise((resolve) => setTimeout(resolve, timesec));
}

export const editReposPrivate = async () => {
  const data = await getRepos();
  await delay(0.1);
  var decodecontent = atob(data.data.content);
  var newtextformation = decodecontent + generateString(1);
  var editcontent = btoa(newtextformation);

  try {
    const res = await axios
      .put(
        `https://api.github.com/repos/USERNAME/REPONAME/contents/FILEPATH`,
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
      )
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("done and commited");
      });
    await delay(1);
  } catch (err) {
    console.log(err);
  }
};
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

console.log();
