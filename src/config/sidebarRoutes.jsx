import {
  faFile,
  faFolderBlank,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import routes from "./routes";
import {
  faCarSide,
  faChevronRight,
  faCube,
  faHouse,
  faUnlock,
  faClone,
  faListUl,
  faCrown,
  faTableCells,
  faTableList,
  faTable,
  faHeadphones,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
const sidebarRoutes = [
  {
    text: "Dashboard",
    route: routes.HOME,
    icon: faHouse,
  },
  {
    text: "Products",
    route: routes.PRODUCTS,
    icon: faIdCard,
  },
  {
    text: "Orders",
    route: routes.ORDERS,
    icon: faSquare,
  },
  {
    text: "AccountSeting",
    arrow: faChevronRight,
    icon: faFolderBlank,
    children: [
      {
        text: "Account",
        route: routes.ACCOUNT,
      },
      {
        text: "Notifications",
        route: routes.NOTIFICATIONS,
      },
      {
        text: "Connections",
        route: routes.CONNNECTIONS,
      },
    ],
  },
  {
    text: "Authentications",
    arrow: faChevronRight,
    icon: faUnlock,
    children: [
      {
        text: "Login",
        route: routes.LOGIN,
      },
      {
        text: "Register",
        route: routes.SIGNUP,
      },
      {
        text: "Forgot Password",
        route: routes.FORGOT_PASSWORD,
      },
    ],
  },
  {
    text: "Misc",
    arrow: faChevronRight,
    icon: faCube,
    children: [
      {
        text: "Error",
        route: routes.ERROR,
      },
      {
        text: "Under Maintenance",
        route: routes.UNDERMAINTENANCE,
      },
    ],
  },
  {
    text: "Cards",
    route: routes.CARDS,
    icon: faCarSide,
  },
  {
    text: "User Interface",
    arrow: faChevronRight,
    icon: faListUl,
  },
  {
    text: "Extended UI",
    arrow: faChevronRight,
    icon: faClone,
  },
  {
    text: "Boxicons",
    route: routes.BOXICONS,
    icon: faCrown,
  },
  {
    text: "Form Elements",
    arrow: faChevronRight,
    icon: faTableCells,
  },
  {
    text: "Form Layout",
    arrow: faChevronRight,
    icon: faTableList,
  },
  {
    text: "Table",
    route: routes.TABLE,
    icon: faTable,
  },
  {
    text: "Support",
    route: routes.SUPPORT,
    icon: faHeadphones,
  },
  {
    text: "Documentation",
    route: routes.DOCUMENTATION,
    icon: faFile,
  },
];
export default sidebarRoutes;
