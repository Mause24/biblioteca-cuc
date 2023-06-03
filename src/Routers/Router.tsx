import { useAuthStore } from "@/stores"
import AuthRouter from "./AuthRouter"
import GeneralRouter from "./GeneralRouter"

const Router = (): JSX.Element => {
    const { isAuth } = useAuthStore()

    return isAuth() ? <GeneralRouter /> : <AuthRouter />
}

export default Router
