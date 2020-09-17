import axios, {AxiosRequestConfig} from "axios";
import {HttpError, HttpResponse, HttpType} from "./request.interface";

export default async function request(
    url: string,
    method: HttpType,
    body?: object) {
    try {
        const _axiosRequest: AxiosRequestConfig = {
            method: method,
            url: 'https://api.nytimes.com' + url,
            data: body !== undefined ? body : {},
        };
        const res = await axios(_axiosRequest);
        return res.data as HttpResponse;
    } catch (e) {
        throw {status: e.response.status, msg: 'An error occured'} as HttpError
    }
}