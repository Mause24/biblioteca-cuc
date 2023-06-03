import { classNames } from "@/utils"
import { Field, Form, Formik } from "formik"
import "./_styles.scss"
import { useRegister } from "./useRegister"

export const Register = () => {
    const { onSignUp, signUpSchema } = useRegister()
    return (
        <div className="register">
            <div className="register__container">
                <h2 className="container__title">Registro</h2>
                <Formik
                    initialValues={{
                        name: "",
                        lastname: "",
                        email: "",
                        password: "",
                    }}
                    validationSchema={signUpSchema}
                    onSubmit={values => onSignUp(values)}
                >
                    {({ errors, touched }) => (
                        <Form className="container__form">
                            <div className="form__input">
                                <label className="input__text" htmlFor="name">
                                    Nombre
                                </label>
                                <Field
                                    className={classNames(
                                        "input__field",
                                        errors.name && touched.name
                                            ? "error"
                                            : ""
                                    )}
                                    name="name"
                                    type="name"
                                    id="name"
                                />
                                {errors.name && touched.name && (
                                    <div className="input__error">
                                        <p className="error__text">
                                            {errors.name}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="form__input">
                                <label
                                    className="input__text"
                                    htmlFor="lastname"
                                >
                                    Apellido
                                </label>
                                <Field
                                    className={classNames(
                                        "input__field",
                                        errors.lastname && touched.lastname
                                            ? "error"
                                            : ""
                                    )}
                                    name="lastname"
                                    type="lastname"
                                    id="lastname"
                                />
                                {errors.lastname && touched.lastname && (
                                    <div className="input__error">
                                        <p className="error__text">
                                            {errors.lastname}
                                        </p>
                                    </div>
                                )}
                            </div>
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
                                Registrar
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
