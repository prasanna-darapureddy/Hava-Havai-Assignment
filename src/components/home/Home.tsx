import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Flex, } from "@adobe/react-spectrum"
import AppBar from "../header/AppBar"
import Sidebar from "../sideBar/SideBar"
import Desktop1 from "../desktop_1/Desktop1"
import Desktop2 from "../desktop_2/Desktop2"

const LandingHome = () => {
    return (
        <>
            <AppBar />
            <Flex direction={'row'} height={'90vh'}>
                <Sidebar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Desktop1 />} />
                        <Route path="desktop2" element={<Desktop2 />} />
                    </Routes>
                </BrowserRouter>
            </Flex>
        </>
    )
}
export default LandingHome