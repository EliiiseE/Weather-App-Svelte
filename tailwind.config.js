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
    textColor: {
      'accent': '#5170DB',
      'primary': '#051B67',
      'bg':'#FDFDFD',
      'border':'#F5F5F6',
    },
    fontFamily: {
      'body': ['Avenir', 'Lato', 'sans-serif']
    }
  }
};