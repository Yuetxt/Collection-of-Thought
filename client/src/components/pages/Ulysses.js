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
            <h1 className= "textcolor-white courier">Ulysses</h1>
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
                <p>Of all the books I have ever read, <i>Ulysses</i> is the one that I wish to return to in the future the most. The depth of the novel is broad since it all occurs within a day. It&rsquo;s spectacular. There are references to Lazarus and Hamlet from page to page. The former reminds me of <i>Crime and Punishment</i> specifically because an excerpt of the raising of Lazarus is actually read in it.</p>

<p>Those references alone make the entire journey of beginning to end an experience that is enriching like none other.</p>

<p>Although I was told that the allusions and connections are only a part of the ride, it simply feels unfulfilling. As if I had read a scuffed version of the book with words missing and pages torn.</p>

<p>The reason why I want to return to Ulysses in the future is primarily because of the sheer amount of content that I missed or could not understand fully.</p>

<p>Whether it be the death-ridden chapter, &ldquo;Hades&rdquo;, or a sudden change to play directions during &ldquo;Circe&rdquo;, Joyce finds ways to entertain within the scope of any mundane day.</p>

<p>For my first read of Ulysses, I will leave this page mostly blank until I have more qualifications to fully understand it.<br />
</p>

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