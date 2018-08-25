var AddMovie = (props) =>
  (
    <div>
      <input className="add-movie-form" 
        onKeyPress={(event) => props.handleEnterInput(event)}
        onChange={(event) => props.inputHandler(event.target.value)}
        type="text" />
      <button className="add-movie-button" onClick={(event) => props.addToMovies()} >Add</button>
    </div>
  )