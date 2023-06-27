import { BrowserRouter, Route, Routes } from "react-router-dom"
import MenuFactura from "./screen/MenuFactura"
import Home from "./screen/Home"
// import ModelFactura from "./Components/ModelFactura";


export default function App() {
    return (

        <>
            { <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/MenuFactura" element={<MenuFactura/>} />
                </Routes>
            </BrowserRouter> }
        
        </>
    )
}