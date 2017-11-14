import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

class ContactMap extends React.Component {
	state = {
  		lat: 37.449308,
  		long: -122.162339,
  		zoom: 16
	};

	render() {
		let { lat, long, zoom } = this.state;

		const position = [lat, long];

		return (
			<Map center={position} zoom={zoom}>
				<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
				/>
				<Marker position={position} />
			</Map>
		);
	}

};

export default ContactMap;