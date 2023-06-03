import { User } from ".."

export interface SessionType {
    user: Omit<User, "password">
    token: string
}

export interface TypeAuthStore {
    session: SessionType
    logOut: () => void
    setSession: (newSession: SessionType) => void
    isAuth: () => boolean
}
