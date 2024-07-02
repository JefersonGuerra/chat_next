'use server'
import axiosInstance from "@/services/api"

export async function sendInviteContact(id_user_recipient: number, id_user_sender: number) {

    const api = await axiosInstance();

    await api.post(`/contactRequest`, {
        id_user_recipient,
        id_user_sender,
        status: false,
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error?.response?.data);
    })

}
