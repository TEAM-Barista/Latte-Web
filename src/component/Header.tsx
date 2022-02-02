import React from "react";
import { Link } from "react-router-dom";
import styles from "src/scss/module/header.module.scss";
import temp_profile from "src/assets/imgs/temp_profile.png";

interface headerType {
	type: string;
	idx: number;
}

function Header(props: headerType) {
	return (
		<>
			<div className="skip_nav">
				<a href="#content">본문 바로가기</a>
			</div>
			{props.type === "main" && (
				<header className={styles.header}>
					<h1 className={styles.logo_wrap}>
						<Link to="/" className={styles.logo}>
							Latte
						</Link>
					</h1>
					<div className={styles.tab_wrap}>
						<Link
							to="/"
							className={styles.tab_item}
							aria-selected={props.idx === 0 ? "true" : "false"}
							role="button"
						>
							Home
						</Link>
						<a
							href="/interview"
							className={styles.tab_item}
							aria-selected={props.idx === 1 ? "true" : "false"}
							role="button"
						>
							Interview
						</a>
						<Link
							to="/post"
							className={styles.tab_item}
							aria-selected={props.idx === 2 ? "true" : "false"}
							role="button"
						>
							Posts
						</Link>
					</div>
					<div className={styles.side_wrap}>
						<a href="#" className={styles.btn_search}>
							<span className="blind">search</span>
						</a>
						<Link to="/my" className={styles.btn_mypage}>
							<span className="blind">my page</span>
							<div className={styles.img_wrap}>
								<img src={temp_profile} className={styles.profile_img} alt="" />
							</div>
						</Link>
					</div>
				</header>
			)}
			{props.type === "sub" && (
				<header className={`${styles.header} ${styles.type_sub}`}>
					<h1 className={styles.logo_wrap}>
						<Link to="/" className={styles.logo}>
							Latte
						</Link>
					</h1>
					<div className={styles.side_wrap}>
						<Link to="/my" className={styles.btn_close}>
							<span className="blind">close</span>
						</Link>
					</div>
				</header>
			)}
		</>
	);
}

export default Header;
