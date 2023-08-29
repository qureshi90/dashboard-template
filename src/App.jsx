import routes from "./config/routes";
import AdminLayout from "./components/layout/AdminLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/login/Login";
// import Signup from "./pages/signup/Signup";
// import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
// import HomePage from "./pages/homePage/HomePage";
// import Cards from "./pages/Cards";
// import Boxicons from "./pages/Boxicons.jsx";
// import Table from "./pages/Table";
// import Support from "./pages/Support";
// import Documentation from "./pages/Documentation";
// import Account from "./pages/accountSetting/Account";
// import Notifications from "./pages/accountSetting/Notifications";
// import Connections from "./pages/accountSetting/Connections";
// import Error from "./pages/misc/Error";
// import UnderMaintenance from "./pages/misc/UnderMaintenance";
// import Products from "./pages/product/Products";
// import AddProduct from "./pages/product/AddProduct";
// import Orders from "./pages/orders/Orders";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AdminLayout />}>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact
                path={route.Path}
                element={route.Element}
              >
                {route.children?.map((childRoute, index) => (
                  <Route
                    exact
                    key={index}
                    path={childRoute.Path}
                    element={childRoute.Element}
                  />
                ))}
              </Route>
            ))}
            {/* <Route exact path={routes.CARDS} element={<Cards />} />
            <Route exact path={routes.HOME} element={<HomePage />} />
            <Route exact path={routes.BOXICONS} element={<Boxicons />} />
            <Route exact path={routes.TABLE} element={<Table />} />
            <Route exact path={routes.SUPPORT} element={<Support />} />
            <Route
              exact
              path={routes.DOCUMENTATION}
              element={<Documentation />}
            />
            <Route
              exact
              path={routes.FORGOT_PASSWORD}
              element={<ForgotPassword />}
            />
            <Route exact path={routes.LOGIN} element={<Login />} />
            <Route exact path={routes.SIGNUP} element={<Signup />} />
            <Route exact path={routes.ACCOUNT} element={<Account />} />
            <Route exact path={routes.PRODUCTS} element={<Products />} />
            <Route exact path={routes.ADDPRODUCT} element={<AddProduct />} />
            <Route exact path={routes.ORDERS} element={<Orders />} />
            <Route
              exact
              path={routes.NOTIFICATIONS}
              element={<Notifications />}
            />
            <Route exact path={routes.CONNNECTIONS} element={<Connections />} />
            <Route exact path={routes.ERROR} element={<Error />} />
            <Route
              exact
              path={routes.UNDERMAINTENANCE}
              element={<UnderMaintenance />}
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
