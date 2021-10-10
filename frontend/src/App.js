import React from "react";
import './App.css';
import UploadForm from './components/UploadForm';
import Login from './components/login.component'
import AuthPage from './components/authPage';
import ChoicePage from './components/choicePage';
import SignUp from './components/signup.component';
import BulletinBoard from './components/bulletinBoard';
import ResearchersPage from "./components/researchersPage";
export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("token", JSON.stringify(action.payload));
      console.log(action.payload)
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        token: action.payload.token,
       userId: action.payload.user_id,
       is_researcher: action.payload.is_researcher,
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <div className="App">
    {!state.isAuthenticated ? <ChoicePage /> : <BulletinBoard />}
      
      <ResearchersPage />
    
    </div>
     </AuthContext.Provider>
  );
}

export default App;
