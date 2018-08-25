class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      movies: props.movies,
      currentSearch: '',
      currentInput: '',
      // watchedMovies: [] <-- attempting to implement;
    }
  }

  inputHandler(input) {
    this.setState({currentInput: input})
  }

  handleEnterInput(event) {
    if (event.key == 'Enter') {
      this.addToMovies();
    }
  }

  searchHandler(input) {
    this.setState({currentSearch: input})
  }

  handleEnterSearch(event) {
    if (event.key == 'Enter') {
      this.filterSearch()
    }
  }

  toggleWatched(event) {
    console.log('this click is doing two things');
  }

  filterSearch() {
    console.log('Attempting to filterSearch');
    let movies = this.props.movies;
    let filteredMovies = [];

    filteredMovies = movies.filter(movie => movie.title.toLowerCase().indexOf(this.state.currentSearch.toLowerCase()) !== -1)

    if (filteredMovies.length === 0) {
      this.setState({movies: [{title: '0 results found for "' + this.state.currentSearch + '". Please try another title.'}]})
      return;
    }

    this.setState({movies: filteredMovies})
  }

  addToMovies() {
    let newMovieList = this.state.movies;
    if (this.state.currentInput !== ''){
      newMovieList.push({title: this.state.currentInput, watched: false});
      this.setState({movies: newMovieList})
    }
  }

  render() {
    return (
      <div>
        <div>
          <AddMovie inputHandler={this.inputHandler.bind(this)} handleEnterInput={this.handleEnterInput.bind(this)} addToMovies={this.addToMovies.bind(this)} />
        </div>
        <div>
          <Search searchHandler={this.searchHandler.bind(this)} filterSearch={this.filterSearch.bind(this)} handleEnterSearch={this.handleEnterSearch.bind(this)} />
        </div>
        <ul className="movieRow">
          <MovieList movies={this.state.movies} watchedMovies={this.state.watchedMovies} />
        </ul>
      </div>
    )
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
