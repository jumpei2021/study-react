
import classes from 'src/components/main/Main.module.css';
import { Links } from 'src/components/links';
import { HeadLine } from 'src/components/headline';

export function Main(props:any) {

  return (

      <main className={classes.main}>
        <HeadLine page={props.page} >
             <code className={classes.code}>pages/{props.page}.tsx</code>
        </HeadLine>
        <Links />
      </main>
  )
}