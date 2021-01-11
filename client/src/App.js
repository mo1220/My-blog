import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import '../src/styles/style.css';
import NavBar from './components/views/NavBar/NavBar';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import EditPage from './components/Posts/EditPage';
import ArticlePage from './components/Posts/ArticlePage';
import Auth from './hoc/auth';
import MyPage from "./components/views/MyPage/MyPage";
import UpdatePost from "./components/Posts/UpdatePost";

function App() {

  return (
    <Router>
      <div>
        <NavBar></NavBar>

        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)}/>
          <Route exact path="/login" component={Auth(LoginPage, false)}/>
          <Route exact path="/register" component={Auth(RegisterPage, false)}/>
          <Route path="/edit" component={Auth(EditPage, true)}/>
          <Route path="/article" component={Auth(ArticlePage, true)}/>
          <Route path="/mypage" component={Auth(MyPage, true)}/>
          <Route path="/update" component={Auth(UpdatePost, true)}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
