import { Route, Routes } from "react-router-dom";
import { Create } from '../pages/Create'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/details/:id" element={ <Details /> } />
            <Route path="/create" element={ <Create /> } />
        </Routes>
    )
}