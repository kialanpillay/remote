// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let major_cities = {
    "Western Cape": "Cape Town",
 
    "Nothern Cape": "Kimberly",
 
    "Eastern Cape": "Port Elizabeth",

    "North West": "Mahikeng",

    "Gauteng": "Johannesburg",

    "KwaZulu-Natal": "Durban",

    "Mpumalanga": "Pretoria",

    "Limpopo": "Polokwane",
 
    "Free State": "Bloemfontein",
  }

export default (req, res) => {
  let url = require("url");
  let url_parts = url.parse(req.url, true);
  let query = url_parts.query;
  let city = major_cities[query.province]
  res.statusCode = 200;
  console.log(city)
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      city: city,
    })
  );
};
