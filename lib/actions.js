'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

const isInvalidText = text => {
	return !text || text.trim === '';
};

export const shareMeal = async (prevState, formData) => {
	// 'use server' ; //server action
	console.log(formData);
	const meal = {
		title: formData.get('title'),
		creator_email: formData.get('email'),
		creator: formData.get('name'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		isInvalidText(meal.instructions) ||
		!meal.creator_email.includes('@') ||
		!meal.image ||
		meal.image.size === 0
	) {
		return {
			message: 'Invalid input.Please, fill all the fields',
		};
	}
	await saveMeal(meal);
  revalidatePath('/meals') //, 'layout' second argument / all nested pages revalidate cash
	redirect('/meals');
};
