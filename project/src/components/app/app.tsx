import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainView from '../view/main';
import LoginView from '../view/login';
import FavoritesView from '../view/favorites';
import PropertyView from '../view/property';
import NotFoundView from '../view/page-not-found';
import {AppRoute, AuthorizationStatus} from '../const/const';
import PrivateRote from '../private-route/private-route';

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.main}>
          <MainView />
        </Route>
        <Route exact path={AppRoute.signIn}>
          <LoginView />
        </Route>
        <PrivateRote
          exact
          path={AppRoute.favorites}
          render={()=> <FavoritesView />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRote>
        <Route exact path={AppRoute.room}>
          <PropertyView />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </BrowserRouter>);
}

export default App;
