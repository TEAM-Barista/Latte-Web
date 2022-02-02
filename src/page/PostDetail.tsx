import React, { useState, useEffect } from "react";
import styles from "src/scss/module/postMain.module.scss";
import { HeaderAction } from "src/page/Content";

import PostCardItem from "src/component/postCardItem";
import Pagination from "src/component/pagination";

interface postDetail {
	dispatchHeader: React.Dispatch<HeaderAction>;
}

function PostDetail(props: postDetail) {
	useEffect(() => {
		props.dispatchHeader({ type: "CHANGE_TAB", tabIdx: 2 });
	}, []);

	return <div className={styles.section_postMain}></div>;
}

export default PostDetail;
