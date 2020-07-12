/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigation from './src/navigation/StackNavigation';
import authenNavigation from './src/navigation/authenNavigation';
AppRegistry.registerComponent(appName, () => StackNavigation);
