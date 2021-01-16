import { useState, useEffect } from 'react'
// ---
export default ({
	alertDescription,
	callback,
	isPrompt = false
}) => {
	const [
		isBackButtonClicked,
		setBackbuttonPress,
	] = useState(false)

	useEffect(() => {
		window.history.pushState(
			null,
			null,
			window.location.pathname
		)
		window.addEventListener('popstate', onBackButtonEvent)

		window.onbeforeunload = function () {
			return alertDescription
		}
		return () => {
			window.removeEventListener(
				'popstate',
				onBackButtonEvent
			)
		}
	}, [])

	const onBackButtonEvent = (e) => {
		e.preventDefault()
		if (!isBackButtonClicked) {
			if (isPrompt) {
				if (window.confirm(alertDescription)) {
					if (callback) {
						callback()
					}
					setBackbuttonPress(true)
				} else {
					window.history.pushState(
						null,
						null,
						window.location.pathname
					)
					setBackbuttonPress(false)
				}
			} else {
				if (callback) {
					callback()
				}
				setBackbuttonPress(true)
			}
		}
	}

	return {
		isBackButtonClicked,
	}
}
