const API_KEY ='2082ebe32337638e2d0d1758e9ff08ab'

export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fecthComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomancemovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFiMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWesternMovies:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimationMovies:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTVShows:`/discover/movie?api_key=${API_KEY}&with_genres=10770`
}