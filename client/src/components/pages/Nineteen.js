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
                <p>sapien ut porta pfasdfasdasdfasdfsdasdfa
                    sdfsdasdfasdfsdasdfasdfsdasdfasdfsdasdfasdfsdas
                    dfasdfsdasdfasdfsdasdfasdfsdasdfasdasdfasdfsdasdfas
                    dfsdasdfasdfsdasdfasdfsdasdfasdasdfasdfsdasdfasdfsdasdf
                    asdfsdasdfasdfsdasdfasdasdfasdfsdasdfasdfsdasdfasdf
                    sdasdfasdfsdasdfasdasdfasdfsdasdfasdfsdasdfasdfsdasdfasd
                    fsdasdfasdasdfasdfsdasdfasdfsdasdfasdfsdasdfasdfsdas
                    dfasdasdfasdfsdasdfasdfsdasdfasdfsdasdfasdfsdasdfas
                    dasdfasdfsdasdfasdfsdasdfasdfsdasdfasdfsdasdfasdasdf
                    asdfsdasdfasdfsdasdfasdfsdasdfasdfsdasdfasdasdfasdfsdas
                    dfasdfsdasdfasdfsdasdfasdfsdasdfasdasdfasdfsdasdfasdfsdas
                    dfasdfsdasdfasdfsdasdfasdasdfasdfsdasdfasdfsdasdfasdfsda
                    sdfasdfsdasdfasdasdfasdfsdasdfasdfsdasdfasdfsdasdfasdfs
                    dasdfasdasdfasdfsdasdfasdfsdasdfasdfsdasdfasdfsdasdfasda
                    sdfasdfsdasdfasdfsdasdfasdfsdasdfasdfsdasdfasdasdfasdfsdas
                    dfasdfsdasdfasdfsdasdfasdfsdasdfasdasdfasdfsdasdfasdfsdasd
                    fasdfsdasdfasdfsdasdfasdasdfasdfsdasdfasdfsdasdfasdfsdas
                    dfasdfsdasdfasdasdfasdfsdasdfasdfsdasdfasdfsdasdfasdfsd
                    asdfasdasdfasdfsdasdfasdfsdasdfasdfsdasdfasdfsdasdfas
                    dasdfasdfsdasdfasdfsdasdfasdfsdasdfasdfsdasdfasdasdf
                    asdfsdasdfasdfsdasdfasdfsdasdfasdfsdasdfas
                    dfasdfsdasdfasdfsdasdfasdfsdasdfasdfasdfasdfasdfasd
                    fasdfasdfasdfasdfasdfasdfasdfasdfasdf
                    asdfasdfaulvinar. Fusce non enim eu mi 
                    bibendum fermentum vitae eu nisl. Curabitu
                    r nec justo in odio dapibus vehicula. Nam
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