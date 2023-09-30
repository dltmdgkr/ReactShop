import { ThemeContextProvider } from "../ThemeContextProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { PageNavigator } from "./PageNavigator.tsx";
import "./App.css";
import "./index.css";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <PageNavigator />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
