import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import Recipes from './components/Recipes'
import View from './components/View'
import Form from './components/Form'
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Recipes />
        <Route exact path="/new">
          <Form />
        </Route>
        <Switch>
          <Route exact path="/edit/:id" children={<Form />}></Route>
          <Route exact path="/recipe/:id" children={<View />}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
