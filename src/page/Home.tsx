import React, { useEffect } from 'react';
import {HeaderAction} from 'src/page/Content';

import styles from "src/scss/module/home.module.scss";

import PostCardItem from 'src/component/postCardItem';
import HomeBanner from 'src/component/HomeBanner';

interface home {
    dispatchHeader: React.Dispatch< HeaderAction>
}

function Home (props: home) {

    useEffect(() => {
        // props.dispatchHeader({ type: 'CHANGE_TYPE', headerType: 'main' });
        props.dispatchHeader({ type: 'CHANGE_TAB', tabIdx: 0 })
    },[]);

    return (
        <div className={styles.section_home}>
            <HomeBanner />
            <div className={styles.home_content}>
                <div className={styles.title}>Hot Posts</div>
                <p className={styles.text}>Meet this week's hot topic!</p>
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
                <a href="#" className={styles.btn_more}>More</a>
            </div>
        </div>
    )
}

export default Home;