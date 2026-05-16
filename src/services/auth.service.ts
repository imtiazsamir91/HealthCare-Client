import { httpClient } from "@/lib/axios/httpClients";


const  getDoctors=async () => {
    const doctors = await httpClient.get('/doctors');
    return doctors;
}