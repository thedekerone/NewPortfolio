import React from 'react';
import { Container, Title, List, Item } from './styles';

export function Sidebar() {
	return (
		<div>
			<Container>
				<Title>MAURICIO FOW</Title>
				<List>
					<Item>Bucciarati Store</Item>
					<Item>Agricola Oskar</Item>
					<Item>Chankillo Farmers</Item>
					<Item>Farmkart</Item>
				</List>
				<div>Copyrights @ChupetinTrujillo</div>
			</Container>
		</div>
	);
}
