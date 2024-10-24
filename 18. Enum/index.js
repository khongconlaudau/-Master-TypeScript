"use strict";
{
    let WeatherConditions;
    (function (WeatherConditions) {
        WeatherConditions[WeatherConditions["Sunny"] = 0] = "Sunny";
        WeatherConditions[WeatherConditions["Windy"] = 1] = "Windy";
        WeatherConditions[WeatherConditions["Cloudy"] = 2] = "Cloudy";
        WeatherConditions[WeatherConditions["Snowy"] = 3] = "Snowy";
    })(WeatherConditions || (WeatherConditions = {}));
    console.log(WeatherConditions.Snowy);
    console.log();
    console.log(WeatherConditions);
}
{
    let WeatherConditions;
    (function (WeatherConditions) {
        WeatherConditions["Sunny"] = "sunny";
        WeatherConditions["Windy"] = "windy";
        WeatherConditions["Cloudy"] = "cloudy";
        WeatherConditions["Snowy"] = "snowy";
    })(WeatherConditions || (WeatherConditions = {}));
    console.log(WeatherConditions.Cloudy);
    console.log();
    console.log(WeatherConditions);
}
