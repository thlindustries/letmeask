import { Switch, Route } from 'react-router-dom';

// Public pages
import Home from 'pages/Home';

// Private pages
import NewRoom from 'pages/NewRoom';
import Room from 'pages/Room';

// import Route from './Route';

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room/new" component={NewRoom} exact />
        <Route path="/room/:id" component={Room} exact />
      </Switch>
    </>
  );
};

export default Routes;
