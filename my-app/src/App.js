import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isMobileMenuOpen: false,
    }
  }

  toggleMobileMenu = () => {
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen
    })
  }

  render(){
    return (
      <div className="App">
        <header className="header">
          <div className="logo-holder">
            <img className="logo" src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="name-logo"/>
          </div>
          <nav className="nav">
            <ol className="nav-list">
              <li className="nav-items">SERVICES</li>
              <li className="nav-items">PORTFOLIO</li>
              <li className="nav-items">ABOUT</li>
              <li className="nav-items">TEAM</li>
              <li className="nav-items">CONTACT</li>
            </ol>
          </nav>
          <nav className="mobile-nav">
            <button className="ham-btn" onClick={this.toggleMobileMenu}>MENU</button>
          <ol 
          className={`mobile-nav-list ${this.state.isMobileMenuOpen ? 'mobile-nav-list-open' : null }`}>
              <li className="mobile-nav-list-item">SERVICES</li>
              <li className="mobile-nav-list-item">PORTFOLIO</li>
              <li className="mobile-nav-list-item">ABOUT</li>
              <li className="mobile-nav-list-item">TEAM</li>
              <li className="mobile-nav-list-item">CONTACT</li>
            </ol>
          </nav>
        </header>
        <div className="bg-container">
          <div className="header-text">
            <h2 className="h2-text">Welcome To Our Studio</h2>
            <h1 className="h1-text">IT'S NICE TO MEET YOU</h1>
            <button className="btn">TELL ME MORE</button>
          </div>
          <img className="img" src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/header-bg.jpg" alt="background of phone keys headphone"/>
        </div>
  
      </div>
    );
  }
}

export default App;
