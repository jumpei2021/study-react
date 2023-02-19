import classes from 'src/components/links/Links.module.css'

const ITEMS = [
    {
        href: "https://nextjs.org/docs",
        title: "Documentation →",
        discription: "Find in-depth information about Next.js features and API.",
    },
    {
        href: "https://nextjs.org/learn",
        title: "Learn →",
        discription: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
        href: "https://github.com/vercel/next.js/tree/canary/examples",
        title: "Examples →",
        discription: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
        href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Deploy →",
        discription: " Instantly deploy your Next.js site to a public URL with Vercel.",
    },
];


export function Links() {
    return (

        <div className={classes.grid}>
            {ITEMS.map(item => {
                return <a key={item.href} href={item.href} className={classes.card}>
                    <h2 className={classes.title}>{item.title}</h2>
                    <p className={classes.discription}>{item.discription}</p>
                </a>
            })}
        </div>
    )
}
