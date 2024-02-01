'use server'
 
import { redirect } from 'next/navigation'
 
export async function navigate(target : string) {
  redirect(target);
}