import React, {useEffect} from 'react'

import AppContext from '../context/app-context'

const AppState = (props) => {
	const [state, dispatch] = React.useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'SHOW_HOME':
					return {
						...prevState,
						isLoading: false,
					}
			}
		},
		{
			isLoading: true,
		},
	)

	const authContext = React.useMemo(() => ({state}), [state])

	useEffect(() => {
		const loadState = async () => {
			//Do something
			dispatch({type: 'SHOW_HOME'})
		}
		setTimeout(loadState, 4000)
	}, [])

	return (
		<AppContext.Provider value={authContext}>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppState
