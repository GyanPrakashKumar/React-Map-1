import { useState } from 'react';
import './App.css';

const countries = [
  {
    name: 'India',
    value: 'IN',
    cities: ['Delhi', 'Mumbai']
  },
  {
    name: 'Nepal',
    value: 'NE',
    cities: ['Kathmandu', 'Birganj']
  },
  {
    name: 'Bangladesh',
    value: 'BG',
    cities: ['Dhaka', 'Chittagong']
  }
];

export default function App() {
  const [countryIndex, setCountryIndex] = useState(-1);
  const [city, setCity] = useState('');

  const handleCountryChange = (event) => {
    const index = parseInt(event.target.value);
    setCountryIndex(index);
    setCity('');
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const currentCountry = countryIndex >= 0 ? countries[countryIndex] : null;
  
  return (
    <main>
      <select value={countryIndex} onChange={handleCountryChange}>
        <option value={-1}>Select a country</option>
        {countries.map((country, index) => (
          <option key={country.value} value={index}>
              {country.name} ({country.value})
          </option>
        ))}
      </select>
      {currentCountry && (
        <select value={city} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {currentCountry.cities.map((city, index) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
    </main>
  );
}
