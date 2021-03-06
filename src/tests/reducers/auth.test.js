import authReducer from '../../reducers/auth';

test( 'Should set uid for log in', () => {
	const action = {
		type: 'LOGIN',
		uid: 'abc123'
	};
	const state = authReducer( {}, action );
	expect( state.uid ).toBe( action.uid );
});

test( 'Should care uid for log out', () => {
	const action = {
		type: 'LOGOUT'
	};
	const state = authReducer( {uid: 'anything'}, action );
	expect( state ).toEqual( {} );
});