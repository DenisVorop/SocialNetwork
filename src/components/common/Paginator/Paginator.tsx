import ui from '../../../scss/ui.module.scss';
import { useEffect, useState } from "react";

//========================================================================================================================================================

type PropsType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
}

const Paginator: React.FC<PropsType> = (props) => {
    let portionSize = 10;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let [portionNumber, setPortionNumber] = useState(1);
    useEffect(() => {
        setPortionNumber(Math.ceil(props.currentPage / portionSize))
    }, [props.currentPage]);

    let portionCount = Math.ceil(pagesCount / portionSize);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className='users-body__pages'>
            {portionNumber > 1 &&
                <button className={ui._btn} onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => {
                    return <div className='users-body__page'>
                    {/* @ts-ignore */}
                        <div key={page.id} onClick={(e) => { props.onPageChanged(page) }} className={props.currentPage === page ? ui.selected : ui.num}>
                            {page}
                        </div>
                    </div>
                })}
            {portionCount > portionNumber &&
                <button className={ui._btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
        </div>
    )
}

//========================================================================================================================================================

export default Paginator;
