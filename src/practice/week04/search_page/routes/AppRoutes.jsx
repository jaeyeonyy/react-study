import { Route, Routes } from "react-router";
import Home from '../pages/Home.jsx';
import Search from '../pages/Search.jsx';
import RootLayout from '../layouts/RootLayout';
import MyLayout from '../layouts/MyLayout';
import AccountHome from "../pages/AccountHome.jsx";
import AccountSettings from "../pages/AccountSettings.jsx";


function AppRoutes(){
    return(
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="search" element={<Search />} />
            </Route>

            <Route path="/account"element={<MyLayout/>}>
                <Route index element={<AccountHome/>}/>
                <Route path="settings" element={<AccountSettings/>}/>
            </Route>
            
        </Routes>
    )
}

export default AppRoutes;