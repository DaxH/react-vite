import React from 'react'

const Button = ({ title, onClick, bgColor }) => {
	return (
		<button onClick={onClick} style={{ background: bgColor }}>
			{title}
		</button>
	)
}

export default Button