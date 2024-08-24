const fs = require('fs');
const Papa = require('papaparse');
const { recommendMovies } = require('./recommendation');

function loadMovieData(filePath) {
    try {
        const file = fs.readFileSync(filePath, 'utf8');
        const parsedData = Papa.parse(file, {
            header: true,
            skipEmptyLines: true
        });
        return parsedData.data;
    } catch (error) {
        console.error('Error reading or parsing the file:', error);
        return [];
    }
}

const movies = loadMovieData('./data/movies.csv');
const recommendations = recommendMovies('Toy Story (1995)', movies);
console.log('Recommendations:', recommendations); // Log the recommendations
