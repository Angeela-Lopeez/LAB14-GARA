export const getMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
        }
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};