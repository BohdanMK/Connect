const tailwindConfig = {
    theme: {
      screens: {
        xxl: {'max': '1439px'},
        xl: {'max': '1200px'},
        lg: {'max': '991px'},
        md: {'max': '768px'},
        sm: {'max': '568px'},
        xm: {'max': '378px'},
      },
      extend: {
        fontFamily: {
          main: ['Rubik', 'sans-serif']
        },
        colors: {
          primary: '#1a202c',
          accent: '#4a5568',
          pinkNew: '#E014FB',
          darkblue: '#285E9F',
          lightblue: '#2C78FF',
          newGrey: '#666666',
          lightGrey: "#CDCDCD",
          ligh2tGrey: '#E8E8E8',
          purple: '#8D6AF7',
          purple2: '#9488E9',
          lightGrean: '#60D669'

        },
        spacing: {
          '72': '18rem',
          '96': '24rem',
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(180deg, rgba(156,202,255,0.21) 0%, rgba(156,202,255,0) 100%)',
          'custom-gradient2': 'linear-gradient(129.37deg, #4B9DFF 12.29%, #9B60F6 102.87%)',
        },
      },
    },
  };