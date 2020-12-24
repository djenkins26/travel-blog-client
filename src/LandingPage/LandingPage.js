import React from 'react'
import { withRouter } from 'react-router-dom'
import Background from './background_image.jpg'
import '../index.scss'

const LandingPage = props => {
  const landingPageStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    height: '100vh',
    backgroundPosition: 'center'
  }

  return (
    <div style={landingPageStyles}>
      <div>
        <h1>Catch the Travel Bug!</h1>
        <h2>
          Have you ever visited somewhere extraordinary? Publish your own Travel Blog and share your experience!
        </h2>
      </div>
    </div>
  )
}

export default withRouter(LandingPage)
