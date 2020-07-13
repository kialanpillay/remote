// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const url = "https://pomber.github.io/covid19/timeseries.json"

export default async(_, res) => {
    const json = await fetch(url);
    const data = await json.json();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  };
  