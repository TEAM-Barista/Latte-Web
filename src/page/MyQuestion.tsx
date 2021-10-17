import React, { useEffect } from 'react';
import styles from "src/scss/module/myQuestion.module.scss";
import {HeaderAction} from 'src/page/Content';

import PostCardItem from 'src/component/postCardItem';
import Pagination from 'src/component/pagination'

interface myQuestion {
    dispatchHeader: React.Dispatch< HeaderAction>
}

function MyQuestion (props: myQuestion) {
    useEffect(() => {
        props.dispatchHeader({ type: 'CHANGE_TYPE', headerType: 'sub' })
    },[]);

    return (
        <div className={styles.section_myQuestion}>
            <div className={styles.area_inner}>
                <div className={styles.title}>My Question</div>
                <p className={styles.text}>The lastest post is as follow</p>
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

export default MyQuestion;