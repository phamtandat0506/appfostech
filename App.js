import Narbar from "./components/Screens/Narbar";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Stacks from "./components/Screens/Stacks";

export default function App() {
  return (
    <Provider store={store}>
      <Stacks />
      {/* <Narbar /> */}
    </Provider>
  );
}
