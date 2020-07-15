import React from 'react'
import "./styling.css";

function MediumsNav ({ selected, onUpdateLanguage }) {
  const mediums = ['Books', 'Poems', 'Plays']

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
               <a className="link" href="/Crime">
                Ulysses
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Crime">
                The Great Gatsby
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Crime">
                The House of Seven Gables
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Crime">
               Les Misérables
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Crime">
                War and Peace
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Crime">
                Brave New World
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Crime">
                Wuthering Heights
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Crime">
                The Picture of Dorian Gray
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Crime">
                Dune
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Crime">
                The Sorrows of Young Werther
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Crime">
                Cry, the Beloved Country
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
               The Importance of Being Earnest
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Oedipus Rex
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                King Lear
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Romeo and Juliet
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Pygamalion
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Julius Caesar
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Long Day's Journey into Night
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                The Merry Wives of Windsor
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                The Cherry Orchard
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                No Exit
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Henry V
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                12 Angry Men
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
                Iliad
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Paradise Lost
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                The Canterbury Tales
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Inferno
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                The Waste Land
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Aeneid
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Odyssey
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Faust
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                The Charge of the Light Brigade
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Paradiso
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Song of Myself
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                The Tyger
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Ode on a Grecian Urn
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Ode to Joy
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                Kubla Khan
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                The Cantos
              </a>
           </li>
           <li className="post">
               <a className="link" href="/Ernest">
                My Last Duchess
              </a>
           </li>
           
          </ul>
        </span>}
      </React.Fragment>
    )
  }
}