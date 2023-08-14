function greatWeater(city, days) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "6fba6087a507449abdf103545231408";

  fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`).then(
    (resp) => console.log(resp)
  );
}

greatWeater("Paris", 5);

// http://api.weatherapi.com/v1/forecast.json?key=6fba6087a507449abdf103545231408&q=Paris&days=5
