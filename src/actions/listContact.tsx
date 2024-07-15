'use server'
import axiosInstance from "@/services/api"

export default async function listContact(id_user: number) {

    const api = await axiosInstance();

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