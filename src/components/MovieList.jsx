var MovieList = (props) =>
  (
    <div>
      {props.movies.map((movie, index) => 
        <MovieListEntry movie={movie} key={index} watched={movie.watched} watchedMovies={props.watchedMovies} />
      )}
    </div>
  )