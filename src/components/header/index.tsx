import Link from 'next/link';
import Classes from 'src/components/header/Header.module.css'


export function Header() {
    return (
        <header className={Classes.header}>
            <Link href="/">
             <p className={Classes.paragraph}>Index</p>
            </Link>
            <Link href="/about">
             <p className={Classes.paragraph}>About</p>
            </Link>
        </header>
    );
}
