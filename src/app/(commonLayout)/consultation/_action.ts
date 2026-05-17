"use server"
import { httpClient } from "@/lib/axios/httpClients";


interface IDoctor {
  id: string;
  name: string;
  specialization: string;
    experience: number; 
    rating: number;
}

export const  getDoctors=async () => {
    const doctors = await httpClient.get('/doctors');
    return doctors;
}