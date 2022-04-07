<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script>
      function App() {
        return React.createElement(
          "div",
          {
            className: 'container'
          },
          [
            (
              React.createElement("h1", {},"Doraemon"),
              React.createElement("h2", {},"40"),
              React.createElement('h3', {},"Toyama")
            ),
            (
              React.createElement("h1", {},"Goku"),
              React.createElement("h2", {},"11"),
              React.createElement('h3', {},"West City")
            ),
            (
              React.createElement("h1", {},"Itachi"),
              React.createElement("h2", {},"8"),
              React.createElement('h3', {},"Konoha")
            )
          ]
        )
      }

      ReactDOM.render(React.createElement(App), document.getElementById("root"));
    </script>

  </body>
</html>
// class App extends React.Component {
//   render() {
//     <div id="root">not rendered</div>;
//   }
// }

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
