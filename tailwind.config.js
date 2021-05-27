const production = !process.env.ROLLUP_WATCH;

module.exports = {

  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },

  plugins: [
   
  ],

  purge: {
    content: [
     "./src/**/*.svelte",

    ],
    enabled: production // disable purge in dev
  },

  theme: {
    backgroundColor: {
      'accent': '#5170DB',
      'secondary':'#FDFDFD',
    },
    textColor: {
      'accent': '#5170DB',
      'primary': '#051B67',
      'secondary':'#FDFDFD',
      'grey-200':'#6F7070',
      'grey-100':'#F5F5F6',
    },
    
    fontFamily: {
      'sans': ['Avenir', 'Lato', 'sans-serif']
    },
    borderRadius: {
     'large': '19px',
     'xl':'38px',
      DEFAULT: '9px',
    },
    lineHeight: {
      'leading-none': '0px;'
     },
     fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
      
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['0', '0'],
    
     },

  }
};