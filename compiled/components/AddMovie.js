"use strict";

var AddMovie = function AddMovie(props) {
  return React.createElement(
    "div",
    null,
    React.createElement("input", { className: "add-movie-form",
      onKeyPress: function onKeyPress(event) {
        return props.handleEnterInput(event);
      },
      onChange: function onChange(event) {
        return props.inputHandler(event.target.value);
      },
      type: "text" }),
    React.createElement(
      "button",
      { className: "add-movie-button", onClick: function onClick(event) {
          return props.addToMovies();
        } },
      "Add"
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsInByb3BzIiwiZXZlbnQiLCJoYW5kbGVFbnRlcklucHV0IiwiaW5wdXRIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJhZGRUb01vdmllcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBRVg7QUFBQTtBQUFBO0FBQ0UsbUNBQU8sV0FBVSxnQkFBakI7QUFDRSxrQkFBWSxvQkFBQ0MsS0FBRDtBQUFBLGVBQVdELE1BQU1FLGdCQUFOLENBQXVCRCxLQUF2QixDQUFYO0FBQUEsT0FEZDtBQUVFLGdCQUFVLGtCQUFDQSxLQUFEO0FBQUEsZUFBV0QsTUFBTUcsWUFBTixDQUFtQkYsTUFBTUcsTUFBTixDQUFhQyxLQUFoQyxDQUFYO0FBQUEsT0FGWjtBQUdFLFlBQUssTUFIUCxHQURGO0FBS0U7QUFBQTtBQUFBLFFBQVEsV0FBVSxrQkFBbEIsRUFBcUMsU0FBUyxpQkFBQ0osS0FBRDtBQUFBLGlCQUFXRCxNQUFNTSxXQUFOLEVBQVg7QUFBQSxTQUE5QztBQUFBO0FBQUE7QUFMRixHQUZXO0FBQUEsQ0FBZiIsImZpbGUiOiJBZGRNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBZGRNb3ZpZSA9IChwcm9wcykgPT5cbiAgKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYWRkLW1vdmllLWZvcm1cIiBcbiAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiBwcm9wcy5oYW5kbGVFbnRlcklucHV0KGV2ZW50KX1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMuaW5wdXRIYW5kbGVyKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLW1vdmllLWJ1dHRvblwiIG9uQ2xpY2s9eyhldmVudCkgPT4gcHJvcHMuYWRkVG9Nb3ZpZXMoKX0gPkFkZDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApIl19