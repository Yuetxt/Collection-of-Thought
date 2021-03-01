import React from 'react'
import "./styling.css";

function MediumsNav ({ selected, onUpdateLanguage }) {
  const mediums = ['Project', 'About']

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
      selectedLanguage: 'Project',
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
  isProject() {
    if (this.state.selectedLanguage === "Project") {
      return true
    }
  }
  isAbout() {
    if (this.state.selectedLanguage === "About") {
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
        {this.isProject() && <span>
          <ul className="tomato">
            <li className="post">
              <a className="link" href="/1984">
                Changes
              </a>
            </li>
          </ul>
        </span>}
        {this.isAbout() && 
        <span>
            <ul className="tomato">
            <li className="post">
              <a className="link" href="/Fire&Ice">
                testing
              </a>
            </li>
          </ul>
        </span>}
      </React.Fragment>
    )
  }
}