import React from "react";
import styles from "src/scss/module/interviewItem.module.scss";

function InterviewItem() {
	return (
		<div className={styles.interview_item}>
			<a className={styles.area_interview_link} href="#!">
				<div className={styles.interview_content_wrap}>
					<p className={styles.interview_text}>Eyebrow</p>
					<div className={styles.interview_title}>Headline-1line</div>
					<p className={styles.interview_text}>
						Our public platform serves 100 million people every month, making it
						one of the 50 most popular websites. Our public platform serves 100
						million people every month
					</p>
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
				<span className={styles.hash_item}>#Hashtag</span>
				<span className={styles.hash_item}>#Hashtag</span>
				<span className={styles.hash_item}>#Hashtag</span>
			</div>
		</div>
	);
}

export default InterviewItem;
