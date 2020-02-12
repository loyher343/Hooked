import React from "react"

const DEFAULT_PLACERHOLDER_IMAGE = 
"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

//just a presentational component (it doesn’t have any internal state) that renders the movie title, image, and year. 
//The reason for the DEFAULT_PLACEHOLDER_IMAGE is because some movies retrieved from the API do not have images, 
//so we will render a placeholder image instead of a broken link.
const Movie = ({ movie }) => {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACERHOLDER_IMAGE : movie.Poster;
    return (
        <div className="movie">
            <h2>{ movie.Title }</h2>
            <div>
                <img 
                width = "200" 
                alt={ `The Movie titled: ${ movie.Title }` } 
                src= { poster }
                />
            </div>
            <p>({ movie.Year })</p>
        </div>
    );
};

export default Movie;