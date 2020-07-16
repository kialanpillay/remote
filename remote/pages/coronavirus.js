import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import AnimatedNumber from "react-animated-number";
import CaseLineChart from "../components/CaseLineChart";
import CaseBarChart from "../components/CaseBarChart";

function Difference(data, country) {
  let confirmed =
    data[country].slice(-1)[0].confirmed - data[country].slice(-2)[0].confirmed;
  let recovered =
    data[country].slice(-1)[0].recovered - data[country].slice(-2)[0].recovered;
  let deaths =
    data[country].slice(-1)[0].deaths - data[country].slice(-2)[0].deaths;
  return [confirmed, recovered, deaths];
}

function Coronavirus({ data, ip }) {
  let country = ip.country_name;
  if (ip.country_name == "United States") {
    country = "US";
  }
  const [mode, setMode] = useState(false);
  const difference = Difference(data, country);
  return (
    <div className={mode ? "container_panic" : "container"}>
      <Head>
        <title>Remote - Coronavirus</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <main>
        <h1 className="title">
          {mode ? "STAY HOME. WEAR A MASK." : "COVID-19"}
          <Icon
            style={{ fontSize: 60, color: mode ? "red" : "#282c34" }}
            onClick={() => setMode(!mode)}
          >
            masks
          </Icon>
        </h1>
        <div className="card">
          <h1>
            {ip.country_name.toUpperCase()} | {ip.country_code}
          </h1>
          <div className="grid">
            <div className="data">
              <h1 style={{ color: mode ? "red" : "orange" }}>
                <AnimatedNumber
                  component="text"
                  value={data[country].slice(-1)[0].confirmed}
                  style={{
                    transition: "0.8s ease-out",
                    transitionProperty: "background-color, color, opacity",
                  }}
                  duration={1500}
                  stepPrecision={0}
                />
              </h1>
              <h2>Confirmed (+{difference[0]})</h2>
            </div>
            <div className="data">
              <h1 style={{ color: mode ? "red" : "green" }}>
                <AnimatedNumber
                  component="text"
                  value={data[country].slice(-1)[0].recovered}
                  style={{
                    transition: "0.8s ease-out",
                    transitionProperty: "background-color, color, opacity",
                  }}
                  duration={1500}
                  stepPrecision={0}
                />
              </h1>
              <h2>Recovered (+{difference[1]})</h2>
            </div>
            <div className="data">
              <h1 style={{ color: mode ? "red" : "maroon" }}>
                <AnimatedNumber
                  component="text"
                  value={data[country].slice(-1)[0].deaths}
                  style={{
                    transition: "0.8s ease-out",
                    transitionProperty: "background-color, color, opacity",
                  }}
                  duration={1500}
                  stepPrecision={0}
                />
              </h1>
              <h2>Deaths (+{difference[2]})</h2>
            </div>
          </div>
          <div className="grid">
            <div className="graph">
              <CaseLineChart data={data[country]} average={false} />
            </div>
            <div className="graph">
              <CaseLineChart data={data[country]} average={true} />
            </div>
            <div className="graph">
              <CaseBarChart data={data[country].slice(-1)[0]} />
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
        <h1 className="quote">
          {mode
            ? "We are facing a human crisis unlike any we have experienced"
            : ""}
        </h1>
      </main>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: white;
          color: black;
        }

        .container_panic {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: black;
          color: red;
        }

        .quote {
          font-weight: 300;
          color: #282c34;
        }

        main {
          padding: 0rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          background-color: inherit;
          color: inherit;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 3rem;
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

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          background-color: inherit;
          color: inherit;
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
          background-color: inherit;
          color: inherit;
        }

        .data {
          margin: 0 2rem 2rem 2rem;
          text-align: center;
        }

        .data h1 {
          font-size: 3rem;
          margin: 0;
          color: inherit;
        }

        .data h2 {
          font-size: 1.5rem;
          font-weight: 300;
          margin: 0;
          color: inherit;
        }

        .graph {
          margin: 1rem;
        }

        .home h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-weight: 600;
          text-align: left;
        }

        .home h2:hover {
          color: #0070f3;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .card {
            width: 95%;
          }

          .title {
            font-size: 2.5rem;
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
  const res = await fetch(`${process.env.URL}api/coronavirus`);
  const data = await res.json();
  return { props: { data, ip } };
}

export default Coronavirus;
