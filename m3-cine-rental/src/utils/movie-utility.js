const getImageUrl = (name) => {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
};

export { getImageUrl };

//* Docs Link: https://vitejs.dev/guide/assets#new-url-url-import-meta-url:~:text=This%20pattern%20also%20supports%20dynamic%20URLs%20via%20template%20literals%3A
