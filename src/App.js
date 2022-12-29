import './App.css';

// Fonts
import './font/satoshi/Satoshi-Black.otf';
import './font/satoshi/Satoshi-Bold.otf';
import './font/satoshi/Satoshi-Light.otf';
import './font/satoshi/Satoshi-Medium.otf';
import './font/satoshi/Satoshi-Regular.otf';
import './font/satoshi/Satoshi-Variable.ttf';
import 'flowbite'

// STYLES
import './assets/styles/css/navigation.css'
import './assets/styles/css/filterbox.css'
import './assets/styles/css/responsive.css'

import Navbar from "./components/home/navigation.jsx";
import Body1 from './components/home/body.jsx';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Body1/>
    </div>
  );
}


export default App;
