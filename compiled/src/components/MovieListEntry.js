"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieListEntry = function (_React$Component) {
  _inherits(MovieListEntry, _React$Component);

  function MovieListEntry(props) {
    _classCallCheck(this, MovieListEntry);

    var _this = _possibleConstructorReturn(this, (MovieListEntry.__proto__ || Object.getPrototypeOf(MovieListEntry)).call(this, props));

    _this.state = {
      showDescription: false
    };
    return _this;
  }

  _createClass(MovieListEntry, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement,
          _React$createElement2;

      return this.state.showDescription ? React.createElement(
        "li",
        (_React$createElement = { id: this.props.movie.title, className: "watched" }, _defineProperty(_React$createElement, "id", "movie-list-entry"), _defineProperty(_React$createElement, "onClick", function onClick(event) {
          return _this2.setState({ showDescription: !_this2.state.showDescription });
        }), _React$createElement),
        this.props.movie.title,
        " ",
        React.createElement(
          "span",
          null,
          "\u2713"
        )
      ) : React.createElement(
        "li",
        (_React$createElement2 = { id: this.props.movie.title, className: "unwatched" }, _defineProperty(_React$createElement2, "id", "movie-list-entry"), _defineProperty(_React$createElement2, "onClick", function onClick() {
          return _this2.setState({ showDescription: !_this2.state.showDescription });
        }), _React$createElement2),
        this.props.movie.title,
        " "
      );
    }
  }]);

  return MovieListEntry;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJzaG93RGVzY3JpcHRpb24iLCJtb3ZpZSIsInRpdGxlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFpQjtBQUROLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBRVE7QUFBQTtBQUFBO0FBQUE7O0FBQ1AsYUFDRyxLQUFLRCxLQUFMLENBQVdDLGVBQVosR0FDQTtBQUFBO0FBQUEsa0NBQUksSUFBSSxLQUFLRixLQUFMLENBQVdHLEtBQVgsQ0FBaUJDLEtBQXpCLEVBQWdDLFdBQVUsU0FBMUMsZ0RBQXVELGtCQUF2RCxvREFBbUYsaUJBQUNDLEtBQUQ7QUFBQSxpQkFBVyxPQUFLQyxRQUFMLENBQWMsRUFBQ0osaUJBQWlCLENBQUMsT0FBS0QsS0FBTCxDQUFXQyxlQUE5QixFQUFkLENBQVg7QUFBQSxTQUFuRjtBQUErSixhQUFLRixLQUFMLENBQVdHLEtBQVgsQ0FBaUJDLEtBQWhMO0FBQUE7QUFBdUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2TCxPQURBLEdBR0E7QUFBQTtBQUFBLG1DQUFJLElBQUksS0FBS0osS0FBTCxDQUFXRyxLQUFYLENBQWlCQyxLQUF6QixFQUFnQyxXQUFVLFdBQTFDLGlEQUF5RCxrQkFBekQscURBQXFGO0FBQUEsaUJBQU0sT0FBS0UsUUFBTCxDQUFjLEVBQUNKLGlCQUFpQixDQUFDLE9BQUtELEtBQUwsQ0FBV0MsZUFBOUIsRUFBZCxDQUFOO0FBQUEsU0FBckY7QUFBNEosYUFBS0YsS0FBTCxDQUFXRyxLQUFYLENBQWlCQyxLQUE3SztBQUFBO0FBQUEsT0FKRjtBQU1EOzs7O0VBZjBCRyxNQUFNQyxTIiwiZmlsZSI6Ik1vdmllTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0Rlc2NyaXB0aW9uOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLnN0YXRlLnNob3dEZXNjcmlwdGlvbikgPyBcbiAgICAgIDxsaSBpZD17dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX0gY2xhc3NOYW1lPVwid2F0Y2hlZFwiIGlkPVwibW92aWUtbGlzdC1lbnRyeVwiIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd0Rlc2NyaXB0aW9uOiAhdGhpcy5zdGF0ZS5zaG93RGVzY3JpcHRpb259KX0gPnt0aGlzLnByb3BzLm1vdmllLnRpdGxlfSA8c3Bhbj7inJM8L3NwYW4+PC9saT5cbiAgICAgIDpcbiAgICAgIDxsaSBpZD17dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX0gY2xhc3NOYW1lPVwidW53YXRjaGVkXCIgaWQ9XCJtb3ZpZS1saXN0LWVudHJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd0Rlc2NyaXB0aW9uOiAhdGhpcy5zdGF0ZS5zaG93RGVzY3JpcHRpb259KX0gPnt0aGlzLnByb3BzLm1vdmllLnRpdGxlfSA8L2xpPlxuICAgIClcbiAgfVxufSJdfQ==