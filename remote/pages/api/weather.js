const major_cities_za = {
    "Western Cape": "Cape Town",
 
    "Northern Cape": "Kimberley",
 
    "Eastern Cape": "Port Elizabeth",

    "North West": "Mafikeng",

    "Gauteng": "Johannesburg",

    "KwaZulu-Natal": "Durban",

    "Mpumalanga": "Pretoria",

    "Limpopo": "Polokwane",
 
    "Free State": "Bloemfontein",
  }

export default (req, res) => {
  const city = major_cities_za[req.query.province]
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      city: city,
    })
  );
};
