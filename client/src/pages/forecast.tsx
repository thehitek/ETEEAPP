import { AppProps } from 'next/app';
import Head from 'next/head'
import styles from "../styles/home.module.css"

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:5010/WeatherForecast');
  const data:JSON = await res.json();

  // Pass data to the page via props
  return { props: { data } }
}
   

function ForecastPage({data} :any){
    return(

    <div>
    <Head>
        <meta charSet="utf-8"/>
        <title>Weather forecast</title>
    </Head>
    <body>
        <h2 className={styles.header}><em>Header</em></h2>
        {<ul>
            {data && data.map(({date, summary} : any) => (
                <li key={Date.now()}>{date}, {summary}</li>
            ))}
        </ul>}
    </body>
    </div>

    )
}
export default ForecastPage