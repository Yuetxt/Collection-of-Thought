import React from 'react'
import "./Skeleton.css";


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
            <h1 className= "textcolor-white">1984</h1>
        </div>
        <div id = "content">
            <div className ="nav textcolor-white flex-center">
                <ul>
                    <li className="adjust-nav text-center "><a class="selected btn btn-one" href="/">Main</a></li>
                    <li className="adjust-nav text-center "><a class="selected btn btn-one" href="/about">About</a></li>
                </ul>
            </div>
            <div className = "main textcolor-white">
                <h2>Home page</h2>
                <p>Lorem ipsum dolor sit amet, porta quam scelerisque augue sollicitudin interdum, consequat sem hac, duis duis arcu, a semper pulvinar eget morbi aliquam. Elementum lobortis, phasellus lectus dui cras parturient tincidunt, tempus amet consectetuer eu tincidunt facilisis. Mattis metus, aliquam cras ligula convallis porta vitae, tortor integer vulputate morbi, odio vivamus sed proin in ultrices. Ipsa metus, eget ante. Hendrerit libero etiam pede in ut, molestie nunc, nunc habitant. Phasellus ut purus rerum urna vivamus. Mauris dui velit viverra consectetuer. Eros dignissim iaculis quisque maecenas. Metus ultricies augue faucibus pretium, dolor eleifend integer curabitur ut rutrum, interdum suscipit et eros, purus imperdiet volutpat ut donec leo risus, ante suscipit.
                </p>
            </div>
        </div>
        <div className = "footer textcolor-white">
            Copyright &copy; 2020 Project
        </div>
    </div>
</body>
</html>
    )
  }
}