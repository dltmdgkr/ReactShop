import { ThemeContextProvider } from "./context/ThemeContextProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/header/NavigationBar.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import { RecoilRoot } from "recoil";
import "./App.css";
import "./index.css";
import { useState } from "react";
import { MenuModal } from "./components/modal/MenuModal.tsx";
import { Router } from "./router/router.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeContextProvider>
          <BrowserRouter>
            <MenuModal openModal={openModal} setOpenModal={setOpenModal} />
            <NavigationBar showModal={showModal} />
            <Router />
            <Footer />
          </BrowserRouter>
        </ThemeContextProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
