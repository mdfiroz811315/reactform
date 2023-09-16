// ./client/src/App.js
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;