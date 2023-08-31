import routes from "./config/routes";
import AdminLayout from "./components/layout/AdminLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
