import React from 'react'
import './style.css';

function Header () {
  return (
    <div id="header">
      <div className="header-logo">
        <div className="header-logo-icon"></div>
        <div className="header-logo-text">Lims Board</div>
      </div>
      <div className="header-search">
        <div className="header-search-icon"></div>
      </div>
    </div>
  );
}

function Main () {
  return (
    <div id="main">
      <MainLeftContainer />
      <MainRightContainer />
    </div>
  );
}

function MainLeftContainer () {
  return (
    <div className="main-left-container">
      <div className="main-left-icon"></div>
      <div className="main-left-text-box">
        <div className="main-left-text">환영합니다.</div>
        <div className="main-left-text">LIMS BOARD 입니다.</div>
      </div>
    </div>
  );
}

function MainRightContainer () {
  return (
    <div className="main-right-container">
      <div className="main-right-card">
        <MainRightCardTop />
        <MainRightCardBottom />
      </div>
    </div>
  );
}

function MainRightCardTop () {
  return (
    <div className="main-right-card-top">
      <div className="sign-in-text">로그인</div>
      <div className="sign-in-input-container">
        <InputBox label='이메일 주소' show={false} type='text' />
        <InputBox label='비밀번호' show={true} type='password' />
      </div>
    </div>
  );
}

interface InputBoxProps {
  label: string;
  show: boolean;
  type: string;
}

function InputBox ({ label, show, type }: InputBoxProps) {

  const placeholder = `${label}를 입력해주세요.`;

  return (
    <div className="input-box">
      <div className="input-label">{label}</div>
      <div className="input-container">
        <input className="input" type={type} placeholder={placeholder} />
        { show && (<div className="show-icon"></div>) }
      </div>
    </div>
  );
}

function MainRightCardBottom () {
  return (
    <div className="main-right-card-bottom">
      <button className="sign-in-button">로그인</button>
      <div className="sign-up-description">
        신규 사용자이신가요? <a href="#" className="emhasis">회원가입</a>
      </div>
    </div>
  );
}


export default function SignIn() {
  return (
    <div id="wrapper">
      <Header />
      <Main />
    </div>
  );
}
