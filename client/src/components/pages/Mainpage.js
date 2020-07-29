import React from 'react'
import "./styling.css";

function MediumsNav ({ selected, onUpdateLanguage }) {
  const mediums = ['Books', 'Poems', 'Plays','My Works']

  return (
    <ul className='flex-center'>
      {mediums.map((medium) => (
        <li key={medium}>
          <div
            className='btn btn-one nav-link textColorWhite courier'
            style={medium === selected ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(medium)}>
            {medium}
          </div>
        </li>
      ))}
    </ul>
  )
}


export default class Mainpage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'Books',
    }

    this.updateLanguage = this.updateLanguage.bind(this)
    this.isLoading = this.isLoading.bind(this)

  }
  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage,
    })
  }
  isLoading() {
    return this.state.repos === null && this.state.error === null
  }
  isBooks() {
    if (this.state.selectedLanguage === "Books") {
      return true
    }
  }
  isPlays() {
    if (this.state.selectedLanguage === "Plays") {
      return true
    }
  }
  isPoems() {
    if (this.state.selectedLanguage === "Poems") {
      return true
    }
  }
  
  render() {
    const { selectedLanguage} = this.state

    return (
      <React.Fragment>
        <MediumsNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        {this.isBooks() && <span>
          <ul className="tomato">
            <li className="post">
              <a className="link" href="/1984">
                Nineteen Eighty-Four
              </a>
            </li>
            <li className="post">
               <a className="link" href="/Crime">
                Crime and Punishment
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ulysses">
                Ulysses
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Gatsby">
                The Great Gatsby
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Brave">
                Brave New World
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Gables">
                x
              </a>
           </li>
           <li className="post">
               <a className="link" href="/LesMis">
               y
              </a>
           </li>
           <li className="post">
               <a className="link" href="/WarPeace">
                z
              </a>
           </li>
          </ul>
            </span>}
        {this.isPlays() && 
        <span>
            <ul className="tomato">
            <li className="post">
              <a className="link" href="/Godot">
                Waiting for Godot
              </a>
            </li>
            <li className="post">
               <a className="link" href="/Ernest">
               x
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                y
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                z
              </a>
           </li>
          </ul>
        </span>}
        {this.isPoems() && 
        <span>
                    <ul className="tomato">
            <li className="post">
              <a className="link" href="/Fire&Ice">
                Fire and Ice
              </a>
            </li>
            <li className="post">
               <a className="link" href="/Rime">
                The Rime of the Anicent Mariner
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                x
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                y
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                z
              </a>
           </li>
          </ul>
        </span>}
      </React.Fragment>
    )
  }
}