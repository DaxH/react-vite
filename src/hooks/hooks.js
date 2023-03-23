import { useState } from 'react'

const hooks = () => {

	const [counter, setCounter] = useState(0)
	const handleCounter = () => setCounter(counter + 1)

	return {
		counter,
		handleCounter
	}
}

export default hooks