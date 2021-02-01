# Weather Challenge [[DEMO]](https://weather-challenge-rouge.vercel.app/)

## Summary
The challenge consists in developing a full client-side app to request current and 5-day forecast weather data of client's current location or of a specified city.
Weather data is obtained consuming [OpenWeatherMap](https://openweathermap.org/) API services and Location data is fetched from https://ipapi.co/

## Libraries and tools used
- [React](https://es.reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library)
- [styled-components](https://styled-components.com/)

## Use:
Enviroment variables can be configurated in webpack.config.js
La url del backend, única variable de entorno se puede configurar en el archivo webpack.conf.js, dentro del plugin de webpack DefinePlugin.

### Production
```
> npm run build
```
Then `index.[hash].html` and `bundle.[hash].js` are generated over `/dist` folder

### Development
Install project dependencies
```
> npm install
```

Starts `webpack-dev-server`
```
> npm start
```

Shows errors/warnings detected by ESLint
```
> npm run lint
```

Shows errors/warnings detected by ESLint and tries to fix them
```
> npm run lint:fix
```

Runs tests
```
> npm run test
```

## Licence
MIT
