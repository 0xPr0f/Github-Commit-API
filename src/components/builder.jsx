import React from "react";
import styled from "styled-components";
import "../App.css";

export function Profile({ image, username }) {
  const StyledProfile = styled.div`
    margin: auto;
    align-items: center;
    width: 32.5%;
    height: 41px;
    text-align: center;
    border: 3px solid #eceff2;
    border-radius: 10px;
    margin-top: 1rem;
  `;

  return (
    <>
      <StyledProfile>
        <div className="div">
          <div className="divtospread">
            <img alt="" height={40} width={40} src={image} />
          </div>
          <div className="usernamediv">
            <p>{username}</p>
          </div>
          <div className="logoutdiv">
            <button>LogOut</button>
          </div>
        </div>
      </StyledProfile>
    </>
  );
}

export function Repobuilder(repos) {
  console.log(repos);
  return <></>;
}
