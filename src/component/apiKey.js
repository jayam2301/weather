const apiKey = "6766e83a37d78629413ee8bd920cc091";

const getWeather = async (city) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export default getWeather;
