'use client';

import { useState } from 'react';
import { getData } from '../api/getData';

const Search = () => {
	const [input, setInput] = useState('Search');

	return (
		<div>
			<h1>Search</h1>
			<input
				type="number"
				placeholder="Search"
				defaultValue={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={() => console.log(getData(input))}>Search</button>
		</div>
	);
};

export default Search;
