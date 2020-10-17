import axios from "axios";
import { BASE_URL, USER_DATA_KEY } from "../../../utils/constants";

export async function signup(signupData: any) {
    // const url = `${BASE_URL}signup`;
    // return axios.post(url, signupData).then(response => response);
    return new Promise((resolve, reject) => {
        let userList = localStorage.getItem(USER_DATA_KEY) ? JSON.parse(localStorage.getItem(USER_DATA_KEY) as string) : [];
        if (userList) {
            userList.push(signupData);
        } else {
            userList = [
                signupData
            ];
        }
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(userList));
        resolve();
    })
}