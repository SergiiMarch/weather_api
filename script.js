function greatWeater(city, days) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "6fba6087a507449abdf103545231408";

  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`
  ).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

greatWeater("Kiev", 5)
  .then((error) => console.log(error))
  .catch((error) => console.log(error));

// http://api.weatherapi.com/v1/forecast.json?key=6fba6087a507449abdf103545231408&q=Paris&days=5
