'use server'
import axiosInstance from "@/services/api"

export async function sendInviteContact(id_user_recipient: number, id_user_sender: number) {

    const api = await axiosInstance();

    return await api.post(`/contactRequest`, {
        id_user_recipient,
        id_user_sender,
        status: false,
    }).then(function (response) {
        return response.status;
    }).catch(function (error) {
        return error.response.data.statusCode;
    })

}

export async function aceptInvite(idListInvate: number) {

    const api = await axiosInstance();

    return await api.put(`/contactRequest/aceptInvite`, {
        idListInvate,
    }).then(function (response) {
        return response.status;
    }).catch(function (error) {
        return error.response.data.statusCode;
    })

}

export async function refuseInvite(idListInvate: number) {

    const api = await axiosInstance();

    return await api.delete(`/contactRequest/refuseInvite`, {
        params: { idListInvate },
    }).then(function (response) {
        return response.status;
    }).catch(function (error) {
        return error.response.data.statusCode;
    })

}