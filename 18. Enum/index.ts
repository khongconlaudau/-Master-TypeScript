{
  enum WeatherConditions {
    Sunny,
    Windy,
    Cloudy,
    Snowy,
  }
  console.log(WeatherConditions.Snowy);
  console.log();
  console.log(WeatherConditions);
}

{
    enum WeatherConditions {
      Sunny = "sunny",
      Windy = "windy",
      Cloudy = "cloudy",
      Snowy = "snowy",
    }

    console.log(WeatherConditions.Cloudy);
    console.log();
    console.log(WeatherConditions);
    
}
