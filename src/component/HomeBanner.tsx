import React, { useState, useEffect, useRef } from 'react';
import styles from 'src/scss/module/homeBanner.module.scss';

function HomeBanner() {

    const [activeBanner, setActiveBanner] = useState(0);
    const [activeAni, setActiveAni] = useState(false);

    const onLeftBtn = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setActiveBanner(0);
    }

    const onRightBtn = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setActiveBanner(1);
    }

    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }else {
            setActiveAni(true);
        }
    }, [activeBanner]);

    return(
        <div className={styles.home_banner}>
            <ul className={styles.banner_list}>
                <li className={`${styles.banner_item} ${activeBanner === 0 && styles.is_active} ${activeAni && styles.animation}`}>
                    <div className={styles.interview_area}>
                        <div className={styles.date}>This week</div>
                        <strong className={styles.title}>3rd-year developer</strong>
                        <p className={styles.text}>Our public platform serves 100 million people every month,<br></br>making it one of the 50 most popular websites.</p>
                        <ul className={styles.hash_list}>
                            <li className={styles.hash_item}>#Hashtag</li>
                            <li className={styles.hash_item}>#Hashtag</li>
                            <li className={styles.hash_item}>#Hashtag</li>
                        </ul>
                        <div className={styles.info_wrap}>
                            <div className={`${styles.info} ${styles.type_like}`}>
                                <span className="blind">좋아요</span>
                                <div className={styles.info_text}>999+</div>
                            </div>
                            <div className={`${styles.info} ${styles.type_book}`}>
                                <span className="blind">북마크</span>
                                <div className={styles.info_text}>999+</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`${styles.banner_item} ${activeBanner === 1 && styles.is_active} ${activeAni && styles.animation}`}>
                    <div className={styles.request_area}>
                        <div className={styles.sub}>Request</div>
                        <strong className={styles.title}>Meet a new senior</strong>
                        <p className={styles.text}>What kind of senior do you want?<br></br>Can you tell us?</p>
                        <a href="#" className={styles.btn_request} role="button">Request</a>
                    </div>
                </li>
            </ul>
            {activeBanner===1 && <a href="#" className={`${styles.btn_banner} ${styles.type_left}`} onClick={onLeftBtn} role="button"><span className="blind">이전</span></a>}
            {activeBanner===0 && <a href="#" className={`${styles.btn_banner} ${styles.type_right}`} onClick={onRightBtn} role="button"><span className="blind">다음</span></a>}
        </div>
    )
}

export default HomeBanner;