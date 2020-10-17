import { PATIENT_DATA_KEY, USER_DATA_KEY } from "../../../utils/constants";

export async function getPatientList() {
    return new Promise((resolve, reject) => {
        let userList = localStorage.getItem(PATIENT_DATA_KEY) ? JSON.parse(localStorage.getItem(PATIENT_DATA_KEY) as string) : [];
        resolve(userList);
    })
}

export async function deletePatientDetail(id: any) {
    return new Promise((resolve, reject) => {
        let patientList = localStorage.getItem(PATIENT_DATA_KEY) ? JSON.parse(localStorage.getItem(PATIENT_DATA_KEY) as string) : [];
        const patientDetail = patientList.find((item: any) => item.id === id);
        const index = patientList.indexOf(patientDetail);
        patientList.splice(index, 1);
        localStorage.setItem(PATIENT_DATA_KEY, JSON.stringify(patientList));
    })
}

export async function getPatientDetail(id: any) {
    return new Promise((resolve, reject) => {
        let patientList = localStorage.getItem(PATIENT_DATA_KEY) ? JSON.parse(localStorage.getItem(PATIENT_DATA_KEY) as string) : [];
        const patientDetail = patientList.find((item: any) => item.id === id);
        if (patientDetail) {
            resolve(patientDetail);
        }
        else {
            reject('No data found.');
        }
    })
}

export async function savePatientDetails(signupData: any) {
    // return axios.post(url, signupData).then(response => response);
    return new Promise((resolve, reject) => {
        let patientList = localStorage.getItem(PATIENT_DATA_KEY) ? JSON.parse(localStorage.getItem(PATIENT_DATA_KEY) as string) : [];
        signupData.id = patientList.length + 1;
        patientList.push(signupData);
        localStorage.setItem(PATIENT_DATA_KEY, JSON.stringify(patientList));
        resolve();
    })
}