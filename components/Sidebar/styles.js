import styled from 'styled-components';

export const Container = styled.div`
	max-width: 400px;
	width: 100%;
	height: 100vh;
	background: #006e8b;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
	box-sizing: border-box;

	& > div {
		color: white;
		text-align: center;
	}
`;

export const Title = styled.h1`
	color: white;
	font-size: 1.8rem;
	text-align: center;
`;

export const List = styled.ul`width: 100%;`;

export const Item = styled.li`
	width: 100%;
	color: white;
	text-align: center;
	font-size: 1.2rem;
	padding: 1rem 0;
	position: relative;
	&:nth-child(2)::after {
		content: '';
		position: absolute;
		height: 90%;
		width: 10px;
		background: white;
		left: 0;
		top: 0;
	}
`;
