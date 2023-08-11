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
    arrow: faChevronRight,
    icon: faUnlock,
  },
  {
    text: "Misc",
    arrow: faChevronRight,
    icon: faCube,
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
