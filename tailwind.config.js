/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        dark: '#2D3436',
      },
      animation: {
        'text-reveal': 'text-reveal 1s ease-out forwards',
        'text-slide': 'text-slide 2s ease-out forwards',
        'text-fade': 'text-fade 1.5s ease-out forwards',
      },
      keyframes: {
        'text-reveal': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'text-slide': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'text-fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h1: {
              color: '#1a202c',
            },
            h2: {
              color: '#1a202c',
            },
            h3: {
              color: '#1a202c',
            },
            h4: {
              color: '#1a202c',
            },
            strong: {
              color: '#1a202c',
            },
            code: {
              color: '#805ad5',
            },
            pre: {
              backgroundColor: '#f7fafc',
            },
          },
        },
        invert: {
          css: {
            color: '#d1d5db',
            a: {
              color: '#60a5fa',
              '&:hover': {
                color: '#93c5fd',
              },
            },
            h1: {
              color: '#f3f4f6',
            },
            h2: {
              color: '#f3f4f6',
            },
            h3: {
              color: '#f3f4f6',
            },
            h4: {
              color: '#f3f4f6',
            },
            strong: {
              color: '#f3f4f6',
            },
            code: {
              color: '#a5b4fc',
              backgroundColor: '#1f2937',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#e5e7eb',
            },
            blockquote: {
              color: '#d1d5db',
              borderLeftColor: '#374151',
            },
            hr: {
              borderColor: '#374151',
            },
            ol: {
              li: {
                '&:before': {
                  color: '#9ca3af',
                },
              },
            },
            ul: {
              li: {
                '&:before': {
                  backgroundColor: '#9ca3af',
                },
              },
            },
            thead: {
              th: {
                color: '#f3f4f6',
                borderBottomColor: '#4b5563',
              },
            },
            tbody: {
              tr: {
                borderBottomColor: '#4b5563',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 