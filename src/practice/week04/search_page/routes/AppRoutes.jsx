import { Route, Routes } from "react-router";
import Home from '../pages/Home.jsx';
import Search from '../pages/Search.jsx';
import RootLayout from '../layouts/RootLayout';

function AppRoutes(){
    return(
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="search" element={<Search />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;