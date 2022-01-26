import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Recette from "./components/Recette";
import { createStore, combineReducers } from "redux";
import { ingredientReducer } from "./reducers/ingredientReducer";
import { Provider } from "react-redux";
import { stepReducer } from "./reducers/stepReducer";
const allReducers = combineReducers({
  ingredient: ingredientReducer,
  steps: stepReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function App() {
  let height = window.innerHeight - 77 + "px";
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <div style={{ height: height, overflowY: "auto" }}>
          <Routes>
            <Route path="/receipe/search" exact element={<Search />}></Route>
            <Route path="/receipe/new" exact element={<Recette />}></Route>
            <Route exact path="/" element={<Navigate to="/receipe/new" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
