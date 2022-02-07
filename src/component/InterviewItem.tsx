import React from "react";
import { Link } from "react-router-dom";
import styles from "src/scss/module/interviewItem.module.scss";

const InterviewItem: React.FC<{ isThisWeek?: boolean }> = ({
	isThisWeek = false,
}) => {
	const interviewText = isThisWeek ? "2월 1주차" : "Eyebrow";
	const interviewTitle = isThisWeek
		? "주니어 개발자 이주형님"
		: "Headline-1line";
	const interviewSubText = isThisWeek
		? "우리가 자연스럽게 쓰고 있는 '앱'을 개발하는 주니어 안드로이드 개발자의 회사생활과 모빌리티 스타트업 레이시오의 회사 문화를 알아보자!"
		: "Our public platform serves 100 million people every month, making it one of the 50 most popular websites. Our public platform serves 100 million people every month";
	const hashTag1 = isThisWeek ? "#안드로이드" : "#Hashtag";
	const hashTag2 = isThisWeek ? "#1~3년차" : "#Hashtag";
	const hashTag3 = isThisWeek ? "#스타트업" : "#Hashtag";
	const linkPath = isThisWeek ? "/interview/detail" : "/interview";

	return (
		<Link to={linkPath} className={styles.interview_item}>
			<a className={styles.area_interview_link} href="#!">
				<div className={styles.interview_content_wrap}>
					<p className={styles.interview_text}>{interviewText}</p>
					<div className={styles.interview_title}>{interviewTitle}</div>
					<p className={styles.interview_text}>{interviewSubText}</p>
				</div>
			</a>
			<div className={styles.area_interview_btn}>
				<a
					href="#!"
					className={`${styles.btn_item} ${styles.type_like}`}
					role="button"
				>
					<span className="blind">like</span>999+
				</a>
				<a
					href="#!"
					className={`${styles.btn_item} ${styles.type_bookmark}`}
					aria-pressed="false"
					role="button"
				>
					<span className="blind">bookmark</span>999+
				</a>
			</div>
			<div className={styles.star_img} />

			<div className={styles.hash_wrap}>
				<span className={styles.hash_item}>{hashTag1}</span>
				<span className={styles.hash_item}>{hashTag2}</span>
				<span className={styles.hash_item}>{hashTag3}</span>
			</div>
		</Link>
	);
};

export default InterviewItem;
