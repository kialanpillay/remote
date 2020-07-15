// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const major_cities = {
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
  const city = major_cities[req.query.province]
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      city: city,
    })
  );
};
