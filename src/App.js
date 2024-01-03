import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import { createBrowserRouter } from "react-router-dom";

function App() {


  return (
     <Provider store={appStore}>
       <Body/>
     </Provider>
  );
}

export default App;
