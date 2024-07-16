'use server'
import api from "@/services/api"

export default async function searchContactUser(email: string, id_user_sender: number) {

    return await api.get(`/contactRequest`, {
        params: {
            email,
            id_user_sender
        },
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error?.response?.data);
    })

}