import {
  faFile,
  faFolder,
  faFolderBlank,
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
  // faHandDots,
} from "@fortawesome/free-solid-svg-icons";
const sidebarRoutes = [
  {
    text: "Dashboard",
    route: routes.HOME,
    icon: faHouse,
  },
  {
    text: "Layouts",
    arrow: faChevronRight,
    icon: faFolder,
    children: [
      {
        text: "Dashboard",
        route: routes.LOGIN,
        icon: faHouse,
      },
      {
        text: "Dashboard",
        route: routes.SIGNUP,
        icon: faHouse,
      },
      {
        text: "Dashboard",
        route: routes.HOME,
        icon: faHouse,
      },
    ],
  },
  {
    text: "AccountSeting",
    // route: routes.ACCOUNTSETING,
    arrow: faChevronRight,
    icon: faFolderBlank,
    children: [
      {
        text: "Dashboard",
        route: routes.LOGIN,
        icon: faHouse,
      },
      {
        text: "Dashboard",
        route: routes.SIGNUP,
        icon: faHouse,
      },
      {
        text: "Dashboard",
        route: routes.HOME,
        icon: faHouse,
      },
    ],
  },
  {
    text: "Authentications",
    // route: routes.AUTHENTICATIONS,
    arrow: faChevronRight,
    icon: faUnlock,
  },
  {
    text: "Misc",
    // route: routes.MISC,
    arrow: faChevronRight,
    icon: faCube,
  },
  {
    text: "Cards",
    route: routes.CARDS,
    // arrow: faChevronRight,
    icon: faCarSide,
  },
  {
    text: "User Interface",
    // route: routes.USERINTERFACE,
    arrow: faChevronRight,
    icon: faListUl,
  },
  {
    text: "Extended UI",
    // route: routes.EXTENDEDUI,
    arrow: faChevronRight,
    icon: faClone,
  },
  {
    text: "Boxicons",
    route: routes.BOXICONS,
    // arrow: faChevronRight,
    icon: faCrown,
  },
  {
    text: "Form Elements",
    // route: routes.FORMELEMENTS,
    arrow: faChevronRight,
    icon: faTableCells,
  },
  {
    text: "Form Layout",
    // route: routes.FORMLAYOUT,
    arrow: faChevronRight,
    icon: faTableList,
  },
  {
    text: "Table",
    route: routes.TABLE,
    // arrow: faChevronRight,
    icon: faTable,
  },
  {
    text: "Support",
    route: routes.SUPPORT,
    // arrow: faChevronRight,
    icon: faHeadphones,
  },
  {
    text: "Documentation",
    route: routes.DOCUMENTATION,
    // arrow: faChevronRight,
    icon: faFile,
  },
];
export default sidebarRoutes;
