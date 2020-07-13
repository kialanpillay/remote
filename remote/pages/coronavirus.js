import Link from "next/link";
import Head from "next/head";
import React from "react";


function Coronavirus({ data, ip }) {
  return (
    <div className="container">
      <Head>
        <title>Remote - Coronavirus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">COVID-19</h1>
        <div className="card">
        </div>
        <div className="home">
          <h2>
            <Link href="/">
              <a> &larr; Back Home</a>
            </Link>
          </h2>
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
        
        .home h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .home h2:hover {
          color: #0070f3;
        }

        .data {
          margin-top: 2rem;
          flex-basis: 45%;
          align-items: center;
          width: 60%;
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
    const url = "https://pomber.github.io/covid19/timeseries.json"
    const res_ip = await fetch(`https://ipapi.co/json/`);
    const ip = await res_ip.json();
    //const res = await fetch(`http://localhost:3000/api/coronavirus`);
    const res = await fetch(url);
    const data = await res.json();
    return { props: { data, ip } };
  }

export default Coronavirus;
