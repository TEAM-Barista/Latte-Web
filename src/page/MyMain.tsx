import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {HeaderAction} from 'src/page/Content';

import styles from "src/scss/module/myMain.module.scss";

import PostCardItem from 'src/component/postCardItem';

interface myMain {
    dispatchHeader: React.Dispatch< HeaderAction>
}

function MyMain (props: myMain) {

    const [activeNotice, setActiveNotice] = useState(false);

    const onNoticeOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setActiveNotice(true);
    }

    const onNoticeClose = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setActiveNotice(false);
    }

    useEffect(() => {
        props.dispatchHeader({ type: 'CHANGE_TYPE', headerType: 'main' });
        props.dispatchHeader({ type: 'CHANGE_TAB', tabIdx: -1 })
    },[]);

    return (
        <>
        <div className={styles.section_myMain}>
            <div className={styles.area_inner}>
                <div className={styles.title}>Bookmark</div>
                <p className={styles.text}>All activities in Latte</p>
                <div className={styles.profile_wrap}>
                    <div className={styles.area_user_info}>
                        <div>
                            <em className={styles.usesr_id}>Silverash</em>
                            <span className={styles.user_mail}>(Silverash@kakao.co.kr)</span>
                        </div>
                        <div className={styles.hash_list}>
                            <span className={styles.hash_item}>#Spring</span>
                            <span className={styles.hash_item}>#Node.js</span>
                            <span className={styles.hash_item}>#Django</span>
                            <span className={styles.hash_item}>#Server/Back-end</span>
                            <span className={styles.hash_item}>#Junior</span>
                            <span className={styles.hash_item}>+4</span>
                        </div>
                        <a href="#" className={styles.btn_edit} role="button">Edit Profile</a>
                    </div>
                    <div className={styles.area_user_profle}>
                        <label htmlFor="profile" className={styles.profile_label}><span className="blind">profile image</span></label>
                        <input type="file" id="profile" className="blind" />
                        <img src="https://dummyimage.com/300x400/fff/000" alt="" className={styles.profile_img} />
                    </div>
                </div>
                <div className={styles.menu_wrap}>
                    <a href="#" className={styles.menu_item} onClick={onNoticeOpen}>
                        <div className={styles.menu_title}>Notice</div>
                        <div className={styles.menu_text}>22<span className={styles.new_badge}><span className="blind">new</span></span></div>
                    </a>
                    <Link to='/my/bookmark' className={styles.menu_item}>
                        <div className={styles.menu_title}>Bookmark</div>
                        <div className={styles.menu_text}>127</div>
                    </Link>
                    <Link to='/my/question' className={styles.menu_item}>
                        <div className={styles.menu_title}>My Question</div>
                        <div className={styles.menu_text}>7</div>
                    </Link>
                    <Link to='/my/answer' className={styles.menu_item}>
                        <div className={styles.menu_title}>My Answer</div>
                        <div className={styles.menu_text}>28<span className={styles.new_badge}><span className="blind">new</span></span></div>
                    </Link>
                </div>
                <div className={styles.post_wrap}>
                    <div className={styles.post_title}>History</div>
                    <div className={styles.post_text}>The lates post is as follows</div>
                    <div className={styles.post_list}>
                        <PostCardItem />
                    </div>
                </div>
                <div className={styles.post_wrap}>
                    <div className={styles.post_title}>History</div>
                    <div className={styles.post_text}>The most recent writing is as follows</div>
                    <div className={styles.post_list}>
                        <PostCardItem />
                    </div>
                </div>
            </div>
            { activeNotice && <div className={styles.modal}>
                <div className={styles.dimmed} aria-hidden="true"></div>
                <div className={styles.modal_my_notice}>
                    <div className={styles.modal_header}>
                        <div className={styles.modal_title}>Notice</div>
                        <div className={styles.modal_text}>Check for newe notification</div>
                    </div>
                    <div className={styles.notice_list}>
                        <div className={`${styles.notice_item} ${styles.type_new}`}>
                            <div className={styles.notice_content}>
                                <span className="blind">new</span>
                                <div className={styles.notice_title}>Community</div>
                                <div className={styles.notice_text}>There is a new comment in this post : I don't know anything about development. I don't know anything about development.</div>
                                <div className={styles.notice_time}>7 hours ago</div>
                            </div>
                        </div>
                        <div className={styles.notice_item}>
                            <div className={styles.notice_content}>
                                <span className="blind">new</span>
                                <div className={styles.notice_title}>Community</div>
                                <div className={styles.notice_text}>There is a new comment in this post : I don't know anything about development. I don't know anything about development.</div>
                                <div className={styles.notice_time}>7 hours ago</div>
                            </div>
                        </div>
                        <div className={styles.notice_item}>
                            <div className={styles.notice_content}>
                                <span className="blind">new</span>
                                <div className={styles.notice_title}>Community</div>
                                <div className={styles.notice_text}>There is a new comment in this post : I don't know anything about development. I don't know anything about development.</div>
                                <div className={styles.notice_time}>7 hours ago</div>
                            </div>
                        </div>
                        <div className={styles.notice_item}>
                            <div className={styles.notice_content}>
                                <span className="blind">new</span>
                                <div className={styles.notice_title}>Community</div>
                                <div className={styles.notice_text}>There is a new comment in this post : I don't know anything about development. I don't know anything about development.</div>
                                <div className={styles.notice_time}>7 hours ago</div>
                            </div>
                        </div>
                        <div className={styles.notice_item}>
                            <div className={styles.notice_content}>
                                <span className="blind">new</span>
                                <div className={styles.notice_title}>Community</div>
                                <div className={styles.notice_text}>There is a new comment in this post : I don't know anything about development. I don't know anything about development.</div>
                                <div className={styles.notice_time}>7 hours ago</div>
                            </div>
                        </div>
                        <div className={styles.notice_item}>
                            <div className={styles.notice_content}>
                                <span className="blind">new</span>
                                <div className={styles.notice_title}>Community</div>
                                <div className={styles.notice_text}>There is a new comment in this post : I don't know anything about development. I don't know anything about development.</div>
                                <div className={styles.notice_time}>7 hours ago</div>
                            </div>
                        </div>
                        <div className={styles.notice_item}>
                            <div className={styles.notice_content}>
                                <span className="blind">new</span>
                                <div className={styles.notice_title}>Community</div>
                                <div className={styles.notice_text}>There is a new comment in this post : I don't know anything about development. I don't know anything about development.</div>
                                <div className={styles.notice_time}>7 hours ago</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btn_wrap}>
                        <a href="#" className={styles.btn_close} onClick={onNoticeClose} role="button">Close</a>
                        <a href="#" className={styles.btn_more} role="button">More</a>
                    </div>
                </div>
            </div>}
        </div>
        </>
    )
}

export default MyMain;