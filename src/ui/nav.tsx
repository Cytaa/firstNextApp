'use client';

import Link from 'next/link';
import styles from './ui.module.css';
import { usePathname } from 'next/navigation';

const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className={styles.nav}>
			<Link
				href={'/'}
				className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
			>
				Home
			</Link>
			<Link
				href={'/search'}
				className={`${styles.link} ${
					pathname === '/search' ? styles.active : ''
				}`}
			>
				Search
			</Link>
		</nav>
	);
};

export default Nav;
