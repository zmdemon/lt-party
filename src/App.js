import './App.css';
import {useRoutes} from "./routes"

import {BrowserRouter as Router} from "react-router-dom";

function App() {
    const isAuthenticated = true

    const routes = useRoutes(isAuthenticated)

    return (
        <Router>
            <div className="App container">
                {routes}
            </div>
        </Router>

    );
}

export default App;
