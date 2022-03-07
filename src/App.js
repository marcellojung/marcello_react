import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import About from './views/About'
import Home from './views/Home'
import Users from './views/Users'
import UserDetail from './views/UserDetail'
import Layout from './views/Layout'
import NotFound from './views/NotFound'

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} /> {/* */}
                    <Route path="about" element={<About />} />
                    <Route path="user" element={<Users />} />
                    <Route path="user/:id" element={<UserDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

