
import styles from '../styles/Home.module.css';
import { Links } from '../components/links';
import { HeadLine } from '../components/headline';

export function Main(props:any) {

  return (

      <main className={styles.main}>
        <HeadLine page={props.page} >
             <code className={styles.code}>pages/{props.page}</code>
        </HeadLine>
        <Links />
      </main>
  )
}