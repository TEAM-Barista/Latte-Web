import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import styles from "src/scss/module/homeBanner.module.scss";

function HomeBanner() {
	const [activeBanner, setActiveBanner] = useState(0);
	const [activeAni, setActiveAni] = useState(false);

	const onLeftBtn = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		setActiveBanner(0);
	};

	const onRightBtn = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		setActiveBanner(1);
	};

	const isInitialMount = useRef(true);
	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			setActiveAni(true);
		}
	}, [activeBanner]);

	return (
		<div className={styles.home_banner}>
			<ul className={styles.banner_list}>
				<li
					className={`${styles.banner_item} ${
						activeBanner === 0 && styles.is_active
					} ${activeAni && styles.animation}`}
				>
					<Link to="/interview" className={styles.interview_area}>
						<div className={styles.date}>2월 1주차</div>
						<strong className={styles.title}>주니어 개발자 이주형님</strong>
						<p className={styles.text}>
							우리가 자연스럽게 쓰고 있는 '앱'을 개발하는 주니어 안드로이드
							개발자의 회사생활과
							<br /> 모빌리티 스타트업 레이시오의 회사 문화를 알아보자!
						</p>
						<ul className={styles.hash_list}>
							<li className={styles.hash_item}>#안드로이드</li>
							<li className={styles.hash_item}>#1~3년차</li>
							<li className={styles.hash_item}>#스타트업</li>
						</ul>
						<div className={styles.info_wrap}>
							<div className={`${styles.info} ${styles.type_like}`}>
								<span className="blind">좋아요</span>
								<div className={styles.info_text}>999+</div>
							</div>
							<div className={`${styles.info} ${styles.type_book}`}>
								<span className="blind">북마크</span>
								<div className={styles.info_text}>999+</div>
							</div>
						</div>
					</Link>
				</li>
				<li
					className={`${styles.banner_item} ${
						activeBanner === 1 && styles.is_active
					} ${activeAni && styles.animation}`}
				>
					<div className={styles.request_area}>
						<div className={styles.sub}>Request</div>
						<strong className={styles.title}>Meet a new senior</strong>
						<p className={styles.text}>
							What kind of senior do you want?<br></br>Can you tell us?
						</p>
						<a href="#" className={styles.btn_request} role="button">
							Request
						</a>
					</div>
				</li>
			</ul>
			{activeBanner === 1 && (
				<a
					href="#"
					className={`${styles.btn_banner} ${styles.type_left}`}
					onClick={onLeftBtn}
					role="button"
				>
					<span className="blind">이전</span>
				</a>
			)}
			{activeBanner === 0 && (
				<a
					href="#"
					className={`${styles.btn_banner} ${styles.type_right}`}
					onClick={onRightBtn}
					role="button"
				>
					<span className="blind">다음</span>
				</a>
			)}
		</div>
	);
}

export default HomeBanner;
