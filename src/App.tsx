import { ThemeContextProvider } from "./context/ThemeContextProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/header/NavigationBar.tsx";
import { PageNavigator } from "./PageNavigator.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import { RecoilRoot } from "recoil";
import "./App.css";
import "./index.css";

function App() {
  return (
    <RecoilRoot>
      <ThemeContextProvider>
        <BrowserRouter>
          <NavigationBar />
          <PageNavigator />
          <Footer />
        </BrowserRouter>
      </ThemeContextProvider>
    </RecoilRoot>
  );
}

export default App;
