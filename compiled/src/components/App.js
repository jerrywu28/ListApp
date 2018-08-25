'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      movies: props.movies,
      currentSearch: '',
      currentInput: ''
      // watchedMovies: [] <-- attempting to implement;
    };
    return _this;
  }

  _createClass(App, [{
    key: 'inputHandler',
    value: function inputHandler(input) {
      this.setState({ currentInput: input });
    }
  }, {
    key: 'handleEnterInput',
    value: function handleEnterInput(event) {
      if (event.key == 'Enter') {
        this.addToMovies();
      }
    }
  }, {
    key: 'searchHandler',
    value: function searchHandler(input) {
      this.setState({ currentSearch: input });
    }
  }, {
    key: 'handleEnterSearch',
    value: function handleEnterSearch(event) {
      if (event.key == 'Enter') {
        this.filterSearch();
      }
    }
  }, {
    key: 'toggleWatched',
    value: function toggleWatched(event) {
      console.log('this click is doing two things');
    }
  }, {
    key: 'filterSearch',
    value: function filterSearch() {
      var _this2 = this;

      console.log('Attempting to filterSearch');
      var movies = this.props.movies;
      var filteredMovies = [];

      filteredMovies = movies.filter(function (movie) {
        return movie.title.toLowerCase().indexOf(_this2.state.currentSearch.toLowerCase()) !== -1;
      });

      if (filteredMovies.length === 0) {
        this.setState({ movies: [{ title: '0 results found for "' + this.state.currentSearch + '". Please try another title.' }] });
        return;
      }

      this.setState({ movies: filteredMovies });
    }
  }, {
    key: 'addToMovies',
    value: function addToMovies() {
      var newMovieList = this.state.movies;
      if (this.state.currentInput !== '') {
        newMovieList.push({ title: this.state.currentInput, watched: false });
        this.setState({ movies: newMovieList });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(AddMovie, { inputHandler: this.inputHandler.bind(this), handleEnterInput: this.handleEnterInput.bind(this), addToMovies: this.addToMovies.bind(this) })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(Search, { searchHandler: this.searchHandler.bind(this), filterSearch: this.filterSearch.bind(this), handleEnterSearch: this.handleEnterSearch.bind(this) })
        ),
        React.createElement(
          'ul',
          { className: 'movieRow' },
          React.createElement(MovieList, { movies: this.state.movies, watchedMovies: this.state.watchedMovies })
        )
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImN1cnJlbnRTZWFyY2giLCJjdXJyZW50SW5wdXQiLCJpbnB1dCIsInNldFN0YXRlIiwiZXZlbnQiLCJrZXkiLCJhZGRUb01vdmllcyIsImZpbHRlclNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJlZE1vdmllcyIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJsZW5ndGgiLCJuZXdNb3ZpZUxpc3QiLCJwdXNoIiwid2F0Y2hlZCIsImlucHV0SGFuZGxlciIsImJpbmQiLCJoYW5kbGVFbnRlcklucHV0Iiwic2VhcmNoSGFuZGxlciIsImhhbmRsZUVudGVyU2VhcmNoIiwid2F0Y2hlZE1vdmllcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUVKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVFGLE1BQU1FLE1BREg7QUFFWEMscUJBQWUsRUFGSjtBQUdYQyxvQkFBYztBQUNkO0FBSlcsS0FBYjtBQUZpQjtBQVFsQjs7OztpQ0FFWUMsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDRixjQUFjQyxLQUFmLEVBQWQ7QUFDRDs7O3FDQUVnQkUsSyxFQUFPO0FBQ3RCLFVBQUlBLE1BQU1DLEdBQU4sSUFBYSxPQUFqQixFQUEwQjtBQUN4QixhQUFLQyxXQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhSixLLEVBQU87QUFDbkIsV0FBS0MsUUFBTCxDQUFjLEVBQUNILGVBQWVFLEtBQWhCLEVBQWQ7QUFDRDs7O3NDQUVpQkUsSyxFQUFPO0FBQ3ZCLFVBQUlBLE1BQU1DLEdBQU4sSUFBYSxPQUFqQixFQUEwQjtBQUN4QixhQUFLRSxZQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhSCxLLEVBQU87QUFDbkJJLGNBQVFDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNEOzs7bUNBRWM7QUFBQTs7QUFDYkQsY0FBUUMsR0FBUixDQUFZLDRCQUFaO0FBQ0EsVUFBSVYsU0FBUyxLQUFLRixLQUFMLENBQVdFLE1BQXhCO0FBQ0EsVUFBSVcsaUJBQWlCLEVBQXJCOztBQUVBQSx1QkFBaUJYLE9BQU9ZLE1BQVAsQ0FBYztBQUFBLGVBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsV0FBWixHQUEwQkMsT0FBMUIsQ0FBa0MsT0FBS2pCLEtBQUwsQ0FBV0UsYUFBWCxDQUF5QmMsV0FBekIsRUFBbEMsTUFBOEUsQ0FBQyxDQUF4RjtBQUFBLE9BQWQsQ0FBakI7O0FBRUEsVUFBSUosZUFBZU0sTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUMvQixhQUFLYixRQUFMLENBQWMsRUFBQ0osUUFBUSxDQUFDLEVBQUNjLE9BQU8sMEJBQTBCLEtBQUtmLEtBQUwsQ0FBV0UsYUFBckMsR0FBcUQsOEJBQTdELEVBQUQsQ0FBVCxFQUFkO0FBQ0E7QUFDRDs7QUFFRCxXQUFLRyxRQUFMLENBQWMsRUFBQ0osUUFBUVcsY0FBVCxFQUFkO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQUlPLGVBQWUsS0FBS25CLEtBQUwsQ0FBV0MsTUFBOUI7QUFDQSxVQUFJLEtBQUtELEtBQUwsQ0FBV0csWUFBWCxLQUE0QixFQUFoQyxFQUFtQztBQUNqQ2dCLHFCQUFhQyxJQUFiLENBQWtCLEVBQUNMLE9BQU8sS0FBS2YsS0FBTCxDQUFXRyxZQUFuQixFQUFpQ2tCLFNBQVMsS0FBMUMsRUFBbEI7QUFDQSxhQUFLaEIsUUFBTCxDQUFjLEVBQUNKLFFBQVFrQixZQUFULEVBQWQ7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLFFBQUQsSUFBVSxjQUFjLEtBQUtHLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXhCLEVBQXNELGtCQUFrQixLQUFLQyxnQkFBTCxDQUFzQkQsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBeEUsRUFBMEcsYUFBYSxLQUFLZixXQUFMLENBQWlCZSxJQUFqQixDQUFzQixJQUF0QixDQUF2SDtBQURGLFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDRSw4QkFBQyxNQUFELElBQVEsZUFBZSxLQUFLRSxhQUFMLENBQW1CRixJQUFuQixDQUF3QixJQUF4QixDQUF2QixFQUFzRCxjQUFjLEtBQUtkLFlBQUwsQ0FBa0JjLElBQWxCLENBQXVCLElBQXZCLENBQXBFLEVBQWtHLG1CQUFtQixLQUFLRyxpQkFBTCxDQUF1QkgsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBckg7QUFERixTQUpGO0FBT0U7QUFBQTtBQUFBLFlBQUksV0FBVSxVQUFkO0FBQ0UsOEJBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS3ZCLEtBQUwsQ0FBV0MsTUFBOUIsRUFBc0MsZUFBZSxLQUFLRCxLQUFMLENBQVcyQixhQUFoRTtBQURGO0FBUEYsT0FERjtBQWFEOzs7O0VBekVlQyxNQUFNQyxTOztBQTZFeEI7QUFDQTs7O0FBQ0FDLE9BQU9oQyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIG1vdmllczogcHJvcHMubW92aWVzLFxuICAgICAgY3VycmVudFNlYXJjaDogJycsXG4gICAgICBjdXJyZW50SW5wdXQ6ICcnLFxuICAgICAgLy8gd2F0Y2hlZE1vdmllczogW10gPC0tIGF0dGVtcHRpbmcgdG8gaW1wbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0SGFuZGxlcihpbnB1dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRJbnB1dDogaW5wdXR9KVxuICB9XG5cbiAgaGFuZGxlRW50ZXJJbnB1dChldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5hZGRUb01vdmllcygpO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEhhbmRsZXIoaW5wdXQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U2VhcmNoOiBpbnB1dH0pXG4gIH1cblxuICBoYW5kbGVFbnRlclNlYXJjaChldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5maWx0ZXJTZWFyY2goKVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVdhdGNoZWQoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcyBjbGljayBpcyBkb2luZyB0d28gdGhpbmdzJyk7XG4gIH1cblxuICBmaWx0ZXJTZWFyY2goKSB7XG4gICAgY29uc29sZS5sb2coJ0F0dGVtcHRpbmcgdG8gZmlsdGVyU2VhcmNoJyk7XG4gICAgbGV0IG1vdmllcyA9IHRoaXMucHJvcHMubW92aWVzO1xuICAgIGxldCBmaWx0ZXJlZE1vdmllcyA9IFtdO1xuXG4gICAgZmlsdGVyZWRNb3ZpZXMgPSBtb3ZpZXMuZmlsdGVyKG1vdmllID0+IG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmN1cnJlbnRTZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09IC0xKVxuXG4gICAgaWYgKGZpbHRlcmVkTW92aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzOiBbe3RpdGxlOiAnMCByZXN1bHRzIGZvdW5kIGZvciBcIicgKyB0aGlzLnN0YXRlLmN1cnJlbnRTZWFyY2ggKyAnXCIuIFBsZWFzZSB0cnkgYW5vdGhlciB0aXRsZS4nfV19KVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe21vdmllczogZmlsdGVyZWRNb3ZpZXN9KVxuICB9XG5cbiAgYWRkVG9Nb3ZpZXMoKSB7XG4gICAgbGV0IG5ld01vdmllTGlzdCA9IHRoaXMuc3RhdGUubW92aWVzO1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRJbnB1dCAhPT0gJycpe1xuICAgICAgbmV3TW92aWVMaXN0LnB1c2goe3RpdGxlOiB0aGlzLnN0YXRlLmN1cnJlbnRJbnB1dCwgd2F0Y2hlZDogZmFsc2V9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21vdmllczogbmV3TW92aWVMaXN0fSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFkZE1vdmllIGlucHV0SGFuZGxlcj17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gaGFuZGxlRW50ZXJJbnB1dD17dGhpcy5oYW5kbGVFbnRlcklucHV0LmJpbmQodGhpcyl9IGFkZFRvTW92aWVzPXt0aGlzLmFkZFRvTW92aWVzLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWFyY2ggc2VhcmNoSGFuZGxlcj17dGhpcy5zZWFyY2hIYW5kbGVyLmJpbmQodGhpcyl9IGZpbHRlclNlYXJjaD17dGhpcy5maWx0ZXJTZWFyY2guYmluZCh0aGlzKX0gaGFuZGxlRW50ZXJTZWFyY2g9e3RoaXMuaGFuZGxlRW50ZXJTZWFyY2guYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtb3ZpZVJvd1wiPlxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gd2F0Y2hlZE1vdmllcz17dGhpcy5zdGF0ZS53YXRjaGVkTW92aWVzfSAvPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=