import React from "react";

const PatientSearchView = (props: any) => {
    return (
        <>
            <input className="form-control" placeholder="Search"
                onChange={(e) => props.search(e.target.value)} />
        </>
    )
}

export default PatientSearchView;