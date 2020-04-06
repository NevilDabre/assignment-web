import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch as RouterSwitch,
} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import LearningPageLayout from './components/LearningPage/LearningPageLayout';
import './styles.css';
import {
  MuiThemeProvider,
  createMuiTheme,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

const themeObject = {
  palette: {
    primary: { main: '#ff0000' },
    secondary: { main: '#00FF00' },
    type: 'light',
  },
};

const useDarkTheme = () => {
  const [theme, setTheme] = useState(themeObject);
  const {
    palette: { type },
  } = theme;

  const toggleDarkTheme = () => {
    const newTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      },
    };

    setTheme(newTheme);
  };
  return [theme, toggleDarkTheme];
};

export default function App() {
  const [theme, toggleDarkTheme] = useDarkTheme();

  const themeConfig = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={themeConfig}>
      <ThemeProvider theme={themeConfig}>
        <div className="App">
          <Router>
            <RouterSwitch>
              <Route exact path="/">
                <LandingPage toggleDarkTheme={toggleDarkTheme} />
              </Route>
              <Route path="/contact" />
              <Route path="/learningpage">
                <LearningPageLayout toggleDarkTheme={toggleDarkTheme} />
              </Route>
            </RouterSwitch>
          </Router>
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
