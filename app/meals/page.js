import Link from 'next/link';
import classes from './page.module.css';
import { MealsGrid } from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';
// import { metadata } from '../layout';

export const metadata = {
	title: 'All meals',
	description: 'Browse your favorite meal',
};

const Meals = async () => {
	const meals = await getMeals();
	return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, created <span className={classes.highlight}>by you</span>
				</h1>
				<p>Choose your favourite recipe</p>
				<p className={classes.cta}>
					<Link href="/meals/share">Share your favourite Recipe and cook it yourself</Link>
				</p>
			</header>
			<main className={classes.mail}>
				<Suspense fallback={<p className={classes.loading}>Fetching meals</p>}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
};

export default MealsPage;
