'use server'
import api from "@/services/api"

export default async function listContact(id_user: number) {

    return (
        await api.get(`/listContact`, {
            params: {
                id_user
            },
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error?.response?.data);
        })
    )

}