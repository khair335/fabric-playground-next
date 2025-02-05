/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'md': '719px',
      },
      colors: {
        accent: '#4D4B59',
        primary: {
          1: '#FDF8FC',
          2: '#F400F1',
          3: '#E9BFE3',
          4: '#D79BCF',
          5: '#BB74B3',
          6: '#985291',
          7: '#713860',
          8: '#492446',
          9: '#21131F',
          10: '#7C3776',
        },
        secondary: {
          1: '#F9F9FA',
          2: '#E4E3E9',
          3: '#CCCBD5',
          4: '#AEADBB',
          5: '#8C8A9C',
          6: '#6B697A',
          7: '#313039',
          8: '#313039',
          9: '#F9F9FA',
        },
        bw: {
          1: '#F9F9F9',
          2: '#E4E4E4',
          3: '#CCCCCC',
          4: '#AEAEAE',
          5: '#8C8C8C',
          6: '#6B6B6B',
          7: '#4D4D4D',
          8: '#313131',
          9: '#181818',
        },
        green: {
          1: '#F4FBF5',
        }
      },
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        1: '0px 34px 13px rgba(20, 11, 19, 0.01), 0px 19px 11px rgba(20, 11, 19, 0.02), 0px 8px 8px rgba(20, 11, 19, 0.03), 0px 2px 5px rgba(20, 11, 19, 0.04)',
        2: '0px 76px 30px rgba(20, 11, 19, 0.01), 0px 43px 26px rgba(20, 11, 19, 0.03), 0px 19px 19px rgba(20, 11, 19, 0.05), 0px 5px 10px rgba(20, 11, 19, 0.06)',
        3: '0px 140px 56px rgba(56, 30, 53, 0.01), 0px 79px 47px rgba(56, 30, 53, 0.04), 0px 35px 35px rgba(56, 30, 53, 0.07), 0px 9px 19px rgba(56, 30, 53, 0.08)',
        4: '0px 161px 64px rgba(56, 30, 53, 0.02), 0px 90px 54px rgba(56, 30, 53, 0.06), 0px 40px 40px rgba(56, 30, 53, 0.1), 0px 10px 22px rgba(56, 30, 53, 0.12)',
        5: '0px 186px 74px rgba(93, 47, 89, 0.02), 0px 104px 63px rgba(93, 47, 89, 0.08), 0px 46px 46px rgba(93, 47, 89, 0.14), 0px 12px 26px rgba(93, 47, 89, 0.16)',
        6: '7px 214px 86px rgba(93, 47, 89, 0.03), 4px 120px 72px rgba(93, 47, 89, 0.1), 2px 53px 53px rgba(93, 47, 89, 0.17), 0px 13px 29px rgba(93, 47, 89, 0.2)',
      },
      borderRadius: {
        'lg.5': '10px',
        '2.5xl': '20px',
        7: '28px',
      },
      textShadow: {
        1: '0px 2px 4px rgba(0, 0, 0, 0.50)',
        2: '0px 1px 3px rgba(0, 0, 0, 0.50)',
      },
      height: {
        custom: '500px',
      },
      width: {
        custom: '500px',
      },
      maxHeight: {
        custom: '800px',
      },
      maxWidth: {
        '6xl': '1100px',
        '7xl': '1200px',
        '7.5xl': '1500px',
        '8xl': '1600px',
      },
      padding: {
        '2.5': '10px',
        '7.5': '30px',
        '12.5': '50px',
      },
      margin: {
        '2.5': '10px',
        'custom-2': '4rem',
      },
      fontSize: {
        '2.5xl': '1.75rem',
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
        '6.5xl': '4rem',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        17: '4.25rem',
      },
    },
  },
  plugins: [],
}
