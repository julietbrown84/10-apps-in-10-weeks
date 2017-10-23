import React from "react"
import PropTypes from 'prop-types';
import GoogleMapLoader from "react-google-maps-loader"
import GoogleMap from "react-google-map"

const MY_API_KEY = "AIzaSyDwsdjfskhdbfjsdjbfksiTgnoriOAoUOgsUqOs10J0" // fake
 
console.log(MY_API_KEY);

const Map = ({googleMaps}) => (
  <div>
    <GoogleMap
      googleMaps={googleMaps}
      coordinates={[
        {
          title: "Toulouse",
          position: {
            lat: 43.604363,
            lng: 1.443363,
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation
            marker.setAnimation(googleMaps.Animation.BOUNCE)
 
            // Define Marker InfoWindow
            const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div>
                  <h3>Toulouse<h3>
                  <div>
                    Toulouse is the capital city of the southwestern
                    French department of Haute-Garonne,
                    as well as of the Occitanie region.
                  </div>
                </div>
              `,
            })
            console.log('test', infoWindow);
 
            // Open InfoWindow when Marker will be clicked
            googleMaps.event.addListener(marker, "click", () => {
              infoWindow.open(map, marker)
            })
 
            // Change icon when Marker will be hovered
            googleMaps.event.addListener(marker, "mouseover", () => {
              marker.setIcon()
            })
 
            googleMaps.event.addListener(marker, "mouseout", () => {
              marker.setIcon()
            })
 
            // Open InfoWindow directly
            infoWindow.open(map, marker)
          },
        }
      ]}
      center={{lat: 43.604363, lng: 1.443363}}
      zoom={8}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.SATELLITE)
      }}
    />
  </div>
)

console.log('test', Map);
 
Map.propTypes = {
  googleMaps: PropTypes.object.isRequired
}
 
export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MY_API_KEY,
})