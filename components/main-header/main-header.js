import Link from 'next/link';
import logo from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import { MainHeaderBackground } from './main-header-background';

export default function MainHeader() {
	// console.log(logo)
	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link href="/" className={classes.logo}>
					<Image src={logo} alt="A plate with food" width="" height="" priority />
					NextLevel Food
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<Link href="/meals">Browse Meals</Link>
						</li>
						<li>
							<Link href="/community">Foodies Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
