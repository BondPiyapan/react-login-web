import './App.css';
import Signin from './Signin';
import Profile from './Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Signin />
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Profile />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
