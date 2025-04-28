import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import BlogsPage from "./pages/Blogs";
import Home from "./pages/Home";
import Plans from "./pages/PlanPage";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Workouts from "./pages/WorkoutPage";

const App = () => {
  console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    <BrowserRouter>
      <Routes>
        {/* SignIn and SignUp are outside the Wrapper layout */}
        <Route index element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Wrapper contains shared layout for authenticated or main pages */}
        <Route path="/dashboard" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="plans" element={<Plans />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
