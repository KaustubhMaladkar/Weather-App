let weather = {
    APIKey: "1ece6e2da7b9dca7d8eae7d202af1cf3",
    locationWeather: function() {
        navigator.geolocation.getCurrentPosition(position => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${this.APIKey}`)
            .then(response => {
                document.querySelector(".loading").innerText = "Fetching location data"
                return response.json()
            })
            .catch(error => {
                throw error
            })
            .then(data => {
                document.querySelector(".loading").innerText = "Fetching location data"
                return this.displayWeather(data)
            })
            .catch(error => {
                throw error
            });
        }, error => error.code === 1 ? document.querySelector(".loading").innerText = "Location access denied. Kindly give accces or do a manual search." : document.querySelector(".loading").innerText = "Could not find your location. Kindly do a manual search"
        )
    },
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.APIKey}`)
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(data => this.displayWeather(data))
        .catch(error => console.log(error));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city span").innerText = name;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp span").innerText = temp;
        document.querySelector(".wind span").innerText = speed;
        document.querySelector(".humidity span").innerText = humidity;
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`
        document.querySelector(".weather").classList.remove("load");
        document.querySelector("p.loading").classList.add("load")
    },
    search: function () {
        this.fetchWeather(document.querySelector("input").value);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    weather.locationWeather();
    getDateAndTime();
})

document.querySelector("button").addEventListener("click", () => {weather.search()});
document.querySelector(".search-bar").addEventListener("keyup", event => {
    if (event.key == "Enter") weather.search();
});

function getDateAndTime() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    setInterval(() => {
        const dateTime = new Date();
        const date = dateTime.getDate();
        const hours = dateTime.getHours() > 12 ? dateTime.getHours() - 12 : dateTime.getHours();
        const meridian = () => dateTime.getHours() > 12 ? "PM" : "AM";
        const minutes = () => dateTime.getMinutes().toString().length == 1 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();
        const month = months[dateTime.getMonth()];
        const day = days[dateTime.getDay()];
        document.querySelector(".time").innerText = `${hours}:${minutes()}`;
        document.querySelector(".meridian").textContent = meridian();
        document.querySelector(".date").innerText = `${day}, ${date} ${month}`;
    }, 1000);
}

document.querySelector(".fa-clipboard").addEventListener("click", () => navigator.clipboard.writeText(document.querySelector(".temp").innerText))