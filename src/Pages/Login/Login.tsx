import { classNames } from "@/utils"
import { Field, Form, Formik } from "formik"
import "./_styles.scss"
import { useLogin } from "./useLogin"

export const Login = (): JSX.Element => {
    const { onLogIn, signInSchema } = useLogin()

    return (
        <div className="login">
            <div className="login__container">
                <h2 className="container__title">Iniciar sesion</h2>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={signInSchema}
                    onSubmit={values => onLogIn(values)}
                >
                    {({ errors, touched }) => (
                        <Form className="container__form">
                            <div className="form__input">
                                <label className="input__text" htmlFor="email">
                                    Correo
                                </label>
                                <Field
                                    className={classNames(
                                        "input__field",
                                        errors.email && touched.email
                                            ? "error"
                                            : ""
                                    )}
                                    name="email"
                                    type="email"
                                    id="email"
                                />
                                {errors.email && touched.email && (
                                    <div className="input__error">
                                        <p className="error__text">
                                            {errors.email}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="form__input">
                                <label
                                    className="input__text"
                                    htmlFor="password"
                                >
                                    Contraseña
                                </label>
                                <Field
                                    className={classNames(
                                        "input__field",
                                        errors.password && touched.password
                                            ? "error"
                                            : ""
                                    )}
                                    name="password"
                                    type="password"
                                    id="password"
                                />
                                {errors.password && touched.password && (
                                    <div className="input__error">
                                        <p className="error__text">
                                            {errors.password}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <button className="form__button" type="submit">
                                Iniciar sesion
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
