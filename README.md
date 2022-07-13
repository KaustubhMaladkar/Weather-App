# Weather App

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview
Weather App which shows the live weather of any location which the user search's, with the defualt location being the users current location. It uses OpenWeather API, which accesses the users current location using Geolocation API. The image changes dynamically based on the seach query using the Unsplash API.

### Features

Users can:

- View the weather data of the search query which includes temprature (in Celcius), humidity, wind speed, along with the live date time 
- Copy the temprature
- Get weather date for current location without searching for it

### Screenshot


![image](https://user-images.githubusercontent.com/74300302/172368047-2aa91b67-eb19-40a0-90a9-7b257988da3f.png)


### Links

- Live Site URL: [Github Pages](https://kaustubhmaladkar.github.io/Weather-App/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile First Workflow


### What I learned

```js
document.querySelector(".fa-clipboard").addEventListener("click", () => navigator.clipboard.writeText(document.querySelector(".temp").innerText));
fetch().then();
navigator.geolocation.getCurrentPosition();
```

### Useful resources

- [Weather App Using HTML, CSS, and JavaScript, video on YouTube](https://youtu.be/WZNG8UomjSI)

## Author

- Website - [Kautubh Maladkar([https://www.your-site.com](https://github.com/KaustubhMaladkar/))
