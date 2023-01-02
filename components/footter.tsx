import Image from 'next/image';
import clesses from './Footer.module.css'

export function Footer() {
    return (
        <footer className={clesses.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Thanks by{' '}
                <span className={clesses.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    )
}
