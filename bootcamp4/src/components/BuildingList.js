import React from 'react';

export default (props) => {

	console.log('BL', props.data)

	const data = props.data

	const buildingList = data
	.filter(directory => {
		return directory.name.toLowerCase().indexOf(props.filterText.toLowerCase()) >= 0
	})
	.map(directory => {
		return (
			<tr 
				key={directory.id}
				onClick={e => props.selectedUpdate(directory.id)}
			>
				<td>{directory.code} </td>
				<td> {directory.name} </td>
			</tr>
		);
	});

	return <div>{buildingList}</div>;
}
