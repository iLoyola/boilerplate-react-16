import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import LoadingPage from './pages/LoadingPage';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

const state = store.getState();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;

const renderApp = () => {
	if( !hasRendered ) {
		ReactDOM.render( jsx, document.getElementById( "app" ) );
		hasRendered = true;
	}
};

ReactDOM.render( <LoadingPage />, document.getElementById( "app" ) );

{/* Bootstrapping the application across multiple files */}

firebase.auth().onAuthStateChanged( ( user ) => {
	if( user ) {
		store.dispatch( login( user.uid ) );
		renderApp();
		if( history.location.pathname === '/' ) {
			history.push( '/dashboard' );
		}
	} else {
		store.dispatch( logout() );
		renderApp();
		history.push( '/' );
	}
});
