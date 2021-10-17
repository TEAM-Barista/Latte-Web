import React, { useState, useEffect } from 'react';
import styles from "src/scss/module/postMain.module.scss";
import {HeaderAction} from 'src/page/Content';

import PostCardItem from 'src/component/postCardItem';
import Pagination from 'src/component/pagination'

interface postMain {
    dispatchHeader: React.Dispatch< HeaderAction>
}

function PostMain (props: postMain) {

    useEffect(() => {
        // props.dispatchHeader({ type: 'CHANGE_TYPE', headerType: 'main' });
        props.dispatchHeader({ type: 'CHANGE_TAB', tabIdx: 2 })
    },[]);

    return (
        <div className={styles.section_postMain}>
            <div className={styles.area_inner}>
                <div className={styles.title}>Posts</div>
                <p className={styles.text}>All about development</p>
                <div className={styles.tab_wrap}>
                    <a href="#" className={styles.tab_item} aria-selected="true">Question</a>
                    <a href="#" className={styles.tab_item}>Community</a>
                </div>
                <div className={styles.filter_wrap}>
                    <span className={styles.filter_text}>Sort by :</span>
                    <a href="#" className={styles.btn_filter} role="button">Popular</a>
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

export default PostMain;