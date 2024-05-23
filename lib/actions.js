'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export const shareMeal = async (formData) => {
  // 'use server' ; //server action
  console.log(formData)
  const meal = {
    title: formData.get('title'),
    creator_email: formData.get('email'),
    creator: formData.get('name'),
    // email: formData.get('email'),
    // name: formData.get('name'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image')
  }
await saveMeal(meal)
redirect('/meals')
}