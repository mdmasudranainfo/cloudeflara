import { Children } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/MainRoute";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>{Children}</RouterProvider>
    </div>
  );
}

export default App;
