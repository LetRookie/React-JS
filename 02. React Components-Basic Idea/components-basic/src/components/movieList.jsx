import Movie from "./Movie.jsx";
import Heading from "./Heading.jsx";

export default function MovieList(props) {
    console.log(props);
    return (
        <div className="movie-list">
            <Heading>Some heading here</Heading>

            <ul>
                <Movie data={props.movies[0]}/>
                <Movie data={props.movies[1]}/> 
                <Movie data={props.movies[2]}/>
                <Movie data={props.movies[3]}/>
            </ul>
        </div>
    );
}