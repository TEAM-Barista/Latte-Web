import React from "react";
import styles from "src/scss/module/postCardItem.module.scss";

function PostCardItem() {
	return (
		<div className={styles.post_item}>
			<a className={styles.area_post_link} href="#!">
				<div className={styles.post_content_wrap}>
					<div>
						<span className={styles.hash_item}>#Hashtag</span>
						<span className={styles.hash_item}>#Hashtag</span>
						<span className={styles.hash_item}>#Hashtag</span>
						<span className={styles.hash_item}>#Hashtag</span>
					</div>
					<div className={styles.post_title}>Headline-1line</div>
					<p className={styles.post_text}>
						Our public platform serves 100 million people every month, making it
						one of the 50 most popular websites. Our public platform serves 100
						million people every month
					</p>
				</div>
				<div className={styles.post_img_wrap}>
					<img
						src="https://dummyimage.com/600x400/fff/000"
						className={styles.thumb}
						alt=""
					/>
					<span className={styles.with_code}>
						<span className="blind">with code</span>
					</span>
				</div>
			</a>
			<div className={styles.area_post_btn}>
				<span className={styles.writer}>Silverash</span>
				<a
					href="#!"
					className={`${styles.btn_item} ${styles.type_bookmark}`}
					aria-pressed="false"
					role="button"
				>
					<span className="blind">bookmark</span>999+
				</a>
				<a
					href="#!"
					className={`${styles.btn_item} ${styles.type_comment}`}
					role="button"
				>
					<span className="blind">comment</span>999+
				</a>
			</div>
		</div>
	);
}

export default PostCardItem;
