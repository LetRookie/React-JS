import MovieList from './components/movieList.jsx'
import Timer from './components/Timer.jsx'
import Counter from './components/Counter.jsx'
import CounterTwo from './components/CounterTwo.jsx'
import movies from './assets/movies.js'
import './App.css'

function App() {

  return (
    <div>
      <h1>My First React Application</h1>

      {/* <Timer startTime={5}/> */}

      {/* <MovieList movies={movies} headingText="Movie List"/> */}

      <Counter/>

    </div>
  )
}

export default App
