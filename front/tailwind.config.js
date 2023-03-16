/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':"#f1f5f9",
        'secondary':"#22c55e",
        'third':'#1e3a8a',
      },
  
    },
  },
  daisyui:{
    themes:[
      {
        myyheme:{
          'primary':"#f1f5f9",
          'secondary':"#22c55e",
          'third':'#1e3a8a',
            },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
