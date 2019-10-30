import React from 'react';

function Search(props) {

	var myValue= ""

	function filterUpdate() {
		const val = myValue.value;
    props.filterUpdate(val)
	}
	return (
		<form>
			<input
				type="text"
				placeholder="Type to Filter" 
				ref={ (value) => myValue = value}
				onChange={filterUpdate.bind(this)}
				/>
		</form>
	);
}
export default Search;
