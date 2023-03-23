import React from 'react'
import Button from '../../components/button'
import ContainerDiv from '../../components/container'
import hooks from '../../hooks/hooks'

const PosicionConsolidada = () => {
	const { counter, handleCounter } = hooks()
	const { counter: counter2, handleCounter: handleCounter2 } = hooks()
	return (
		<>
			<ContainerDiv>
				<div>PosicionConsolidada
					<Button title={'+1'} onClick={handleCounter} />
					<p>Counter :{counter}</p>
				</div>
			</ContainerDiv>
		</>
	)
}

export default PosicionConsolidada
