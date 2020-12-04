import {ActivityIndicator, StyleSheet, View} from 'react-native'

import React from 'react'

const Splash = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color="white" />
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
export default Splash
