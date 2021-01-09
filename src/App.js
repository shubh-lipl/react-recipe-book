import Navbar from './components/Navbar'
import Recipes from './components/Recipes'
import View from './components/View'
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Recipes />
      <View />
    </div>
  );
}

export default App;
