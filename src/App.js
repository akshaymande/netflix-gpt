import { Provider } from "react-redux";
import BodyComponant from "./componants/BodyComponant";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <BodyComponant />
    </Provider>
  );
}

export default App;
