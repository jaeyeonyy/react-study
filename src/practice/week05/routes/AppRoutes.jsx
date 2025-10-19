import { Route, Routes } from "react-router";
import RootLayout from '../layouts/RootLayout';
import ProductPage from '../pages/ProductPage';

function AppRoutes(){
    return(
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="products" element={<ProductPage />} />
                <Route path="products/:category" element={<ProductPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;