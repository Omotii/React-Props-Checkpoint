import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './components/Background';
import Heading from './components/Heading';
import PlayerList from './components/PlayerList';
import FooterComponent from './components/Footer';

/* All components are contained in the components folder.
The Background component is created for styling purpose only.
The Heading and Footer Component are created for webpage semantics and styling purpose.
The Navbar component is rendered in the Heading components.

The main components as directed for this checkpoints are the Player.js and PlayerList.js.
The Player components are rendered in the PlayerList Components.
*/

function App() {
  return (
    <div>
       <Background />
      <Heading />
      <PlayerList />
      <FooterComponent />
    </div>
  );
}

export default App;
