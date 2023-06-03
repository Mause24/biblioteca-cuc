import "./App.scss"
import { Footer, Header } from "./Components"
import Router from "./Routers/Router"
import { classNames } from "./utils"


function App() {
    return (
        <div className={classNames("appContainer")}>
            <Header />
            <Router />
            <Footer />
        </div>
    )
}

export default App
