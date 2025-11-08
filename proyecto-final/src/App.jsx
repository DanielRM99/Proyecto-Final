import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <h1>app</h1>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
