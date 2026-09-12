import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Header />

      <main>
        {}
        <Outlet /> 
      </main>

      <Footer />
    </>
  );
};

export default App;