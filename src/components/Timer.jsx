import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
display: flex;
align-items: center;
color: var(--color-text);
-webkit-text-stroke: 1px black;
`


const Timer = ({ setTimerEnded }) => {
	const [count, setCount] = useState(20);


	useEffect(() => {
		if (count > 0) {
			const timer = setTimeout(() => setCount(count - 1), 1000);
			return () => clearTimeout(timer);
		} else {
			setTimerEnded(true);
		}
	}, [count, setTimerEnded]);

	const formattedCount = count < 10 ? `0${count}` : count;


	return (
		<TimerWrapper>0:{count >= 10 ? count : formattedCount}</TimerWrapper>
	);
}

export default Timer;