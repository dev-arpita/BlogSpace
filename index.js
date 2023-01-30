
fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=kolkata&units=Metric")
    .then(res => res.json())
    .then(data => console.log(data))

/**API response on the console
{
    coord: {
        lon: 88.3697,
        lat: 22.5697
    },
    weather: [{
        id: 721,
         main: "Haze",
        description: "haze",
        icon: "50n"
    }],
    base: "stations",
    main: {
        temp: 25.97,
        feels_like: 25.97,
        temp_min: 25.97,
        temp_max: 25.97,
        pressure: 1013,
        humidity: 61
    },
    visibility: 2800,
    wind: {
        speed: 0,
        deg: 0
    },
    clouds: {
        all: 23
    },
    dt: 1675087088,
    sys: {
        type: 1,
        id: 9114,
        country: "IN",
        sunrise: 1675039590,
        sunset: 1675079564
    },
    timezone: 19800,
    id: 1275004,
    name: "Kolkata",
    cod: 200
}

 */
