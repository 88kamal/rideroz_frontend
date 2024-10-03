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
    },
  },
  plugins: [],
});