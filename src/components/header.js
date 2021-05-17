import * as ROUTES from '../constants/routes'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Header() {
    return (
        <Router>
            <Link to={ROUTES.HOME}>Home</Link> |
            <Link to={ROUTES.CARS}>Cars</Link> |
            <Link to={ROUTES.HOUSES}>Houses</Link> |
            <Link to={ROUTES.JOBS}>Jobs</Link>
        </Router>
    )
}