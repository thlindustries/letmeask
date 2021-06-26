import { Switch, Route } from 'react-router-dom';

import { RoomProvider } from 'hooks/room';
// Public pages
import Home from 'pages/Home';

// Private pages
import { NewRoom } from 'pages/NewRoom';
import { Room } from 'pages/Room';
import { AdminRoom } from 'pages/AdminRoom';

// import Route from './Route';

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/room/new" component={NewRoom} exact />
        <RoomProvider>
          <Route path="/room/:id" component={Room} exact />

          <Route path="/admin/rooms/:id" component={AdminRoom} exact />
        </RoomProvider>
      </Switch>
    </>
  );
};

export default Routes;
