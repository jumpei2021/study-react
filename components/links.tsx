import classes from './Links.module.css'


export function Links() {
    return (

        <div className={classes.grid}>
            <a href="https://nextjs.org/docs" className={classes.card}>
                <h2 className={classes.title}>Documentation &rarr;</h2>
                <p className={classes.discription}>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={classes.card}>
                <h2 className={classes.title}>Learn &rarr;</h2>
                <p className={classes.discription}>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
                className={classes.card}
            >
                <h2 className={classes.title}>Examples &rarr;</h2>
                <p className={classes.discription}>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.card}
            >
                <h2 className={classes.title}>Deploy &rarr;</h2>
                <p className={classes.discription}>
                    Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
            </a>
        </div>
    )
}
