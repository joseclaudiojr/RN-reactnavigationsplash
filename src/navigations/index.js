import AppContext from '../context/app-context'
import Home from '../pages/home'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import Splash from '../pages/splash'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const RootNavigator = () => {
	const {state} = React.useContext(AppContext)

	if (state.isLoading) {
		return <Splash />
	}

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Home'} headerMode="none">
				<Stack.Screen name={'Home'} component={Home} />
				{/* Other Pages */}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default RootNavigator
