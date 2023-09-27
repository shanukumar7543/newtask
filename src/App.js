import "./App.css";
import Navbar from "./Navbar/Navbar.tsx";
import Footer from "./Footer/Footer.tsx";
import Main from "./MainPage/Main.tsx";

function App() {
  return (
    <>
  
    <div className="bg-black flex flex-col text-white h-screen">
    <Navbar />
    <div className="w-full flex grow justify-center items-center">

      <Main />
    </div>
      <Footer />
    </div>
    
     </>
  );
}

export default App;
