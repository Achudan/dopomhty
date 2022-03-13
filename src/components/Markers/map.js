import React from "react";
import { Map, GoogleApiWrapper, HeatMap, Marker } from "google-maps-react";

// import "./styles.css";

class MapContainer extends React.Component {
  render() {
    const gradient = [
      "rgba(0, 255, 255, 0)",
      "rgba(0, 255, 255, 1)",
      "rgba(0, 191, 255, 1)",
      "rgba(0, 127, 255, 1)",
      "rgba(0, 63, 255, 1)",
      "rgba(0, 0, 255, 1)",
      "rgba(0, 0, 223, 1)",
      "rgba(0, 0, 191, 1)",
      "rgba(0, 0, 159, 1)",
      "rgba(0, 0, 127, 1)",
      "rgba(63, 0, 91, 1)",
      "rgba(127, 0, 63, 1)",
      "rgba(191, 0, 31, 1)",
      "rgba(255, 0, 0, 1)"
    ];
    return (
      <div className="map-container" style={{'padding': '25px'}}>
        <Map
          google={this.props.google}
          className={"map"}
          zoom={15}
          initialCenter={this.props.center}
          onReady={this.handleMapReady}
          style={{'height':'85%', 'width':'85%'}}
          mapTypeControl= {false}
          streetViewControl = {false}
          zoomControl = {false}
        >
            <Marker position={{ lat: this.props.currentLat, lng: this.props.currentLng}} />
          <HeatMap
            gradient={gradient}
            positions={this.props.data}
            opacity={1}
            radius={20}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDsbB-PcXKdXQF54BSWbceWVBsZ-YwrzYM",
  libraries: ["visualization"]
})(MapContainer);
