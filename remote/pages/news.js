import Link from "next/link";
import Head from "next/head";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

function News({ data, ip }) {
  return (
    <div>
      <Head>
        <title>Remote - News</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h1 className="title">NEWS</h1>
        <div className="card">
          <h1>Top Headlines from {ip.country_name}</h1>
          {data.articles.slice(0, 11).map((article, id) => {
            return (
              <a
                key={id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{article.title}</p>
              </a>
            );
          })}
          <h2 className="home">
            <Link href="/">
              <a> &larr; Back Home</a>
            </Link>
          </h2>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
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

        a:hover {
          color: inherit;
          text-decoration: underline;
        }

        .home a:hover {
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

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        .card {
          margin: 0rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          border: 2px solid #eaeaea;
          border-radius: 10px;
          width: 60%;
        }
        .home h2 {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .home h2:hover {
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

// This gets called on every request
export async function getServerSideProps(context) {
  const rip = await fetch(`https://ipapi.co/json/`);
  const ip = await rip.json();
  console.log(process.env.NEWS_KEY)
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${ip.country_code.toLowerCase()}&apiKey=${process.env.NEWS_KEY}`
  );
  const data = await res.json();
  return { props: { data, ip } };
}

export default News;
