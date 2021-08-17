import React from 'react'
import { getPagesArray } from '../../../utils/pages';
import { usePaginationPages } from '../../../hook/usePagination';

const Pagination = ({totalPages, page ,changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    // let pagesArray = usePaginationPages(totalPages)
    return ( 
        <div>
                  <div className="page__wrapper">
      {pagesArray.map(p=>
        <span 
        onClick={()=>changePage(p)}
        key={p} 
        className={page === p ? 'page page__current' : 'page'}>{p}</span>
        )}
      </div>
        </div>
    );
}
 
export default Pagination;