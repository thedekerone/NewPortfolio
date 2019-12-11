import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { GlobalStyles } from '../utils/GlobalStyles';
import { Project } from '../components/Project';
import { Home } from '../components/Home';

export default function index() {
	return (
		<div>
			<GlobalStyles />
			<Home />
		</div>
	);
}
