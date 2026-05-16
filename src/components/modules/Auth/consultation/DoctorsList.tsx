"use client"
import { getDoctors } from '@/app/(commonLayout)/consultation/_action'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const DoctorsList = () => {
  const {data}=useQuery({
    queryKey:['doctors'],
    queryFn:getDoctors,
  })
  console.log(data)
  return (
    <div>
     
      {data.data.map((doctor:any)=>(
        <div key={doctor._id}>
          <h3>{doctor.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default DoctorsList