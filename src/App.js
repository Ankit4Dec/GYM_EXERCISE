import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "@mui/icons-material";
import ExerciseDetails from "./pages/ExerciseDetails";

function App() {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise/id:" element={<ExerciseDetails />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
