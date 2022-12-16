import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from 'react'
import QueryProvider from "../helper/utils/reactQuery/QueryProvider"
import StoreProvider from "../redux/provider/StoreProvider"
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import PrivateRoutes from "./PrivateRoutes"
import NotConnectedRoutes from "./NotConnectedRoutes"

const Layout = lazy(() => import('./Layout'))
const Landing = lazy(() => import('../pages/Landing'))
const Register = lazy(() => import('../pages/Register'))
const RecoverPassword = lazy(() => import("../pages/RecoverPassword"))

const Home = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Home"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const Profile = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Profile"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const ViewMore = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/ViewMore"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const Search = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Search"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});

const Router = () => {
    return (
        <QueryProvider>
        <StoreProvider>
            <BrowserRouter>
                <Suspense fallback={<LogoSpinner />}>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<NotConnectedRoutes><Landing /></NotConnectedRoutes>} />
                            <Route path='/register' element={<NotConnectedRoutes><Register /></NotConnectedRoutes>} />
                            <Route path='/recover-password' element={<NotConnectedRoutes><RecoverPassword /></NotConnectedRoutes>} />
                            <Route path='/home' element={<PrivateRoutes><Home /></PrivateRoutes>} />
                            <Route path='/home/:viewMore' element={<PrivateRoutes><ViewMore /></PrivateRoutes>} />
                            <Route path='/search' element={<PrivateRoutes><Search /></PrivateRoutes>} />
                            <Route path='/:username' element={<PrivateRoutes><Profile /></PrivateRoutes>} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </StoreProvider>
        </QueryProvider>
    )
}

export default Router
