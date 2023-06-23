import { BrowserRouter, Route, Routes } from "react-router-dom"
import MenuFactura from "./screen/MenuFactura"

// import ModelFactura from "./Components/ModelFactura";


export default function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<MenuFactura/>} />
                </Routes>
            </BrowserRouter>
            
        </>
    )
}