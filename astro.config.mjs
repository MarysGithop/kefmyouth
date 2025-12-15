import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs()],
});

card.addEventListener("click", () => {
  card.classList.add("opacity-0");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    card.src = images[currentIndex];
    card.classList.remove("opacity-0");
  }, 300);
});

card.addEventListener("click", () => {
  card.classList.add("opacity-0");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    card.src = images[currentIndex];
    card.classList.remove("opacity-0");
  }, 300);
});

