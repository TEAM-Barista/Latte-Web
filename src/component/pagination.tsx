import React from 'react';
import styles from 'src/scss/module/pagination.module.scss';

function Pagination() {
    return(
        <div className={styles.pagination_wrap}>
            <a href="#" className={styles.page_back}><span className="blind">back</span></a>
            <a href="#" className={styles.page_item} aria-selected="true" role="button">1</a>
            <a href="#" className={styles.page_item} role="button">2</a>
            <a href="#" className={styles.page_item} role="button">3</a>
            <a href="#" className={styles.page_item} role="button">4</a>
            <a href="#" className={styles.page_item} role="button">5</a>
            <a href="#" className={styles.page_next}><span className="blind">next</span></a>
        </div>
    )
}

export default Pagination;