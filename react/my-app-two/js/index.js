"use strict";

// App
var App = React.createClass({
  displayName: "App",

  componentDidMount: function componentDidMount() {

    var sq1 = this.refs.first.getDOMNode();
    var sq2 = this.refs.second.getDOMNode();
    var sq3 = this.refs.third.getDOMNode();
    var sq4 = this.refs.fourth.getDOMNode();
    var sq5 = this.refs.fifth.getDOMNode();
    var allSq = [sq1, sq2, sq3, sq4, sq5];

    TweenLite.set(allSq, { css: { transformPerspective: 400, perspective: 400, transformStyle: "preserve-3d" } });

    TweenMax.to(sq1, 2.5, { css: { rotationX: 230, z: -600 }, ease: Power2.easeOut }, "+=0.2");
    TweenMax.to(sq2, 2.5, { css: { rotationY: 230, z: -150 }, ease: Power4.easeOut }, "+=0.2");
    TweenMax.to(sq3, 2.5, { css: { rotationX: 500, z: 150 }, ease: Power2.easeOut }, "+=0.2");
    TweenMax.to(sq4, 2.5, { css: { rotationY: 500, z: -150 }, ease: Power2.easeOut }, "+=0.2");
    TweenMax.to(sq5, 2.5, { css: { rotationX: 1000, z: 100 }, ease: Power3.easeOut }, "+=0.2");
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "scene" },
      React.createElement(Box, { ref: "first" }),
      React.createElement(Box, { ref: "second" }),
      React.createElement(Box, { ref: "third" }),
      React.createElement(Box, { ref: "fourth" }),
      React.createElement(Box, { ref: "fifth" })
    );
  }
});

// Box
var Box = React.createClass({
  displayName: "Box",

  render: function render() {
    return React.createElement("div", { className: "squares" });
  }
});

React.render(React.createElement(App, null), document.querySelector("#main"));