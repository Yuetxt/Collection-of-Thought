import React from 'react'
import "./styling.css";


export default class Nine extends React.Component {
  constructor(props) {
    super(props)
}
  render() {
    return (
<html>
<head>
  <title>1984</title>
</head>
<body>
    <div id = "container">
        <div id = "header">
            <h1 className= "textcolor-white courier">Project</h1>
        </div>
        <div id = "content">
            <div className ="nav textcolor-white flex-center">
                <ul>
                    <li className="adjust-nav text-center "><a class="selected btn btn-one courier" href="/">Main</a></li>
                    <li className="adjust-nav text-center "><a class="selected btn btn-one courier" href="/about">About</a></li>
                </ul>
            </div>
            <div className = "main textcolor-white">
                <h1 className="shift courier">20 June 2020</h1>

<p>

</p>
            </div>
        </div>
        <div className = "footer textcolor-white">
            placeholder
        </div>
    </div>
</body>
</html>
    )
  }
}