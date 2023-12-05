import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import './App.css';


function App() {

  

  const position = [55.86251, -4.25535] //Latitude is 55.86251, longitude is -4.25535.

  const granary = [55.83031, -4.28175]
  const curlers = [55.87553, -4.29335]
  const ark = [55.86226, -4.24845]
  const james = [55.82883, -4.28253]
  const gaucho = [55.86096, -4.2556]
  const westgreen = [55.85096, -4.23377]

  return (
    <div className="App">
      
      <div id="navigation">
        <h1>Hair o' the Dug</h1>
        <h3><em>Dog-friendly pubs in Glasgow!</em></h3>
      </div>

      
      <div id="mapcontainer">
        <MapContainer center={position} zoom={10} scrollWheelZoom={true} id="map">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={granary}>
            <Popup>
              <a><strong>Granary Glasgow</strong></a> <br /> A standard selection of beer, wines & spirits is served with classic pub grub at this bar venue.
            </Popup>
          </Marker>
          <Marker position={curlers}>
            <Popup>
              <a><strong>Curlers Rest</strong></a> <br /> Vibrant yet laid-back pub with old-meets-new decor featuring exposed brickwork and an open fire.
            </Popup>
          </Marker>
          <Marker position={ark}>
            <Popup>
              <a><strong>The Ark Glasgow</strong></a> <br /> Contemporary city centre pub over 2 floors with a large TV screen, pool table and large beer garden.
            </Popup>
          </Marker>
          <Marker position={james}>
            <Popup>
              <a><strong>James Tassie</strong></a> <br /> James likes dugs.
            </Popup>
          </Marker>
          <Marker position={gaucho}>
            <Popup>
              <a><strong>Gaucho</strong></a> <br /> Designer furnishings & cowhide fabrics create a lavish backdrop for Argentine food & wine.
            </Popup>
          </Marker>
          <Marker position={westgreen}>
            <Popup>
              <a><strong>WEST on the Green</strong></a> <br /> Brewpub in imposing building, for artisan lagers, wheat beers and traditional German cuisine.
            </Popup>
          </Marker>
          
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
