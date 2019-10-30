import React from 'react';

function ViewBuilding(props) {
	console.log(props.selectedBuilding)

	const buildingInfo = props.selectedBuilding !== 0 ? props.data
		.filter(building => {
			return building.id === props.selectedBuilding
		})[0] : props.data

	const building = 
	<div>
		<h>
			{buildingInfo.code}
		</h>
		<p>
			{buildingInfo.name}
		</p>
		<p>
			{buildingInfo.address}
		</p>
	</div>


	return props.selectedBuilding !== 0 ? building : (
		<div>
			<p>
				{' '}
				<i>Click on a name to view more information</i>
			</p>
		</div>
	);
}
export default ViewBuilding;
