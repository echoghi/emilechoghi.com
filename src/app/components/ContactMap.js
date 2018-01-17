import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

class ContactMap extends React.Component {
	state = {
		lat: 37.449308,
		long: -122.162339,
		zoom: 14
	};

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({ width: window.innerWidth });
	};

	renderMarker() {
		let { lat, long, width } = this.state;

		const position = [lat, long];

		if (width < 760) {
			return <Marker position={position} />;
		}
	}

	render() {
		let { lat, long, zoom } = this.state;

		const position = [lat, long];

		return (
			<Map center={position} zoom={zoom} dragging={false}>
				<TileLayer
					attribution="&copy; <a href=&quot;https://openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{this.renderMarker()}
			</Map>
		);
	}
}

export default ContactMap;
