import HomePage from "../pages/homePage/HomePage";
import Orders from "../pages/orders/Orders";
import Products from "../pages/product/Products";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import Error from "../pages/misc/Error";
import * as icons from "../assets/images/icons";
const routes = [
  { Path: "/", Element: <HomePage />, text: "Dashboard", icon: icons.faHouse },
  {
    Path: "/products",
    Element: <Products />,
    text: "Products",
    icon: icons.faCube,
  },
  {
    Path: "/orders",
    Element: <Orders />,
    text: "Orders",
    icon: icons.faShoppingCart,
  },
  {
    text: "Authentications",
    icon: icons.faUnlock,
    arrow: icons.faChevronRight,
    children: [
      {
        Path: "/login",
        Element: <Login />,
        text: "Login",
      },
      {
        Path: "/signup",
        Element: <Signup />,
        text: "Register",
      },
      {
        Path: "/forgotpassword",
        Element: <ForgotPassword />,
        text: "Forgot Password",
      },
    ],
  },
  {
    text: "Misc",
    icon: icons.faCube,
    arrow: icons.faChevronRight,
    children: [
      {
        Path: "/error",
        Element: <Error />,
        text: "Error",
      },
      {
        Path: "/undermaintenance",
        text: "Under Maintenance",
      },
    ],
  },
  {
    Path: "/cards",
    text: "Cards",
    icon: icons.faCarSide,
  },
  {
    text: "User Interface",
    icon: icons.faListUl,
    arrow: icons.faChevronRight,
  },
  {
    text: "Extended UI",
    icon: icons.faClone,
    arrow: icons.faChevronRight,
  },
  {
    Path: "/boxicons",
    text: "Boxicons",
    icon: icons.faCrown,
  },
  {
    text: "Form Elements",
    icon: icons.faTableCells,
    arrow: icons.faChevronRight,
  },
  {
    text: "Form Layout",
    icon: icons.faTableList,
    arrow: icons.faChevronRight,
  },
  {
    Path: "/table",
    text: "Table",
    icon: icons.faTable,
  },
  {
    Path: "/support",
    text: "Support",
    icon: icons.faHeadphones,
  },
  {
    Path: "/documentation",
    text: "Documentation",
    icon: icons.faFile,
  },
];

export default routes;
