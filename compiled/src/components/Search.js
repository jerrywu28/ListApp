"use strict";

var Search = function Search(props) {
  return React.createElement(
    "div",
    { className: "search-bar" },
    React.createElement(
      "button",
      { className: "search-bar-watched", onClick: function onClick() {} },
      "Watched"
    ),
    React.createElement(
      "button",
      { className: "search-bar-watched" },
      "To Watch"
    ),
    React.createElement("input", { className: "search-bar-form",
      onKeyPress: function onKeyPress(event) {
        return props.handleEnterSearch(event);
      },
      onChange: function onChange(event) {
        return props.searchHandler(event.target.value);
      },
      type: "text" }),
    React.createElement(
      "button",
      { className: "search-bar-submit", onClick: function onClick() {
          return props.filterSearch();
        } },
      "Search"
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJldmVudCIsImhhbmRsZUVudGVyU2VhcmNoIiwic2VhcmNoSGFuZGxlciIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyU2VhcmNoIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FFWDtBQUFBO0FBQUEsTUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFTLG1CQUFNLENBQUUsQ0FBeEQ7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG9CQUFsQjtBQUFBO0FBQUEsS0FGRjtBQUdFLG1DQUFPLFdBQVUsaUJBQWpCO0FBQ0ksa0JBQVksb0JBQUNDLEtBQUQ7QUFBQSxlQUFXRCxNQUFNRSxpQkFBTixDQUF3QkQsS0FBeEIsQ0FBWDtBQUFBLE9BRGhCO0FBRUksZ0JBQVUsa0JBQUNBLEtBQUQ7QUFBQSxlQUFXRCxNQUFNRyxhQUFOLENBQW9CRixNQUFNRyxNQUFOLENBQWFDLEtBQWpDLENBQVg7QUFBQSxPQUZkO0FBR0ksWUFBSyxNQUhULEdBSEY7QUFPRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG1CQUFsQixFQUFzQyxTQUFTO0FBQUEsaUJBQU1MLE1BQU1NLFlBQU4sRUFBTjtBQUFBLFNBQS9DO0FBQUE7QUFBQTtBQVBGLEdBRlc7QUFBQSxDQUFiIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTZWFyY2ggPSAocHJvcHMpID0+XG4gIChcbiAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLXdhdGNoZWRcIiBvbkNsaWNrPXsoKSA9PiB7fX0gPldhdGNoZWQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItd2F0Y2hlZFwiPlRvIFdhdGNoPC9idXR0b24+XG4gICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItZm9ybVwiIFxuICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHByb3BzLmhhbmRsZUVudGVyU2VhcmNoKGV2ZW50KX1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMuc2VhcmNoSGFuZGxlcihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICB0eXBlPVwidGV4dFwiLz5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItc3VibWl0XCIgb25DbGljaz17KCkgPT4gcHJvcHMuZmlsdGVyU2VhcmNoKCl9ID5TZWFyY2g8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIClcbiJdfQ==