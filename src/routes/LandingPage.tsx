import { NavLink } from 'react-router-dom';

export const LandingPage = () =>{
    return (
        <div>
            <div>This is the landing page</div>
            <div>link to login: {<NavLink to="/login">link</NavLink>}</div>
        </div>
        
    )
}