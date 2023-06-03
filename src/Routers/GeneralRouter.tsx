import { Admin, Home } from "@/Pages"
import { Navigate, Route, Routes } from "react-router-dom"

const GeneralRouter = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} index />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
    )
}

export default GeneralRouter
