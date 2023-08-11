import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import routes from "./utiles/routes";
import AdminLayout from "./components/layout/AdminLayout";
import Cards from "./pages/Cards";
import AccountSeting from "./pages/accountSetting/AccountSeting";
import Layouts from "./pages/Layouts";
import Authentications from "./pages/authentications/Authentications";
import UserInterface from "./pages/userInterface/UserInterface";
import Misc from "./pages/misc/Misc";
import ExtendedUi from "./pages/extendedUi/ExtendedUi";
import Boxicons from "./pages/Boxicons.jsx";
import FormElements from "./pages/formElements/FormElements";
import FormLayout from "./pages/formLayout/FormLayout";
import Table from "./pages/Table";
import Support from "./pages/Support";
import Documentation from "./pages/Documentation";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route exact path={routes.HOME} element={<HomePage />} />
            <Route exact path={routes.LAYOUTS} element={<Layouts />} />
            <Route exact path={routes.CARDS} element={<Cards />} />
            <Route
              exact
              path={routes.AUTHENTICATIONS}
              element={<Authentications />}
            />
            <Route exact path={routes.MISC} element={<Misc />} />
            <Route
              exact
              path={routes.ACCOUNTSETING}
              element={<AccountSeting />}
            />
            <Route
              exact
              path={routes.USERINTERFACE}
              element={<UserInterface />}
            />
            <Route exact path={routes.EXTENDEDUI} element={<ExtendedUi />} />
            <Route exact path={routes.BOXICONS} element={<Boxicons />} />
            <Route
              exact
              path={routes.FORMELEMENTS}
              element={<FormElements />}
            />
            <Route exact path={routes.FORMLAYOUT} element={<FormLayout />} />
            <Route exact path={routes.TABLE} element={<Table />} />
            <Route exact path={routes.SUPPORT} element={<Support />} />
            <Route
              exact
              path={routes.DOCUMENTATION}
              element={<Documentation />}
            />
          </Route>
          <Route
            exact
            path={routes.FORGOT_PASSWORD}
            element={<ForgotPassword />}
          />
          <Route exact path={routes.LOGIN} element={<Login />} />
          <Route exact path={routes.SIGNUP} element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
