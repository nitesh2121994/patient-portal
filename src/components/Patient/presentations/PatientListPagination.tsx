import React, { useEffect, useState } from "react";

const PatientListPagination = (props: any) => {

    const { list } = props;

    const [pageSize, setPageSize] = useState(2);
    const [pages, setPages] = useState<any[]>([]);
    const [previousDisabled, setPreviousDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(true);

    useEffect(() => {
        if (list) {
            if (list.length <= pageSize) {
                setPages([
                    {
                        pageNo: 1,
                        active: true
                    }
                ])
            } else{
                
            }
        }
    }, [list])

    return (
        <>
            <nav>
                <ul className="pagination">
                    <li className={previousDisabled ? 'page-item disabled' : 'page-item'} >
                        <button className="page-link" disabled={previousDisabled}>Previous</button>
                    </li>
                    {pages.map((page: any, index: number) =>
                        <li key={index}  className={page.active ? 'page-item active' : 'page-item'}>
                            <a className="page-link" >{page.pageNo}</a>
                        </li>
                    )}
                    <li className={nextDisabled ? 'page-item disabled' : 'page-item'} >
                        <button className="page-link" disabled={nextDisabled}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default PatientListPagination;