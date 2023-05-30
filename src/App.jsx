import { BrowserRouter, Route, Routes } from "react-router-dom"
import FacturaA from "./screen/FacturaA"
import FacturaB from "./screen/FacturaB"
import FacturaC from "./screen/FacturaC"
import MenuFactura from "./screen/MenuFactura"


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MenuFactura/>} />
                    <Route path="/facturaA" element={<FacturaA />} />
                    <Route path="/facturab" element={<FacturaB />} />
                    <Route path="/facturac" element={<FacturaC />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}