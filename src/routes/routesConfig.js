import HomePage from "../Containers/HomePage";
import PeoplePage from "../Containers/PeoplePage";
import NotFoundPage from "../Containers/NotFoundPage/NotFoundPage";
import PersonPage from "../Containers/PersonPage/PersonPage";
import FavouritesPage from "../Containers/favourites/FavouritesPage";
import SearchPage from "../Containers/SearchPage/SearchPage";
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";
const routesConfig = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/fail",
    exact: true,
    component: ErrorMessage,
  },
  {
    path: "/people",
    exact: true,
    component: PeoplePage,
  },
  {
    path: "/people/:id",
    exact: true,
    component: PersonPage,
  },
  {
    path: "/not-found",
    exact: true,
    component: NotFoundPage,
  },
  {
    path: "/favourites",
    exact: true,
    component: FavouritesPage,
  },

  {
    path: "/search",
    exact: true,
    component: SearchPage,
  },
  {
    path: "*", //любой путь
    exact: false, //неполное совпадение
    component: NotFoundPage,
  },
];

export default routesConfig;
