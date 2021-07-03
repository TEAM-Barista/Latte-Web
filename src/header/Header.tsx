import React from 'react';
import styles from "./Header.module.scss";
import temp_profile from "../assets/imgs/temp_profile.png";

function Header() {
  return (
    <>
      <div className="skip_nav">
        <a href="#content">본문 바로가기</a>
      </div>
      <header className={styles.header}>
        <h1 className={styles.logo_wrap}><a href="#" className={styles.logo}>Latte</a></h1>
        <div className={styles.tab_wrap}>
          <a href="#" className={styles.tab_item} aria-selected="true" role="button">Home</a>
          <a href="#" className={styles.tab_item} role="button">Interview</a>
          <a href="#" className={styles.tab_item} role="button">Posts</a>
        </div>
        <div className={styles.side_wrap}>
          <a href="#" className={styles.btn_search}><span className="blind">search</span></a>
          <a href="#" className={styles.btn_mypage}>
            <span className="blind">my page</span>
            <div className={styles.img_wrap}>
              <img src={temp_profile} className={styles.profile_img} alt="" />
            </div>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
