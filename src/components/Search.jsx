var Search = (props) =>
  (
  <div className="search-bar">
    <button className="search-bar-watched" onClick={() => {}} >Watched</button>
    <button className="search-bar-watched">To Watch</button>
    <input className="search-bar-form" 
        onKeyPress={(event) => props.handleEnterSearch(event)}
        onChange={(event) => props.searchHandler(event.target.value)}
        type="text"/>
    <button className="search-bar-submit" onClick={() => props.filterSearch()} >Search</button>
  </div>
  )
