/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #dc2626, #1d4ed8)',
        'svgElement': "url('/image/skills-sprite.webp')",
        'BG1': "url('/image/interested.jpg')",
        'BG2': "url('/image/building.png')",
        'BG3': "url('/image/college-students-posing-outdoors.jpg')",
        'BG4': "url('/image/austin-texas-usa-at-the-texas.jpg')",
        'BG5': "url(/image/pgdm/pgdm-bg.jpg)",
        'BG6': "url(/image/Placement_Student.jpg)",
      }
    },
  },
  plugins: [],
};
