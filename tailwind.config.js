const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'outer-space': '#293138',
        'electric-violet': {
          DEFAULT: '#6500FF',
          'light-1': '#7E29FF',
          'dark-1': '#5D00EB',
          'dark-2': '#5500D6'
        },
        'rolling-stone': '#787F85',
        'wild-sand': {
          DEFAULT: '#F7F7F7',
          'dark-1': '#EAEAEA',
          'dark-2': '#DEDEDE'
        },
        'magic-mint': '#B1F1DA',
        'frangipani': '#FFDFB3',
        'selago': '#E6D8FC',
        'tundora': '#4A4A4A',
        'silver': {
          DEFAULT: '#CBCBCB',
          'light-1': '#E5E5E5',
          'dark-1': '#C1C1C1',
          'dark-2': '#B7B7B7'
        },
        'pizazz': {
          DEFAULT: '#FF9300',
          'light-1': '#FFA933',
          'dark-1': '#E08100',
          'dark-2': '#C27000'
        },
        'mountain-meadow': '#1CCE6D',
        'persimmon': '#FF5B5B'
      },
      transitionProperty: {
        'border-width': 'border-width',
        'width': 'width'
      },
      boxShadow: {
        '0.5': '0 2px 4px 0px rgba(0, 0, 0, 0.12)',
        '1': '0 2px 6px 0px rgba(0, 0, 0, 0.12)',
        '2': '0 2px 8px 0px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.625rem',
        '120': '30rem',
        '130': '38.75rem'
      },
      cursor: {
        'grab': 'grab',
        'grabbing': 'grabbing'
      },
      fontSize: {
        'xxs': '0.625rem',
        '4.5xl': '2.5rem',
      },
      lineHeight: {
        '11': '2.875rem',
      },
      letterSpacing: {
        'tight-1': '-0.075rem'
      },
      borderRadius: {
        '0.5xl': '0.625rem',
        '2.5xl': '1.25rem',
        '4xl': '1.875rem'
      },
      borderWidth: {
        '1': '1px',
        '6': '6px'
      },
      maxHeight: {
        '80vh': '80vh',
      }
    },
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'active', 'important', 'focus'],
      backgroundColor: ['responsive', 'hover', 'active', 'important', 'focus'],
      borderWidth: ['responsive', 'hover', 'active', 'important', 'focus'],
      cursor: ['responsive', 'hover', 'active', 'important', 'focus'],
      backgroundOpacity: ['responsive', 'hover', 'active', 'important', 'focus'],
      borderColor: ['responsive', 'hover', 'active', 'important', 'focus']
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.${rule.selector.slice(1)}\\!`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    })
  ],
}