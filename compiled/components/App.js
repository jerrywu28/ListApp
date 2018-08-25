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

    // watchedHandler() {
    //   console.log('Click enabled watchedHandler')
    // }

  }, {
    key: 'filterSearch',
    value: function filterSearch() {
      var _this2 = this;

      console.log('Attempting to filterSearch');
      var movies = this.props.movies;
      var filteredMovies = movies.filter(function (movie) {
        return movie.title.toLowerCase().indexOf(_this2.state.currentSearch.toLowerCase()) !== -1;
      });
      if (filteredMovies.length === 0) {
        this.setState({ movies: [{ title: '0 results found for "' + this.state.currentSearch + '". Please try another title.' }] });
        return;
      }
      console.log(this.state.movies);
      this.setState({ movies: filteredMovies });
    }
  }, {
    key: 'addToMovies',
    value: function addToMovies() {
      var newMovieList = this.state.movies;
      if (this.state.currentInput !== '') {
        newMovieList.push({ title: this.state.currentInput });
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
          React.createElement(MovieList, { movies: this.state.movies })
        )
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImN1cnJlbnRTZWFyY2giLCJjdXJyZW50SW5wdXQiLCJpbnB1dCIsInNldFN0YXRlIiwiZXZlbnQiLCJrZXkiLCJhZGRUb01vdmllcyIsImZpbHRlclNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJlZE1vdmllcyIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJsZW5ndGgiLCJuZXdNb3ZpZUxpc3QiLCJwdXNoIiwiaW5wdXRIYW5kbGVyIiwiYmluZCIsImhhbmRsZUVudGVySW5wdXQiLCJzZWFyY2hIYW5kbGVyIiwiaGFuZGxlRW50ZXJTZWFyY2giLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFFSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRRixNQUFNRSxNQURIO0FBRVhDLHFCQUFlLEVBRko7QUFHWEMsb0JBQWM7QUFISCxLQUFiO0FBRmlCO0FBT2xCOzs7O2lDQUVZQyxLLEVBQU87QUFDbEIsV0FBS0MsUUFBTCxDQUFjLEVBQUNGLGNBQWNDLEtBQWYsRUFBZDtBQUNEOzs7cUNBRWdCRSxLLEVBQU87QUFDdEIsVUFBSUEsTUFBTUMsR0FBTixJQUFhLE9BQWpCLEVBQTBCO0FBQ3hCLGFBQUtDLFdBQUw7QUFDRDtBQUNGOzs7a0NBRWFKLEssRUFBTztBQUNuQixXQUFLQyxRQUFMLENBQWMsRUFBQ0gsZUFBZUUsS0FBaEIsRUFBZDtBQUNEOzs7c0NBRWlCRSxLLEVBQU87QUFDdkIsVUFBSUEsTUFBTUMsR0FBTixJQUFhLE9BQWpCLEVBQTBCO0FBQ3hCLGFBQUtFLFlBQUw7QUFDRDtBQUNGOztBQUVEO0FBQ0E7QUFDQTs7OzttQ0FFZTtBQUFBOztBQUNiQyxjQUFRQyxHQUFSLENBQVksNEJBQVo7QUFDQSxVQUFJVixTQUFTLEtBQUtGLEtBQUwsQ0FBV0UsTUFBeEI7QUFDQSxVQUFJVyxpQkFBaUJYLE9BQU9ZLE1BQVAsQ0FBYyxVQUFDQyxLQUFEO0FBQUEsZUFBV0EsTUFBTUMsS0FBTixDQUFZQyxXQUFaLEdBQTBCQyxPQUExQixDQUFrQyxPQUFLakIsS0FBTCxDQUFXRSxhQUFYLENBQXlCYyxXQUF6QixFQUFsQyxNQUE4RSxDQUFDLENBQTFGO0FBQUEsT0FBZCxDQUFyQjtBQUNBLFVBQUlKLGVBQWVNLE1BQWYsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsYUFBS2IsUUFBTCxDQUFjLEVBQUNKLFFBQVEsQ0FBQyxFQUFDYyxPQUFPLDBCQUEwQixLQUFLZixLQUFMLENBQVdFLGFBQXJDLEdBQXFELDhCQUE3RCxFQUFELENBQVQsRUFBZDtBQUNBO0FBQ0Q7QUFDRFEsY0FBUUMsR0FBUixDQUFZLEtBQUtYLEtBQUwsQ0FBV0MsTUFBdkI7QUFDQSxXQUFLSSxRQUFMLENBQWMsRUFBQ0osUUFBUVcsY0FBVCxFQUFkO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQUlPLGVBQWUsS0FBS25CLEtBQUwsQ0FBV0MsTUFBOUI7QUFDQSxVQUFJLEtBQUtELEtBQUwsQ0FBV0csWUFBWCxLQUE0QixFQUFoQyxFQUFtQztBQUNqQ2dCLHFCQUFhQyxJQUFiLENBQWtCLEVBQUNMLE9BQU8sS0FBS2YsS0FBTCxDQUFXRyxZQUFuQixFQUFsQjtBQUNBLGFBQUtFLFFBQUwsQ0FBYyxFQUFDSixRQUFRa0IsWUFBVCxFQUFkO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSw4QkFBQyxRQUFELElBQVUsY0FBYyxLQUFLRSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUF4QixFQUFzRCxrQkFBa0IsS0FBS0MsZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCLENBQXhFLEVBQTBHLGFBQWEsS0FBS2QsV0FBTCxDQUFpQmMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBdkg7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsTUFBRCxJQUFRLGVBQWUsS0FBS0UsYUFBTCxDQUFtQkYsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBdkIsRUFBc0QsY0FBYyxLQUFLYixZQUFMLENBQWtCYSxJQUFsQixDQUF1QixJQUF2QixDQUFwRSxFQUFrRyxtQkFBbUIsS0FBS0csaUJBQUwsQ0FBdUJILElBQXZCLENBQTRCLElBQTVCLENBQXJIO0FBREYsU0FKRjtBQU9FO0FBQUE7QUFBQSxZQUFJLFdBQVUsVUFBZDtBQUNFLDhCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUt0QixLQUFMLENBQVdDLE1BQTlCO0FBREY7QUFQRixPQURGO0FBYUQ7Ozs7RUFyRWV5QixNQUFNQyxTOztBQXdFeEI7QUFDQTs7O0FBQ0FDLE9BQU85QixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIG1vdmllczogcHJvcHMubW92aWVzLFxuICAgICAgY3VycmVudFNlYXJjaDogJycsXG4gICAgICBjdXJyZW50SW5wdXQ6ICcnXG4gICAgfTtcbiAgfVxuXG4gIGlucHV0SGFuZGxlcihpbnB1dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRJbnB1dDogaW5wdXR9KVxuICB9XG5cbiAgaGFuZGxlRW50ZXJJbnB1dChldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5hZGRUb01vdmllcygpO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEhhbmRsZXIoaW5wdXQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U2VhcmNoOiBpbnB1dH0pXG4gIH1cblxuICBoYW5kbGVFbnRlclNlYXJjaChldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5maWx0ZXJTZWFyY2goKVxuICAgIH1cbiAgfVxuXG4gIC8vIHdhdGNoZWRIYW5kbGVyKCkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdDbGljayBlbmFibGVkIHdhdGNoZWRIYW5kbGVyJylcbiAgLy8gfVxuXG4gIGZpbHRlclNlYXJjaCgpIHtcbiAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byBmaWx0ZXJTZWFyY2gnKTtcbiAgICBsZXQgbW92aWVzID0gdGhpcy5wcm9wcy5tb3ZpZXM7XG4gICAgbGV0IGZpbHRlcmVkTW92aWVzID0gbW92aWVzLmZpbHRlcigobW92aWUpID0+IG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmN1cnJlbnRTZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09IC0xKVxuICAgIGlmIChmaWx0ZXJlZE1vdmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21vdmllczogW3t0aXRsZTogJzAgcmVzdWx0cyBmb3VuZCBmb3IgXCInICsgdGhpcy5zdGF0ZS5jdXJyZW50U2VhcmNoICsgJ1wiLiBQbGVhc2UgdHJ5IGFub3RoZXIgdGl0bGUuJ31dfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tb3ZpZXMpO1xuICAgIHRoaXMuc2V0U3RhdGUoe21vdmllczogZmlsdGVyZWRNb3ZpZXN9KVxuICB9XG5cbiAgYWRkVG9Nb3ZpZXMoKSB7XG4gICAgbGV0IG5ld01vdmllTGlzdCA9IHRoaXMuc3RhdGUubW92aWVzO1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRJbnB1dCAhPT0gJycpe1xuICAgICAgbmV3TW92aWVMaXN0LnB1c2goe3RpdGxlOiB0aGlzLnN0YXRlLmN1cnJlbnRJbnB1dH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzOiBuZXdNb3ZpZUxpc3R9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QWRkTW92aWUgaW5wdXRIYW5kbGVyPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBoYW5kbGVFbnRlcklucHV0PXt0aGlzLmhhbmRsZUVudGVySW5wdXQuYmluZCh0aGlzKX0gYWRkVG9Nb3ZpZXM9e3RoaXMuYWRkVG9Nb3ZpZXMuYmluZCh0aGlzKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VhcmNoIHNlYXJjaEhhbmRsZXI9e3RoaXMuc2VhcmNoSGFuZGxlci5iaW5kKHRoaXMpfSBmaWx0ZXJTZWFyY2g9e3RoaXMuZmlsdGVyU2VhcmNoLmJpbmQodGhpcyl9IGhhbmRsZUVudGVyU2VhcmNoPXt0aGlzLmhhbmRsZUVudGVyU2VhcmNoLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibW92aWVSb3dcIj5cbiAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IC8+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=