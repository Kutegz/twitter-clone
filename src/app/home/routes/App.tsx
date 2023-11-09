import '../../../styles/App.css';
import Feed from '../../feed/routes/Feed';
import Sidebar from '../../sidebar/routes/Sidebar';
import Widgets from '../../widgets/routes/Widgets';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default App;
