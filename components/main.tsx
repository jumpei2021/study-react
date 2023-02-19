
import classes from './Main.module.css';
import { Links } from '../components/links';
import { HeadLine } from '../components/headline';
import { Header } from './Header';

export function Main(props:any) {

  return (

      <main className={classes.main}>
        <HeadLine page={props.page} >
             <code className={classes.code}>pages/{props.page}.tsx</code>
        </HeadLine>
        <Header />
        <Links />
      </main>
  )
}