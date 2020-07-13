// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.end(
    JSON.stringify({
      direction: [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
        "N",
      ],
    })
  );
};
