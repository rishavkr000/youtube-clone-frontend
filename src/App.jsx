import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./redux/store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <>
        <Header />
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
