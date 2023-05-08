import { BrowserRouter, Route, Routes } from "react-router-dom";
import URL from "../context/URL";
import App from "./App";

const Root = () => (
    <BrowserRouter>
        <Routes>
            <Route path={URL.MAIN} element={<App tab={URL.MENUTYPE_MAIN}></App>}></Route>

            <Route path={URL.NOTICE_LIST} element={<App tab={URL.MENUTYPE_NOTICE_LIST}></App>}></Route>
            <Route path={URL.NOTICE_DETAIL} element={<App tab={URL.MENUTYPE_NOTICE_DETAIL}></App>}></Route>
            <Route path={URL.NOTICE_ADD} element={<App tab={URL.MENUTYPE_NOTICE_ADD}></App>}></Route>
            
            <Route path={URL.APT_LIST} element={<App tab={URL.MENUTYPE_APT_LIST}></App>}></Route>
            <Route path={URL.APT_DETAIL} element={<App tab={URL.MENUTYHPE_APT_DETAIL}></App>}></Route>
            <Route path={URL.APT_ADD} element={<App tab={URL.MENUTYPE_APT_ADD}></App>}></Route>

            <Route path={URL.CUSTOMER_LIST} element={<App tab={URL.CUSTOMER_LIST}></App>}></Route>
            <Route path={URL.CUSTOMER_DETAIL} element={<App tab={URL.CUSTOMER_DETAIL}></App>}></Route>
            
            
        </Routes>
    </BrowserRouter>
)
export default Root;

