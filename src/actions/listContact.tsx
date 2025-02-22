'use server'
import api from "@/services/api"
import { getSession } from '@/actions/session';

export default async function listContact() {
    const session = await getSession();
    return (
        await api.get(`/listContact`, {
            params: {
                id_user: session.userResult.id
            },
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error?.response?.data);
        })
    )
}