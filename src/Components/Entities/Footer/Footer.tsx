import "./_styles.scss"

export const Footer = (): JSX.Element => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__left">
                    <span className="footer__copyright">
                        &copy; {new Date().getFullYear()} Sands Company
                    </span>
                </div>
                <div className="footer__right">
                </div>
            </div>
        </footer>
    )
}
