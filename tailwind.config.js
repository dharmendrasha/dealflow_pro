module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Institutional Navy
        primary: {
          DEFAULT: "#1B365D", // institutional-navy
          50: "#F0F4F8", // institutional-navy-50
          100: "#D9E2EC", // institutional-navy-100
          200: "#BCCCDC", // institutional-navy-200
          300: "#9FB3C8", // institutional-navy-300
          400: "#829AB1", // institutional-navy-400
          500: "#627D98", // institutional-navy-500
          600: "#486581", // institutional-navy-600
          700: "#334E68", // institutional-navy-700
          800: "#243B53", // institutional-navy-800
          900: "#1B365D", // institutional-navy-900
        },
        // Secondary Colors - Supporting Blue
        secondary: {
          DEFAULT: "#2C5282", // blue-700
          50: "#EBF8FF", // blue-50
          100: "#BEE3F8", // blue-100
          200: "#90CDF4", // blue-200
          300: "#63B3ED", // blue-300
          400: "#4299E1", // blue-400
          500: "#3182CE", // blue-500
          600: "#2B77CB", // blue-600
          700: "#2C5282", // blue-700
          800: "#2A4365", // blue-800
          900: "#1A365D", // blue-900
        },
        // Accent Colors - Electric Blue CTA
        accent: {
          DEFAULT: "#0066FF", // electric-blue
          50: "#EBF4FF", // electric-blue-50
          100: "#C3DAFE", // electric-blue-100
          200: "#A3BFFA", // electric-blue-200
          300: "#7F9CF5", // electric-blue-300
          400: "#667EEA", // electric-blue-400
          500: "#5A67D8", // electric-blue-500
          600: "#4C51BF", // electric-blue-600
          700: "#0066FF", // electric-blue-700
          800: "#3730A3", // electric-blue-800
          900: "#312E81", // electric-blue-900
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: "#F8FAFC", // slate-50
        // Text Colors
        text: {
          primary: "#1A202C", // gray-900
          secondary: "#4A5568", // gray-600
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // green-500
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          500: "#38A169", // green-500
          600: "#2F855A", // green-600
        },
        warning: {
          DEFAULT: "#D69E2E", // yellow-600
          50: "#FFFFF0", // yellow-50
          100: "#FEFCBF", // yellow-100
          500: "#ECC94B", // yellow-500
          600: "#D69E2E", // yellow-600
        },
        error: {
          DEFAULT: "#E53E3E", // red-500
          50: "#FED7D7", // red-100
          100: "#FEB2B2", // red-200
          500: "#E53E3E", // red-500
          600: "#C53030", // red-600
        },
        // Border Colors
        border: "#E2E8F0", // gray-200
        "border-light": "#F7FAFC", // gray-100
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        accent: ['Source Sans Pro', 'sans-serif'],
      },
      fontWeight: {
        'headline': '700',
        'cta': '600',
      },
      boxShadow: {
        'cta': '0 4px 12px rgba(27, 54, 93, 0.15)',
        'cta-hover': '0 6px 16px rgba(27, 54, 93, 0.2)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
}