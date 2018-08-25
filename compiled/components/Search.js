"use strict";

var Search = function Search(props) {
  return React.createElement(
    "div",
    { className: "search-bar" },
    React.createElement(
      "button",
      { className: "search-bar-watched" },
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
      { className: "search-bar-submit", onClick: function onClick(event) {
          return props.filterSearch();
        } },
      "Search"
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJldmVudCIsImhhbmRsZUVudGVyU2VhcmNoIiwic2VhcmNoSGFuZGxlciIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyU2VhcmNoIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FFWDtBQUFBO0FBQUEsTUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG9CQUFsQjtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFRLFdBQVUsb0JBQWxCO0FBQUE7QUFBQSxLQUZGO0FBR0UsbUNBQU8sV0FBVSxpQkFBakI7QUFDSSxrQkFBWSxvQkFBQ0MsS0FBRDtBQUFBLGVBQVdELE1BQU1FLGlCQUFOLENBQXdCRCxLQUF4QixDQUFYO0FBQUEsT0FEaEI7QUFFSSxnQkFBVSxrQkFBQ0EsS0FBRDtBQUFBLGVBQVdELE1BQU1HLGFBQU4sQ0FBb0JGLE1BQU1HLE1BQU4sQ0FBYUMsS0FBakMsQ0FBWDtBQUFBLE9BRmQ7QUFHSSxZQUFLLE1BSFQsR0FIRjtBQU9FO0FBQUE7QUFBQSxRQUFRLFdBQVUsbUJBQWxCLEVBQXNDLFNBQVMsaUJBQUNKLEtBQUQ7QUFBQSxpQkFBV0QsTUFBTU0sWUFBTixFQUFYO0FBQUEsU0FBL0M7QUFBQTtBQUFBO0FBUEYsR0FGVztBQUFBLENBQWIiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaCA9IChwcm9wcykgPT5cbiAgKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItd2F0Y2hlZFwiPldhdGNoZWQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItd2F0Y2hlZFwiPlRvIFdhdGNoPC9idXR0b24+XG4gICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItZm9ybVwiIFxuICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHByb3BzLmhhbmRsZUVudGVyU2VhcmNoKGV2ZW50KX1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMuc2VhcmNoSGFuZGxlcihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICB0eXBlPVwidGV4dFwiLz5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItc3VibWl0XCIgb25DbGljaz17KGV2ZW50KSA9PiBwcm9wcy5maWx0ZXJTZWFyY2goKX0gPlNlYXJjaDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgKVxuIl19