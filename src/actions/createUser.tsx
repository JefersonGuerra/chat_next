'use server'
import api from "@/services/api"

export default async function createUser(prevState: any, formData: FormData) {

    const config = {
        headers: {
            'Content-Type': `multipart/form-data`,
        }
    }

    let success;
    let errorValidations;

    await api.post(`/user`, formData, config).then(function (response) {
        success = response.data
    }).catch(function (error) {
        console.log(error?.response?.data);
        errorValidations = error?.response?.data?.errorValidations
    })


    return {
        success: success ?? null,
        errorValidations: errorValidations ?? [],
    }

}