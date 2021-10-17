import React, { useEffect } from 'react';
import styles from "src/scss/module/myBookmark.module.scss";
import {HeaderAction} from 'src/page/Content';

import PostCardItem from 'src/component/postCardItem';
import Pagination from 'src/component/pagination'

interface myBookmark {
    dispatchHeader: React.Dispatch< HeaderAction>
}

function MyBookmark (props: myBookmark) {
    useEffect(() => {
        props.dispatchHeader({ type: 'CHANGE_TYPE', headerType: 'sub' })
    },[]);

    return (
        <div className={styles.section_myBookmark}>
            <div className={styles.area_inner}>
                <div className={styles.title}>Bookmark</div>
                <p className={styles.text}>The lastest post is as follow</p>
                <div className={styles.tab_wrap}>
                    <a href="#" className={styles.tab_item} aria-selected="true">Question</a>
                    <a href="#" className={styles.tab_item}>Community</a>
                </div>
                <div className={styles.post_wrap}>
                    <PostCardItem />
                    <PostCardItem />
                    <PostCardItem />
                    <PostCardItem />
                </div>
                <Pagination />
            </div>
        </div>
    )
}

export default MyBookmark;