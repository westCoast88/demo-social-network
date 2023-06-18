import store from './redux/redux-store';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initialazeApp } from './redux/app-reducer';
import { useParams } from "react-router-dom";
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const DialogsContainer = React.lazy(() => import(`./components/Dialogs/DialogsContainer`));
const ProfileContainer = React.lazy(() => import(`./components/Profile/ProfileContainer`));

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.initialazeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <React.Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
              <Route path='/news' element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initialazeApp }))(App)

const MainApp = (props) => {
  // return <HashRouter basename={process.env.PUBLIC_URL}></HashRouter>
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default MainApp