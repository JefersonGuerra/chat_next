'use server'
import api from "@/services/api"
import { getSession } from '@/actions/session';
import { useContactStore } from "@/store/contactStore"

export default async function listMessages(id_user_received: number) {
    const session = await getSession();

    return (
        await api.get(`/listMessages`, {
            params: {
                id_user_sender: session.userResult.id,
                id_user_received
            },
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error?.response?.data);
        })
    )
}