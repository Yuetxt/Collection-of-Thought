import React from 'react'
import "./styling.css";


export default class Ulysses extends React.Component {
  constructor(props) {
    super(props)
}
  render() {
    return (
<html>
<head>
  <title>Ulysses</title>
</head>
<body>
    <div id = "container">
        <div id = "header">
            <h1 className= "textcolor-white courier">1984</h1>
        </div>
        <div id = "content">
            <div className ="nav textcolor-white flex-center">
                <ul>
                    <li className="adjust-nav text-center "><a class="selected btn btn-one courier" href="/">Main</a></li>
                    <li className="adjust-nav text-center "><a class="selected btn btn-one courier" href="/about">About</a></li>
                </ul>
            </div>
            <div className = "main textcolor-white">
                <h1 className="shift courier">1 July 2020</h1>
                <a href="client\src\components\Ulysses (Gabler Edition) by James Joyce, Hans Gabler.pdf" download>click</a>
            </div>
        </div>
        <div className = "footer textcolor-white">
            Written by Daniel Zheng
        </div>
    </div>
</body>
</html>
    )
  }
}