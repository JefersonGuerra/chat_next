'use server'
import { cookies } from 'next/headers'
import api from "@/services/api"

export default async function handleLogin(prevState: any, formData: FormData) {

    let success;
    let errorValidations: any;
    let loginFailed;

    await api.post(`/login`, formData).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        // console.log(error?.response?.data);
        errorValidations = error?.response?.data?.errorValidations
        loginFailed = error?.response?.data?.loginFailed
    })


    // const encryptedSessionData = sessionData // Encrypt your session data
    // cookies().set('session', encryptedSessionData, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production',
    //     maxAge: 60 * 60 * 24 * 7, // One week
    //     path: '/',
    // })

    return {
        success: success ?? null,
        errorValidations: errorValidations ?? null,
        loginFailed: loginFailed ?? undefined,
    }

}