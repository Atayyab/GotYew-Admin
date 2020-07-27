import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAejAP45QB8yriT5FUlE67VsVVU1qyruKQ&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `200px` }} />,
        mapElement: <div style={{ height: `100%` }} />
        
    }),
    lifecycle({
        componentWillMount() {
            const refs = {}

            this.setState({
                position: null,
                places: [],
                onSearchBoxMounted: ref => {
                  refs.searchBox = ref;
                },
                onPlacesChanged: () => {
                  const places = refs.searchBox.getPlaces();
                  console.log(refs.searchBox.getPlaces()[0].formatted_address)
                  console.log(refs.searchBox.getPlaces()[0].geometry.location.lat())
                  console.log(refs.searchBox.getPlaces()[0].geometry.location.lng())
                  var long = refs.searchBox.getPlaces()[0].geometry.location.lng();
                  var lat = refs.searchBox.getPlaces()[0].geometry.location.lat()
                  this.props.onChangeLocation({lat : lat, lng : long});
                  // console.log(refs.searchBox.getPlaces()[0])
                  this.props.onSearchLocation(refs.searchBox.getPlaces()[0].name)
                  this.setState({
                    places
                  });
                },
                onMarkerMounted: ref => {
                    refs.marker = ref;
                },

                // onPositionChanged: () => {
                //     const position = refs.marker.getPosition();
                //     console.log(position.lat().toString());
                // },

                onDragEnd: ()=>{
                  const position = refs.marker.getPosition();
                  this.props.onChangeLocation({lat : position.lat(), lng : position.lng()});
                  console.log(refs.marker);
                }
            })
        },
    }),
    withScriptjs,
    withGoogleMap
)((props) =>

    <GoogleMap defaultZoom={14} defaultCenter={props.obj} center={props.obj} >
       <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Search place..."
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`
        }}
      />
    </StandaloneSearchBox>
        {props.isMarkerShown && <Marker position={props.obj} draggable={true} ref={props.onMarkerMounted} onDragEnd={props.onDragEnd} />}
    </GoogleMap>
    )

class Maps extends React.PureComponent {
  constructor(props){
  console.log('props',props);

  super(props);
}
    state = {
        isMarkerShown: false,
    }


    render() {
        return (
            <div>
                <MyMapComponent isMarkerShown={true} obj = {this.props.obj}  onChangeLocation = {(loc) => this.props.onChangeLocation(loc)} onSearchLocation = {(loc) => this.props.onSearchLocation(loc)} />
            </div>
        )
    }
}


export default Maps;
