class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    };
  }

  render() {
    return (
      (this.state.showDescription) ? 
      <li id={this.props.movie.title} className="watched" id="movie-list-entry" onClick={(event) => this.setState({showDescription: !this.state.showDescription})} >{this.props.movie.title} <span>✓</span></li>
      :
      <li id={this.props.movie.title} className="unwatched" id="movie-list-entry" onClick={() => this.setState({showDescription: !this.state.showDescription})} >{this.props.movie.title} </li>
    )
  }
}