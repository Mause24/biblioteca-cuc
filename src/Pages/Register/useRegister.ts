import { User } from "@/interfaces"
import { authFirebase, db } from "@/providers"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"
import Swal from "sweetalert2"
import * as Yup from "yup"

export const useRegister = () => {
    const signUpSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Muy corto")
            .max(50, "Muy largo")
            .required("Campo requerido"),
        lastname: Yup.string()
            .min(2, "Muy corto")
            .max(50, "Muy largo")
            .required("Campo requerido"),
        email: Yup.string()
            .email("Correo invalido")
            .required("Campo requerido"),
        password: Yup.string()
            .min(2, "Muy corta")
            .max(50, "Muy larga")
            .required("Campo requerido"),
    })

    const onSignUp = async (user: Omit<User, "id">) => {
        try {
            const registeredUser = await createUserWithEmailAndPassword(
                authFirebase,
                user.email,
                user.password
            )

            if (registeredUser.user.uid) {
                const usersCollection = collection(db, "users")

                await addDoc(usersCollection, user)

                Swal.fire(
                    "REGISTRADO!",
                    "Se ha registrado con exito",
                    "success"
                )
            }
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
        onSignUp,
        signUpSchema,
    }
}
