'use server'
import axiosInstance from "@/services/api"
import { handleLogin } from "@/actions/session"

export default async function CreateChat(prevState: any, formData: FormData) {

    const api = await axiosInstance();

    let success;
    let errorValidations: any;

    await api.post(`/user`, formData).then(async function (response) {
        success = response.data
        await handleLogin(prevState, formData)
    }).catch(function (error) {
        console.log(error?.response?.data);
        errorValidations = error?.response?.data?.errorValidations
    })

    return {
        success: success ?? null,
        errorValidations: errorValidations ?? null,
    }

}