import React, { useState, useEffect } from "react";
import styles from "src/scss/module/interview.module.scss";
import { HeaderAction } from "src/page/Content";

import InterviewItem from "src/component/InterviewItem";
import Pagination from "src/component/pagination";

interface interview {
	dispatchHeader: React.Dispatch<HeaderAction>;
}

function Interview(props: interview) {
	useEffect(() => {
		props.dispatchHeader({ type: "CHANGE_TAB", tabIdx: 1 });
	}, []);

	return (
		<div className={styles.section_postMain}>
			<div className={styles.area_inner}>
				<div className={styles.main_wrap}>
					<div className={styles.title}>Interview</div>
					<p className={styles.text}>Latte is horse</p>
				</div>

				<div className={styles.sub_wrap}>
					<div className={styles.sub_title}>This Week</div>
					<p className={styles.sub_text}>
						It's an interview scheduled for this week!
					</p>
				</div>

				<div className={styles.interview_wrap}>
					<InterviewItem isThisWeek={true} />
					<div className={styles.interview_item}>
						<div className={styles.interview_content_wrap}>
							<p className={styles.interview_text}>Request</p>
							<div className={styles.interview_title}>Meet a new senior</div>
							<p className={styles.interview_text}>
								Our public platform serves 100 million people every month,
								making it one...
							</p>
						</div>
						<div className={styles.interview_request}>
							<p className={styles.interview_text}>Request</p>
						</div>
					</div>
				</div>

				<div className={styles.sub_wrap}>
					<div className={styles.sub_title}>Next Week</div>
					<p className={styles.sub_text}>
						Let's watch the past interviews again!
					</p>
				</div>
				<div className={styles.interview_wrap}>
					<InterviewItem />
					<InterviewItem />
					<InterviewItem />
					<InterviewItem />
					<InterviewItem />
					<InterviewItem />
					<InterviewItem />
					<InterviewItem />
					<InterviewItem />
				</div>
				<Pagination />
			</div>
		</div>
	);
}

export default Interview;
