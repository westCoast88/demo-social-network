import React, { useState } from "react";
import styles from './Paginator.module.css';

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize, ...props }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);


    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount / portionSize)

    let [portionNumber, setPortionNumber] = useState(1)


    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let currentPortionItems = pages.filter((p) => (p >= leftPortionPageNumber && p <= rightPortionPageNumber))

    return (
        <div className={styles.paginatorBlock}>
            {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>}

            { 
                currentPortionItems.map((p) => {
                    return <button className={currentPage === p && styles.selectedPage}
                                onClick={(e) => { onPageChanged(p) }} key={p}>{p}
                            </button>
                })
            }

            {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>}
        </div>
    )
}
export default Paginator