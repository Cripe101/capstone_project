import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import MissionVision from "./pages/home-page/MissionVision";
import History from "./components/informationHub/History";
import College from "./components/courseOffered/College";
import SeniorHigh from "./components/courseOffered/SeniorHigh";
import CollegeCourseInfo from "./components/courseOffered/CollegeCourseInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/mission-vision",
        element: <MissionVision />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/course-offered-college",
        element: <College />,
      },
      {
        path: "/course-offered-seniorhigh",
        element: <SeniorHigh />,
      },
      {
        path: "/course-offered-college-info/:id",
        element: <CollegeCourseInfo />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
