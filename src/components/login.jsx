import React, { useEffect, useState } from "react";
import "../App.css";
import styled from "styled-components";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../auth/firebase";
import { Profile, Repobuilder } from "./builder";
import { delay, editRepos, editReposPrivate, getRepos } from "./repos";
import axios from "axios";

export default function Login() {
  const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  `;
  const StyledLoginPagepad = styled.div`
    margin: auto;
    width: 30%;
    border: 3px solid #eceff2;
    border-radius: 10px;
    padding: 15px;
  `;
  const StyledError = styled.div`
    margin: auto;
    width: 32.1%;
    color: red;
    text-align: center;
    border: 3px solid #eceff2;
    border-radius: 10px;
    margin-top: 1rem;
  `;

  const StyledLoginButton = styled.button`
    margin: auto;
    cursor: pointer;
    width: 99%;
    height: 2.5rem;
    border: 3px solid #eceff2;
    border-radius: 10px;
  `;

  const [LoggedIn, setLoggedIn] = useState(false);
  const [Response, setResponse] = useState([]);
  const [Repo, setRepo] = useState([]);
  const [Image, setImage] = useState("");
  const [userName, setuserName] = useState("");
  const [AccessToken, setaccessToken] = useState("");
  const [Error, setError] = useState("");
  function signInWithGithub() {
    signInWithPopup(auth, new GithubAuthProvider())
      .then((res) => {
        console.log(res);
        console.log(res.user.email);
        console.log();
        window.localStorage.setItem("accessToken", res.user.accessToken);
        window.localStorage.setItem("name", res.user.reloadUserInfo.screenName);
        window.localStorage.setItem("image", res.user.photoURL);
        setuserName(res.user.reloadUserInfo.screenName);
        setImage(res.user.photoURL);
      })
      .catch((err) => {
        setError(err.code);
        setLoggedIn(window.localStorage.setItem("isLoggedIn", false));
      })
      .finally(() => {
        setLoggedIn(true);
        setLoggedIn(window.localStorage.setItem("isLoggedIn", true));
      });
  }
  useEffect(() => {
    //   if (window.localStorage.getItem("isLoggedIn") === "true") {
    setaccessToken(window.localStorage.getItem("accessToken"));
    setLoggedIn(window.localStorage.getItem("isLoggedIn") === "true");
    setuserName(window.localStorage.getItem("name"));
    setImage(window.localStorage.getItem("image"));
    //  }
    if (!(window.localStorage.getItem("isLoggedIn") === "true")) {
      setLoggedIn(window.localStorage.getItem("isLoggedIn") === "true");
      window.localStorage.setItem("accessToken", "");
      window.localStorage.setItem("isLoggedIn", "");
      window.localStorage.setItem("name", "");
      window.localStorage.setItem("image", "");
    }
  });
  /*
  function LogOutWithGithub() {
   logo (auth, new GithubAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoggedIn(true));
  }
  */
  async function multipleUpdate() {
    for (var i = 0; i < 20000000000000000; i++) {
      await delay(0.1);
      editReposPrivate();
      await delay(3);
    }
  }

  return (
    <>
      <StyledHeader>Automation</StyledHeader>
      {!LoggedIn ? (
        <div>
          <StyledLoginPagepad>
            <p>project Aids Automation of awesome things</p>
            <StyledLoginButton onClick={signInWithGithub}>
              Sign in with GitHub
            </StyledLoginButton>
          </StyledLoginPagepad>
          <Profile image={Image} username={userName} />
        </div>
      ) : (
        <div>
          <StyledLoginPagepad>
            <p>All repo</p>
            <div className="reposelector"></div>
            <StyledLoginButton onClick={multipleUpdate}>
              Test Autotmation
            </StyledLoginButton>
          </StyledLoginPagepad>
          <Profile image={""} username={""} />
        </div>
      )}
      {Error ? (
        <StyledError>
          <p>Error : {Error}</p>
        </StyledError>
      ) : null}
    </>
  );
}
