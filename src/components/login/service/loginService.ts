import { USER_DATA_KEY } from "../../../utils/constants";

export async function userLogin(loginValue: any) {
    return new Promise((resolve, reject) => {
        let userList = localStorage.getItem(USER_DATA_KEY) ? JSON.parse(localStorage.getItem(USER_DATA_KEY) as string) : [];
        const userDetail = userList.find((user: any)=> user.email === loginValue.email && user.password === loginValue.password);
        if (userDetail) {
            resolve();
        } else {
            reject('Please provide valid email and password.');
        }
    })
}