import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation, Pagination } from "swiper";

import styles from "src/scss/module/interviewDetail.module.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/swiper.scss";

import { HeaderAction } from "src/page/Content";

import InterviewItem from "src/component/InterviewItem";

interface interviewDetail {
	dispatchHeader: React.Dispatch<HeaderAction>;
}

function InterviewDetail(props: interviewDetail) {
	useEffect(() => {
		props.dispatchHeader({ type: "CHANGE_TAB", tabIdx: 1 });
	}, []);

	const slide1: string = "/slide/slide1.png";
	const slide2: string = "/slide/slide2.png";
	const slide3: string = "/slide/slide3.png";
	const slide4: string = "/slide/slide4.png";
	const slide5: string = "/slide/slide5.png";
	const slide6: string = "/slide/slide6.png";
	const slide7: string = "/slide/slide7.png";
	const slide8: string = "/slide/slide8.png";

	return (
		<div className={styles.section_postMain}>
			<img className={styles.main_image} src="/interview.png" alt="..." />
			<div className={styles.area_inner}>
				<div className={styles.main_wrap}>
					<div className={styles.title}>This Week</div>
					<p className={styles.text}>
						주니어 안드로이드 개발자 이주형님의 인터뷰
					</p>
				</div>

				<div className={styles.content_wrap}>
					<Swiper
						modules={[Navigation, Pagination]}
						centeredSlides={true}
						spaceBetween={150}
						slidesPerView={2}
						navigation
						pagination={{ clickable: true }}
					>
						<SwiperSlide>
							<img className={styles.inner_image} src={slide1} alt="..." />
						</SwiperSlide>
						<SwiperSlide>
							<img className={styles.inner_image} src={slide2} alt="..." />
						</SwiperSlide>
						<SwiperSlide>
							<img className={styles.inner_image} src={slide3} alt="..." />
						</SwiperSlide>
						<SwiperSlide>
							<img className={styles.inner_image} src={slide4} alt="..." />
						</SwiperSlide>
						<SwiperSlide>
							<img className={styles.inner_image} src={slide5} alt="..." />
						</SwiperSlide>
						<SwiperSlide>
							<img className={styles.inner_image} src={slide6} alt="..." />
						</SwiperSlide>
						<SwiperSlide>
							<img className={styles.inner_image} src={slide7} alt="..." />
						</SwiperSlide>
						<SwiperSlide>
							<img className={styles.inner_image} src={slide8} alt="..." />
						</SwiperSlide>
					</Swiper>
				</div>

				<div className={styles.main_wrap}>
					<div className={styles.title}>Recommended Interviews</div>
					<p className={styles.text}>Posts with similar tags</p>
				</div>
				<div className={styles.interview_wrap}>
					<InterviewItem />
					<InterviewItem />
					<InterviewItem />
				</div>
			</div>
		</div>
	);
}

export default InterviewDetail;
