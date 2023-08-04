import UserDetails from './components/UserDetails';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <UserDetails />
      </Provider>
    </>
  );
};
export default App;
