# repeating the genericData Project with usage of typeScript and Tailwind

to use tailwind

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

add to the tailwind.config.js

    export default {
        content: [
            "./index.html",
            "./src/**/*.{vue,js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    }

add to the style.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;    