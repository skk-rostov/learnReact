import { useMemo } from "react";


// export const usePaginationPages = (totalCount) =>{
//     const paginationPages = useMemo(() => {
//         function {
//             let pageArray = [];
//             for(let i = 0; i < totalPages; i++) {
//             pageArray.push(i+1);
//         }
//         return pageArray;
//     }

// }, [totalCount]);

// return paginationPages
// }

export const usePaginationPages = (totalCount) => {
    console.log('use pagination')
    const array = function (totalCount) {
        let pageArray = [];
            for(let i = 0; i < totalCount; i++) {
            pageArray.push(i+1);
    }
    return pageArray;
}
    const paginationPages = useMemo(() => array(totalCount), [totalCount])
    return paginationPages
}