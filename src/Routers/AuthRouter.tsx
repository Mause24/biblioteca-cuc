import { Login, Register } from "@/Pages"
import { Navigate, Route, Routes } from "react-router-dom"

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} index />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to={"/login"} />} />
        </Routes>
    )
}

export default AuthRouter
