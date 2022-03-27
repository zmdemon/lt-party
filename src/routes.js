import {TicketBuyPage} from "./pages/TicketBuyPage";
import {Redirect, Route, Switch} from "react-router-dom"
import QrScanner from "./pages/QrScanner/QrScanner";

export const useRoutes = isAuthenticated => {
    if (true) {
        return (
            <Switch>
                <Route path="/ticketbuy">
                    <TicketBuyPage/>
                </Route>
                {/*<Route path="/">*/}
                {/*    <LandingPage/>*/}
                {/*</Route>*/}
                <Route path="/qr/scan">
                    <QrScanner/>
                </Route>
                <Redirect to={"/"}/>
            </Switch>
        )
    }
    // return (
    //
    //     <Switch>
    //         <Route path="/">
    //             <LandingPage/>
    //         </Route>
    //         <Redirect to="/"/>
    //     </Switch>
    // )
}
