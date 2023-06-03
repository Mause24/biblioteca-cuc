import { User } from "@/interfaces"
import { authFirebase } from "@/providers"
import { useAuthStore } from "@/stores"
import { signInWithEmailAndPassword } from "firebase/auth"
import Swal from "sweetalert2"
import * as Yup from "yup"

export const useLogin = () => {
    const { setSession } = useAuthStore()

    const signInSchema = Yup.object().shape({
        email: Yup.string()
            .email("Correo invalido")
            .required("Campo requerido"),
        password: Yup.string()
            .min(2, "Muy corta")
            .max(50, "Muy larga")
            .required("Campo requerido"),
    })

    const onLogIn = async (user: Pick<User, "email" | "password">) => {
        try {
            const loggedUser = await signInWithEmailAndPassword(
                authFirebase,
                user.email,
                user.password
            )

            if (loggedUser.user.uid) {
                Swal.fire("LOGUEADO!", "Se ha logueado exitosamente", "success")
            }

            setSession({
                user: {
                    id: loggedUser.user.uid,
                    name: "Anonymous",
                    lastname: "User",
                    email: loggedUser.user.email ?? "",
                },
                token: await loggedUser.user.getIdToken(),
            })
        } catch (error) {
            console.error(error)
            Swal.fire(
                "ERROR!",
                "Ha ocurrido un error, por favor intente mas tarde",
                "error"
            )
        }
    }

    return {
        onLogIn,
        signInSchema,
    }
}
