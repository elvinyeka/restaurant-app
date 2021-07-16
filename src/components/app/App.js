import { React } from 'react';
import Background from './food-bg.jpg';
import AppHeader from '../app-header';
import { CartPage, MainPage, ItemPage } from '../pages';
import { Switch, Route } from 'react-router';



function App() {

  return (
    <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
      <AppHeader total={50} />
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/:id' component={ItemPage} />
      </Switch>
    </div>
  );
}

export default App;
