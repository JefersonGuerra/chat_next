'use server'
import api from "@/services/api"

export async function sendInviteContact(id_user_recipient: number, id_user_sender: number) {

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

    return await api.put(`/contactRequest/aceptInvite`, {
        idListInvate,
    }).then(function (response) {
        return response.status;
    }).catch(function (error) {
        return error.response.data.statusCode;
    })

}

export async function refuseInvite(idListInvate: number) {

    return await api.delete(`/contactRequest/refuseInvite`, {
        params: { idListInvate },
    }).then(function (response) {
        return response.status;
    }).catch(function (error) {
        return error.response.data.statusCode;
    })

}