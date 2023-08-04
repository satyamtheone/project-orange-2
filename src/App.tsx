import { BrowserRouter } from "react-router-dom";
import DialogProvider from "./Dialog/DialogProvider";
import { renderRoutes } from "../routes";

function App() {
  return (
    <BrowserRouter>
      <DialogProvider>
        <>{renderRoutes()}</>
      </DialogProvider>
    </BrowserRouter>
  );
}

export default App;
