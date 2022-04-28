import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux';

const Router = () => {

	const userSession = useSelector(s => s.user);
	const isAuthLoading = useSelector(s => s.isAuthLoading);

	const dispatch = useDispatch();
	const userName = useSelector(s => s.user)
	return (
		<NavigationContainer>

			{isAuthLoading ?
				<Loading /> :
				!userSession ? (
					<Stack.Navigator>
						<Stack.Screen name="LoginPage" component={Login}
							options={{
								title: "Dükkan",
								headerTitleAlign: 'center',
								headerTitleStyle: { color: 'tomato' },
								headerTintColor: 'tomato',
							}}
						/>

					</Stack.Navigator>
				) : (
					<Stack.Navigator>
						<Stack.Screen name="Products" component={Products}
							options={{
								title: "Dükkan",
								headerTitleAlign: 'center',
								headerTitleStyle: { color: 'tomato' },
								headerRight: () => <Icon name="logout" color="tomato" size={24} onPress={() => dispatch({ type: 'SET_USER', payload: { user: null } })} />,
								headerLeft: () => (
									<View style={{flexDirection: 'row', alignItems: 'center'}}>
										<Icon name="account" color="tomato" size={24} />
										<Text style={{ fontWeight: 'bold', color: 'tomato' }}>{userName.username}</Text>
									</View>
								),
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
				)}
		</NavigationContainer>
	);
};


export default Router;
