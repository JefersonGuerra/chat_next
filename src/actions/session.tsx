'use server'
import { cookies } from 'next/headers'
import axiosInstance from "@/services/api"
import jwt from "jsonwebtoken";

export async function encrypt(payload: any) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export async function decrypt(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET, { ignoreExpiration: true }, function (err: any, decoded: any) {
        return decoded
    });
}

export async function handleLogin(prevState: any, formData: FormData) {

    const api = await axiosInstance();

    let success;
    let errorValidations: any;
    let loginFailed;

    await api.post(`/login`, formData).then(async function (response) {

        const encryptedSessionData = await encrypt(response.data)
        cookies().set('session', encryptedSessionData, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
        })

    }).catch(function (error) {
        console.log(error?.response?.data);
        errorValidations = error?.response?.data?.errorValidations
        loginFailed = error?.response?.data?.loginFailed
    })

    return {
        success: success ?? null,
        errorValidations: errorValidations ?? null,
        loginFailed: loginFailed ?? undefined,
    }

}

export async function getSession() {
    const session = cookies().get('session')?.value;
    if (!session) return null;

    return await decrypt(session);
}

export async function logout() {
    cookies().delete('session');
}