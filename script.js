const search = document.querySelector(".js-search");

search.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  console.log(evt.currentTarget.elements);
  const { days, query } = evt.currentTarget.elements;
  greatWeater(query.value, days.value)
    .then((error) => console.log(error))
    .catch((error) => console.log(error));
}

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

// http://api.weatherapi.com/v1/forecast.json?key=6fba6087a507449abdf103545231408&q=Paris&days=5
