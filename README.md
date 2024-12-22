# Weather Forecast Application

A modern, responsive weather forecast application built with React that provides current weather data and 5-day forecasts for any city worldwide.

## Features

- 🌤️ Real-time weather information
- 📅 5-day weather forecast
- 📍 Current location weather detection
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🔍 City search functionality

## Technologies Used

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - Dark mode support
- **API Integration**: 
  - OpenWeatherMap API for weather data
  - Geolocation API for current location
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Development Tools**:
  - ESLint for code linting
  - PostCSS for CSS processing
  - Autoprefixer for CSS compatibility

## Project Structure

```
src/
├── components/           # React components
│   ├── ForecastCard     # 5-day forecast card component
│   ├── LocationButton   # Current location button
│   ├── SearchBar        # City search component
│   ├── ThemeToggle      # Dark/light mode toggle
│   └── WeatherCard      # Current weather display
├── utils/               # Utility functions
│   └── weatherApi.js    # API integration logic
└── App.jsx              # Main application component
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and add your OpenWeatherMap API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

The following environment variables are required:

- `VITE_WEATHER_API_KEY`: Your OpenWeatherMap API key (required)

To set up the environment variables:

1. Copy `.env.example` to `.env`
2. Replace the placeholder values with your actual API key
3. Never commit the `.env` file to version control

## Security Notes

- The `.env` file containing your API key is ignored by git
- Always use environment variables for sensitive data
- Never commit API keys or sensitive data to version control
- Use `.env.example` as a template for required environment variables

## API Integration

The application uses the OpenWeatherMap API for:
- Current weather data
- 5-day/3-hour forecast data
- Geolocation-based weather information

## Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktop screens

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.