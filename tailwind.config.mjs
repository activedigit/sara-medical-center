/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px' },
    },
    extend: {
      colors: {
        // Primary deep navy — main brand color (from logo)
        navy: {
          50: '#E8EBF2',
          100: '#C5CDDD',
          200: '#929FBB',
          300: '#5F7299',
          400: '#33497A',
          500: '#1A2E5A',
          600: '#142548',
          700: '#0F1C36',
          800: '#091224',
          900: '#040812',
          DEFAULT: '#1A2E5A',
        },
        // Teal — signature accent (the SARA wordmark color)
        teal: {
          50: '#E8F6F6',
          100: '#C5E9EA',
          200: '#92D3D5',
          300: '#5FBDC0',
          400: '#42B5B8',
          500: '#3FB5B5',
          600: '#2E9495',
          700: '#206F70',
          800: '#144A4B',
          900: '#082525',
          DEFAULT: '#3FB5B5',
        },
        // Cream — warm background tone (from posters)
        cream: {
          50: '#FBF6ED',
          100: '#F7EEDB',
          200: '#F4E3C2',
          300: '#EFD5A4',
          400: '#E8C586',
          500: '#E0B468',
          DEFAULT: '#F4E3C2',
        },
        accent: {
          // "Emergency" = deep teal (urgent call action) — stays within brand palette
          emergency: '#206F70',
          success: '#3FB5B5',
          whatsapp: '#25D366',
        },
        ink: {
          DEFAULT: '#0F172A',
          muted: '#475569',
          subtle: '#64748B',
          inverse: '#F8FAFC',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#FBF6ED',
          tint: '#F2EBE0',
          deep: '#E8DFD0',
        },
      },
      fontFamily: {
        ar: ['"Cairo"', '"Tajawal"', 'system-ui', 'sans-serif'],
        he: ['"Heebo"', '"Assistant"', 'system-ui', 'sans-serif'],
        en: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cairo"', '"Heebo"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.7' }],
        lg: ['1.25rem', { lineHeight: '1.7' }],
        xl: ['1.375rem', { lineHeight: '1.6' }],
        '2xl': ['1.625rem', { lineHeight: '1.4' }],
        '3xl': ['2rem', { lineHeight: '1.3' }],
        '4xl': ['2.5rem', { lineHeight: '1.2' }],
        '5xl': ['3.25rem', { lineHeight: '1.1' }],
        '6xl': ['4rem', { lineHeight: '1.05' }],
      },
      boxShadow: {
        card: '0 4px 14px -2px rgb(26 46 90 / 0.08), 0 2px 6px -1px rgb(26 46 90 / 0.04)',
        cardHover: '0 12px 30px -6px rgb(26 46 90 / 0.18), 0 4px 12px -2px rgb(26 46 90 / 0.08)',
        floating: '0 10px 25px -5px rgb(26 46 90 / 0.2), 0 6px 10px -2px rgb(26 46 90 / 0.1)',
        teal: '0 0 0 4px rgb(63 181 181 / 0.15), 0 8px 20px -4px rgb(63 181 181 / 0.35)',
        emergency: '0 0 0 4px rgb(63 181 181 / 0.18), 0 8px 20px -4px rgb(32 111 112 / 0.4)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      maxWidth: {
        prose: '70ch',
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fadeUp: 'fadeUp 0.4s ease-out',
      },
    },
  },
  plugins: [],
};
