//Script for green roof webmap; developed by Mike Treglia (michael.treglia@tnc.org)

  var grData = $.ajax({
	 url:"https://raw.githubusercontent.com/tnc-ny-science/NYC_GreenRoofMapping/master/greenroof_gisdata/CurrentDatasets/GreenRoofData2016_20180917.geojson",
     dataType: "json",
     success: console.log("Green Roof data successfully loaded."),
     error: function(xhr) {
         alert(xhr.statusText)
     }
 })
 $.when(grData).done(function() {
     var map = L.map('map',{
	center: [40.703312, -73.97968],
	zoom: 11//,
	//layers: [baseLayer, labelLayer]}
	/* The id of the DOM element that will contain the map */})


var imagery2016 = L.tileLayer('	https://maps.nyc.gov/xyz/1.0.0/photo/2016/{z}/{x}/{y}.png8', {
  attribution: 'Tiles by <a href="https://maps.nyc.gov/tiles/">The City of New York</a>',
  minNativeZoom: 8,
  maxNativeZoom: 18,
  subdomains: '1234',
  bounds: L.latLngBounds([39.3682, -75.9374], [42.0329, -71.7187])
});

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 18
});

var baseMaps = {
	"Black and White": CartoDB_DarkMatter,
	"NYC Imagery (2016)": imagery2016,

};


 // load GeoJSON from an external file

var dataUrl = 'https://raw.githubusercontent.com/tnc-ny-science/NYC_GreenRoofMapping/master/greenroof_gisdata/CurrentDatasets/GreenRoofData2016_20180917.geojson'; 
var getResp = (response) => response.json();

var grLayer = L.geoJSON(grData.responseJSON, 
	{onEachFeature: popupFn,
	color: '#21ff00',
	fillOpacity: 0.5}).addTo(map);

function popupFn(feature, layer){
    if (feature.properties.address) {
        layer.bindPopup("<strong>Address:</strong>&nbsp;&nbsp;"+feature.properties.address + '<br/>'+
			"<strong>Borough:</strong>&nbsp;&nbsp;"+feature.properties.borough);
    }
}

console.log(grLayer);	
	
map.addLayer(CartoDB_DarkMatter);

var overlayMaps = {
    "Green Roofs": grLayer
	//,	"NYC Boundary": nycLayer

};

L.control.layers(baseMaps, overlayMaps,{collapsed: false}).addTo(map);


var htmlLegend1and2 = L.control.htmllegend({
        position: 'bottomright',
        legends: [{
            //name: 'Green Roofs',
            layer: grLayer,
            elements: [{
                label: 'Green Roofs',
                html: '',
                style: {
                    'background-color': '#21ff00',
                    'width': '10px',
                    'height': '10px'
                }
            }]
        }],
        collapseSimple: true,
        detectStretched: true,
        collapsedOnInit: true,
        defaultOpacity: 0.7,
        visibleIcon: 'icon icon-eye',
        hiddenIcon: 'icon icon-eye-slash'
    })

 map.attributionControl.addAttribution('Map developed by <a href="https://www.nature.org">The Nature Conservancy</a>',{position:'topright'});
});