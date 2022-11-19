const link = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=4b7cc2909f57999c5bc23435e1a716a2";

const root = document.getElementById('root');
const popup = document.getElementById('popup');
const textInput = document.getElementById('text-input');
const form = document.getElementById('form');
const close = document.getElementById('close');

let store = {
    city: "London",
    temp: 0,
    feelsLike: 0,
    cloudsAll: 0,
    humidity: 0,
    pressure: 0,
    weatherId: 0,
    weatherMain: "",
    weatherDescription: "",
    weatherIcon: "",
    windDeg: 0,
    windGust: 0,
    timezone: 0,
    isDay: "yes",
    properties: {
        feelsLike: {},
        cloudsAll: {},
        humidity: {},
        pressure: {},
        windSpeed: {},
        visibility: {},
    }
}

const fetchData = async () => {
    try {
        const query = localStorage.getItem('query') || store.city;
        const result = await fetch(`${link}&q=${query}`);
        const data = await result.json();

        const {
            clouds: { all: cloudsAll },
            main: { temp, feels_like: feelsLike, humidity, pressure },
            name,
            timezone,
            visibility,
            isDay,
            weather: [{ id: weatherId, main: weatherMain, description: weatherDescription, icon: weatherIcon }],
            wind: { speed: windSpeed },
        } = data;

        // console.log("data", data);

        store = {
            ...store,
            city: name,
            temp,
            weatherId,
            weatherMain,
            weatherDescription,
            weatherIcon,
            timezone,
            isDay,
            properties: {
                feelsLike: {
                    title: 'feels like',
                    value: `${feelsLike}°`,
                    icon: 'humidity.png'
                },
                cloudsAll: {
                    title: 'clouds',
                    value: `${cloudsAll}%`,
                    icon: 'cloud.png',
                },
                humidity: {
                    title: 'humidity',
                    value: `${humidity}%`,
                    icon: 'humidity.png',
                },
                pressure: {
                    title: 'pressure',
                    value: `${pressure} мм рт. ст.`,
                    icon: 'gauge.png',
                },
                windSpeed: {
                    title: 'wind speed',
                    value: `${windSpeed} км/с`,
                    icon: 'wind.png',
                },
                visibility: {
                    title: 'visibility',
                    value: `${visibility}%`,
                    icon: 'visibility.png',
                },
            }
        }

        renderComponent();
    } catch (err) {
        console.log(err);
    }
};

const renderProperty = (properties) => {
    return Object.values(properties).map(({ title, value, icon }) => {
        return `<div class="property">
                    <div class="property-icon">
                        <img src="./images/icons/${icon}" alt="">
                    </div>
                    <div class="property-info">
                        <div class="property-info__value">${value}</div>
                        <div class="property-info__description">${title}</div>
                    </div>
                </div>`;
    }).join("");
};

const markup = () => {
    const { city, weatherDescription, timezone, temp, weatherIcon, weatherMain, isDay, properties } = store;

    const containerClass = isDay === "yes" ? "is-day" : "";

    return `<div class="container ${containerClass}">
                <div class="top">
                    <div class="city">
                        <div class="city-subtitle">Weather Today in</div>
                        <div class="city-title" id="city"><span>${city}</span></div>
                    </div>
                    <div class="city-info">
                        <div class="top-left">
                            <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherMain}">
                            <div class="description">${weatherDescription}</div>
                        </div>
    
                        <div class="top-right">
                            <div class="city-info__subtitle">as of ${timezone}</div>
                            <div class="city-info__title">${temp}°</div>
                        </div>
                    </div>
                </div>
                <div id="properties">${renderProperty(properties)}</div>
            </div>`;
};

const togglePopupClass = () => {
    popup.classList.toggle("active");
};

const renderComponent = () => {
    root.innerHTML = markup();

    const city = document.getElementById('city');
    city.addEventListener("click", togglePopupClass);
};

const handleInput = (e) => {
    store = {
        ...store,
        city: e.target.value,
    };
};

const handleSubmit = (e) => {
    e.preventDefault();
    const value = store.city;

    if (!value) return null;

    localStorage.setItem('query', value);
    fetchData();
    togglePopupClass();
};

const closePopup = () => {
    togglePopupClass();
}

form.addEventListener('submit', handleSubmit);
textInput.addEventListener('input', handleInput);
close.addEventListener('click', closePopup);

fetchData();
