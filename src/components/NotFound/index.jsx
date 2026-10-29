import {Link} from 'react-router-dom'
import './index.css'

function NotFound() {
  return (
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="IPL logo"
        className="not-found-logo"
      />

      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/" className="home-link">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound