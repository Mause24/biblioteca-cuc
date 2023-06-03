import { authFirebase } from "@/providers"
import { useAuthStore } from "@/stores"
import { signOut } from "firebase/auth"
import { useMemo, useState } from "react"
import { useLocation } from "react-router-dom"

export const useHeader = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const location = useLocation()
    const { isAuth, logOut } = useAuthStore()

    const generalLinks = [
        {
            name: "Home",
            link: "/home",
        },
        {
            name: "Admin",
            link: "/admin",
        },
    ]

    const authLinks = [
        {
            name: "Iniciar Sesion",
            link: "/login",
        },
        {
            name: "Registro",
            link: "/register",
        },
    ]

    const currentLocation = useMemo(
        () => location.pathname.split("/").pop(),
        [location.pathname]
    )

    const currentLinks = useMemo(
        () => (isAuth() ? generalLinks : authLinks),
        [isAuth()]
    )

    const onToggleMenu = () => {
        setOpenMenu(state => !state)
    }

    const onLogOut = async (): Promise<void> => {
        try {
            await signOut(authFirebase)
            logOut()
        } catch (error) {
            console.error(error)
        }
    }

    return {
        onToggleMenu,
        currentLocation,
        onLogOut,
        currentLinks,
        isAuth,
        openMenu,
    }
}
