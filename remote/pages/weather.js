import Link from "next/link";
import Head from "next/head";

function Weather({ data, wind }) {
  return (
    <div className="container">
      <Head>
        <title>Remote - Weather</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <main>
        <h1 className="title">WEATHER</h1>
        <div className="card">
          <div className="grid">
            <div>
              <h1>
                {data.name.toUpperCase()} - <i>{data.weather[0].description}</i>
              </h1>

              <h4 className="datetime">{new Date().toLocaleString()} </h4>
              <h2>
                The temperature is {Math.round(data.main.temp)} &#176; and feels
                like {Math.round(data.main.feels_like)} &#176;
              </h2>
              <h2>
                A high of {Math.round(data.main.temp_max)} &#176; and a low of{" "}
                {Math.round(data.main.temp_min)} &#176; is expected
              </h2>
              <h2>
                Current wind speed of {(data.wind.speed * 3.6).toFixed(2)} km/h{" "}
                {wind.direction[Math.round(data.wind.deg / 22.5)]}
              </h2>
              <h2>
                {data.clouds.all}% cloud cover over {data.name}
              </h2>
            </div>
            <div>
              <img
                className="weatherIcon"
                src={
                  "http://openweathermap.org/img/wn/" +
                  data.weather[0].icon +
                  "@4x.png"
                }
              ></img>
            </div>
          </div>
          <div className="home">
            <h2>
              <Link href="/">
                <a> &larr; Back Home</a>
              </Link>
            </h2>
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          max-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 0rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin-top: 3rem;
          line-height: 1.15;
          font-size: 4rem;
          letter-spacing: 0.5rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .weatherIcon {
          filter: grayscale(0%);
          width: 0px;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: left;
          flex-wrap: wrap;
        }

        .card {
          margin: 0rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 2px solid #eaeaea;
          border-radius: 10px;
          width: 60%;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-weight: 300;
        }

        .home h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-weight: 600;
        }
        
        .home h2:hover,
        .datetime {
          color: #0070f3;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const rip = await fetch(`https://ipapi.co/json/`);
  const ip = await rip.json();
  let res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${ip.city}
      &appid=${process.env.OWM_KEY}&units=metric`
  );
  let data = await res.json();
  if(data.cod == '404'){
    res = await fetch(
      `${process.env.URL}api/weather?province=${ip.region}`
    );
    const location = await res.json();
    res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location.city}
        &appid=${process.env.OWM_KEY}&units=metric`
    );
    data  = await res.json();
  }
  res = await fetch(`${process.env.URL}api/wind`);
  const wind = await res.json();
  return { props: { data, wind } };
}

export default Weather;
