import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export const generateMetadata = async ({ params }) => {
	const meal = getMeal(params.mealSlug);
	
	if (!meal) {
		notFound(); // closest notfound page show
	}
	
	return {
		title: meal.title,
		description: meal.summary,
	};
};

const MealDetails = ({ params }) => {
	// console.log(params)
	const meal = getMeal(params.mealSlug);

	if (!meal) {
		notFound(); // closest notfound page show
	}

	meal.instructions = meal.instructions.replace(/\n/g, '<br />'); //сделали абзаці

	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image fill src={meal.image} alt={meal.title} />
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${meal.creator_name}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{
						__html: meal.instructions,
					}}
				></p>
			</main>
		</>
	);
};

export default MealDetails;
