/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Menambahkan warna custom agar coding lebih rapi
        brand: {
          navy: "#020617",    // Warna background utama
          card: "#0b1120",    // Warna kartu dark mode
          accent: "#3b82f6",  // Warna biru tombol
        }
      },
      // Efek bayangan yang lebih halus untuk kartu light mode
      boxShadow: {
        'soft-blue': '0 10px 30px rgba(59, 130, 246, 0.08)',
      }
    },
  },
  plugins: [],
};
