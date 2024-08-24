const _ = require('lodash');

function getGenreVector(movie, allGenres) {
    return allGenres.map(genre => movie.genres.includes(genre) ? 1 : 0);
}

function generateMovieVectors(movies) {
    const allGenres = _.uniq(_.flatten(movies.map(movie => movie.genres.split('|').map(g => g.trim()))));
    return movies.map(movie => ({
        title: movie.title,
        vector: getGenreVector(movie, allGenres)
    }));
}

function cosineSimilarity(vec1, vec2) {
    const dotProduct = _.sum(_.zipWith(vec1, vec2, (a, b) => a * b));
    const magnitude1 = Math.sqrt(_.sum(vec1.map(x => x * x)));
    const magnitude2 = Math.sqrt(_.sum(vec2.map(x => x * x)));
    return magnitude1 && magnitude2 ? dotProduct / (magnitude1 * magnitude2) : 0;
}

function recommendMovies(movieTitle, movies) {
    const movieVectors = generateMovieVectors(movies);
    const movie = movieVectors.find(m => m.title === movieTitle);
    if (!movie) return [];

    return movieVectors.map(m => ({
        title: m.title,
        similarity: cosineSimilarity(movie.vector, m.vector)
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(1, 6); // Top 5 similar movies
}

module.exports = { recommendMovies };
