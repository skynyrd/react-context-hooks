import React, { Component } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from '../contexts/AuthContext';

// The other approach for accessing the context is in BookList.js (more practical)
// Advantage of this => Allows using multiple contexts, supports functional component.

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{themeContext => {
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          const { isAuthenticated, toggleAuth} = authContext;

          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged In' : 'Logged Out'}
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}</ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;