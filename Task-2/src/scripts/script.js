const apiKey ='900767b4b6251b656a0b84613913838e';
        const weatherInfo = document.getElementById('weather-info');
        function WeatherClick() {
            const cityInput = document.getElementById('city');
            const city = cityInput.value;
            if (!city) {
                alert('Please enter a city name.');
                return;
            }
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const temperature = Math.round(data.main.temp - 273.15);
                    const description = data.weather[0].description;
                    const city = data.name;
                    const weatherText = `${city}: ${temperature}°C, ${description}`;
                    weatherInfo.innerText = weatherText;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    alert('Error fetching weather data. Please try again.');
                });
        }