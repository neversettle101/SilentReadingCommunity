import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, FormControl, Dropdown } from 'react-bootstrap';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
};

let initialCenter = {
    lat: 21.0000, lng: 78.0000
};

const [mapCenter, setMapCenter] = useState(initialCenter);
const [zoomLevel, setZoomLevel] = useState(5);

  
const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
      .map((item) => (item.name));
      setFilteredResults(results);
      setShowDropdown(true);
    } else {
      setFilteredResults([]);
      setShowDropdown(false);
    }
  };

  const data = [
    {name: 'Pune Reads, Pune', location: {lat: 18.5170408, lng:73.8318331 }},
    {name:'Bandra Reads, Mumbai',location: {lat: 19.0595157, lng:72.7390011 }},
    // {name:'Juhu Reads, Mumbai',},
    {name:'Cubbon Reads, Bangalore',location: {lat:12.977238, lng:77.59486 }},
  //   {name:'Kormangala Reads, Bangalore',},
  //  {name:'Hyderbad Reads, Hyderabad',},
  ];

  const handleSelect = (value) => {
    setSearchTerm(value);
    setShowDropdown(false);

    for (let i = 0; i < data.length; i++) {
      if(data[i].name == value){
        initialCenter = data[i].location
      }
    }
    setMapCenter(initialCenter);
    setZoomLevel(15); // Change zoom level to zoom in
  };

  return (
    <section className="contact" id="findus">
      <Container>
        <Row className="align-items-center">
        <h2>Find Us</h2>
        <section className="search" id="search">
      <Form>
        <FormControl
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </Form>
      {showDropdown && filteredResults.length > 0 && (
        <Dropdown show>
          <Dropdown.Menu className="dropdown-menu-custom">
            {filteredResults.map((result, index) => (
              <Dropdown.Item 
                key={index}
                onClick={() => handleSelect(result)}
              >
                {result}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </section>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <LoadScript
            // googleMapsApiKey="AIzaSyCmjaWduiOPxdkbRCDa281coFNMf-qMzBM"
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={zoomLevel}
                center={mapCenter}
            >
                {data.map((item, index) => (
                    <MarkerF key={index} position={item.location} />
                ))}
            </GoogleMap>
        </LoadScript>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
