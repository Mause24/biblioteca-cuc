import { classNames } from "@/utils"
import { Link } from "react-router-dom"
import "./_styles.scss"
import { useHeader } from "./useHeader"

export const Header = (): JSX.Element => {
    const { currentLocation, onToggleMenu, openMenu, currentLinks, isAuth,onLogOut } =
        useHeader()

    return (
        <header>
            <section className="header__section">
                <nav className="section__nav">
                    <button
                        className="nav__icon noShowDesktop"
                        onClick={onToggleMenu}
                    >
                        <div className={classNames("burgerMenu")}>
                            <div
                                className={classNames(
                                    "burgerMenu__container",
                                    openMenu ? "open" : ""
                                )}
                            >
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </button>
                    <div
                        className={classNames(
                            "nav__container",
                            openMenu ? "open" : ""
                        )}
                    >
                        <ul className="container__menu">
                            {currentLinks.map((item, index) => (
                                <li key={index} className="menu__item">
                                    <Link
                                        to={item.link}
                                        className={classNames(
                                            "item__link",
                                            `/${currentLocation}` === item.link
                                                ? "selected"
                                                : ""
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            {isAuth() && (
                                <li className="menu__item">
                                    <button onClick={onLogOut} className="item__closeSesion">Cerrar Sesion</button>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
                <h1 className="section__title">Biblioteca CUC</h1>
            </section>
        </header>
    )
}
