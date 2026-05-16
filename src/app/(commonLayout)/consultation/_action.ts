"use server"
import { httpClient } from "@/lib/axios/httpClients";

export const  getDoctors=async () => {
    const doctors = await httpClient.get('/doctors');
    return doctors;
}