import React from "react";
import { Link } from "react-router-dom";
import PatientListPagination from "./PatientListPagination";
import PatientSearchView from "./PatientSearchView";

const PatientListView = (props: any) => {

    const { patientList } = props;

    const OnSearch = (searchTerm: string) => {
        // console.log('e', e.target.value);

    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex mb-3">
                            <div className="col-3">

                                <PatientSearchView search={OnSearch} />
                            </div>
                            <div className="ml-auto">
                            <Link type="button" className="btn btn-lg btn-primary mr-2"
                                                    to="/patient/add">Add Patient</Link>
                            </div>
                        </div>
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Full name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patientList &&
                                    patientList.map((patient: any, index: number) =>
                                        <tr key={patient.id}>
                                            <th>{index + 1}</th>
                                            <td>{patient.fullName}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.age}</td>
                                            <td>{patient.gender}</td>
                                            <td>
                                                <Link type="button" className="btn btn-lg btn-primary mr-2"
                                                    to={`/patient/${patient.id}`}>Edit</Link>
                                                <button type="button" className="btn btn-lg btn-danger"
                                                onClick={()=>props.onDelete(patient.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                        <PatientListPagination
                            list={patientList}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientListView;