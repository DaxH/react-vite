import React from 'react'
import ContainerDiv from '../../components/container'
import hooks from '../../hooks/hooks'

const Page2 = () => {
	const { counter, handleCounter } = hooks()
	return (
		<>
			<ContainerDiv>
				<div>PAGE 2
					<button onClick={handleCounter}>+1</button>
					<p>Counter :{counter}</p>
				</div>
			</ContainerDiv>
		</>
	)
}

export default Page2