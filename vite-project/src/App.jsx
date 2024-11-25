import { Outlet } from "react-router";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {

  return (
    
    <Provider store={appStore}>
        <Header/>
        <Outlet/>
        <Footer/> 
    </Provider>
      
    
  );
}

export default App;

