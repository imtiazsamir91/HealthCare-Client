import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react'
import { getDoctors } from './_action';
import DoctorsList from '@/components/modules/Auth/consultation/DoctorsList';

const ConsultationPage =async () => {

  const queryClient = new QueryClient(); 
  await queryClient.prefetchQuery({
    queryKey: ['doctors'],
    queryFn:getDoctors,
  })
  return (
   <HydrationBoundary state={dehydrate(queryClient)}>
    <DoctorsList />
   </HydrationBoundary>
  )
}

export default ConsultationPage