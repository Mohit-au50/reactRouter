import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Login from "./components/Login";
import PostList from "./components/PostList";
import PostDisplay from "./components/PostDisplay";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Content />} />

      <Route path="/posts/list" element={<PostList />} />
      <Route path="/posts/:id" element={<PostDisplay />} />

      <Route path="/login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
