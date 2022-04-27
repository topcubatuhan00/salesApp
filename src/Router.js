import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';

const Router = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="LoginPage" component={Login}
					options={{
						title: "Dükkan",
						headerTitleAlign: 'center',
						headerTitleStyle: { color: 'tomato' },
						headerTintColor: 'tomato',
					}}
				/>
				<Stack.Screen name="Products" component={Products}
					options={{
						title: "Dükkan",
						headerTitleAlign: 'center',
						headerTitleStyle: { color: 'tomato' },
					}}
				/>
				<Stack.Screen name="Details" component={Detail}
					options={{
						title: "Dükkan",
						headerTitleAlign: 'center',
						headerTitleStyle: { color: 'tomato' },
						headerTintColor: 'tomato',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};


export default Router;
