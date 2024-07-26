module.exports = () => ({
  plugins: [
    require('tailwindcss')('./tailwind.config'),
    // require('potscss-easy-import'),
    // require('postcss-hexrgba'),
    // require('postcss-mixins'),
    // require('postcss-conditionals'),
    // require('postcss-nested'),
    // require('postcss-simple-vars')(
    //   variables() {
    //     return require('./src/style.css')
    //   }
    // ),
    require('autoprefixer'),
    // require('postcss-loader'),
    // require('postcss-preset-env')({ stage: 3 }),
  ],
});
