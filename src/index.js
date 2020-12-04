import AppState from './state/app-state'
import Navigator from './navigations'
import React from 'react'

const App = () => (
	<AppState>
		<Navigator />
	</AppState>
)

export default App
