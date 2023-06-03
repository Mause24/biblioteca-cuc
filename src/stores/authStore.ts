import { SessionType, TypeAuthStore } from "@/interfaces"
import { isEmpty } from "@/utils"
import { create } from "zustand"

export const useAuthStore = create<TypeAuthStore>((set, get) => {
    const sessionState =
        JSON.parse(localStorage.getItem("session") ?? "") ?? ({} as SessionType)

    const setSession = (newSession: SessionType): void => {
        set({ session: newSession })
        localStorage.setItem("session", JSON.stringify(newSession))
    }

    const isAuth = (): boolean => {
        const state = get()
        return !isEmpty(state.session)
    }

    const logOut = (): void => {
        set({ session: {} as SessionType })
    }

    return {
        session: sessionState,
        logOut,
        isAuth,
        setSession,
    }
})
