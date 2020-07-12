import React from 'react'
import "./Skeleton.css";

function MediumsNav ({ selected, onUpdateLanguage }) {
  const mediums = ['Books', 'Poems', 'Plays']

  return (
    <ul className='flex-center'>
      {mediums.map((medium) => (
        <li key={medium}>
          <div
            className='btn btn-one nav-link textColorWhite helv'
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
          <ul>
            <li className="post">
          <a className="link" href="/1984">
            1984
            </a>
          </li>
          <li className="post">
          <a className="link" href="/nowhere">
          Tristram Shandy
          </a>
          </li>
          </ul>
            </span>}
        {this.isPlays() && <p>PLAYS</p>}
        {this.isPoems() && <p>POEMS</p>}
      </React.Fragment>
    )
  }
}