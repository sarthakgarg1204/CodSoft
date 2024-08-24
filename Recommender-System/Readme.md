# Recommender System

## Overview

This project is a movie recommender system that loads movie data from a CSV file and provides movie recommendations based on the loaded data.

## Features

- **Load and Parse Movie Data**: Uses `papaparse` to load and parse movie data from a CSV file.
- **Recommend Movies**: Recommends movies based on the data loaded.

## Installation

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node package manager)

### Steps

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd recommender-system
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Ensure that your movie data is available in the `data/movies.csv` file.
2. Run the project:
   ```bash
   node index.js
   ```
3. The program will load the movie data and output movie recommendations to the console.

## Dependencies

- [lodash](https://www.npmjs.com/package/lodash): Utility library for common programming tasks.
- [papaparse](https://www.npmjs.com/package/papaparse): Library for parsing CSV files.

## License

This project is licensed under the ISC License.
