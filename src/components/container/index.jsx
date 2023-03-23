import React from 'react'

const ContainerDiv = ({ children }) => {
	return (
		<div style={{
			border: '1px solid black',
			margin:'20px'
		}}>{children}</div>
	)
}

export default ContainerDiv