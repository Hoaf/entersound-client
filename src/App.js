import Dashboard from './Layout/Dashboard';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';

function App() {
  const theme = createMuiTheme({
    palette: createPalette({
      primary: {
        light: '#6b9978',
        main: '#4bc970',
        dark: '#37b16c',
        contrastText: '#ffffff',
      },
      error: {
        main: '#ed4337',
        contrastText: '#ffffff',
      }
    })
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route path="/"><Login /></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
