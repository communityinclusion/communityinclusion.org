import React, { useEffect } from "react"
import Layout from "../../components/MapLayout"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
// import "../../components/map.css";
import { Offcanvas } from "bootstrap"


const styles = {
  width: "100%",
  height: '800px',
  margin: '2em 0'
};

const ICIGlobalPage = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWNpLXVtYXNzIiwiYSI6IjU0OTZjZTY1M2I4NWM1ZTMxYTNjNzZmZDYxNjUwODlhIn0.-5DkuMz0Ots5OwiC-sJYVQ';
    
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/ici-umass/cioc5s9ps000atbmf58itrjol',
      center: [15.661557, 15.893748],
      zoom: 2
    });

    const offcanvas = new Offcanvas(document.getElementById('offcanvas'));

    map.on('click', (event) => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['countries'],
      });
      if (features.length > 0) {
        const clickedFeature = features[0];
        updateOffcanvas(clickedFeature);
        offcanvas.show();
      }
    });

    function updateOffcanvas(feature) {
      const sidebar = document.getElementById('projects');
      sidebar.innerHTML = '<h2>' + feature.properties.name + '</h2>' +
        '<p><b>Project Name: </b>' + feature.properties.projectName + '</p>' +
        '<p><b>Project Goals: </b>' + feature.properties.projectGoals + '</p>' +
        '<p><b>Project Activity: </b>' + feature.properties.projectActivity + '</p>' +
        '<p><b>Partners: </b>' + feature.properties.partners + '</p>' +
        '<p><b>Funders: </b>' + feature.properties.funders + '</p>' +
        '<p><b>Website: </b>' + feature.properties.projectLink + '</p>' +
        '<p><b>Project Years: </b>' + feature.properties.projectYears + '</p>';
    }
    
    return () => map.remove();
  }, []);

  return (
    <Layout>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvas" data-bs-backdrop="false" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h1 className="mb-2">ICI Global Projects</h1>
          <div id='projects' className='projects'></div>
        </div>
      </div>
      <div id="map" style={styles} className="map"></div>
    </Layout>
  )
}


export default ICIGlobalPage
