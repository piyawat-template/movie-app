module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          'root': ['./'],
          'alias': {
            '@assets': ['./assets/'],
            '@screens': ['./screens/'],
            '@routes': ['./routes/'],
            '@components': ['./components/'],
            '@styles': ['./styles/'],
          }
        }
      ]
    ]
  };
};
