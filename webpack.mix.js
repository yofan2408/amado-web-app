const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js");
// mix.js("resources/js/client/home.js", "public/client/js");

// mix.css("resources/css/client/home.css", "public/client/css")
//     .css("resources/css/client/tech.css", "public/client/css")
//     .css("resources/css/errors/error.css", "public/error/css");
