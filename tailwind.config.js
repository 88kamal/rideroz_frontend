import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'text-color': 'textColorChange 3s ease infinite',
      },
      keyframes: {
        textColorChange: {
          '0%, 100%': { color: '#FFFFFF' }, // White
          '25%': { color: '#FFD700' }, // Gold
          '50%': { color: '#00FF00' }, // Lime
          '75%': { color: 'purple' }, // Orange Red
        },
      },
      colors: {
        'deep-green-accent': {
          100: '#dcedc8', // Light green shade
          200: '#aed581', // Soft green
          400: '#66bb6a', // Vibrant green
          700: '#388e3c', // Deep green
        },
      },
      
    },
  },
  plugins: [],
});