var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_VegCoverwithin200mofPoints2017_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Veg Cover within 200m of Points (2017)<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2017_1_0.png" /> 0<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2017_1_1.png" /> 20<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2017_1_2.png" /> 31.9<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2017_1_3.png" /> 32<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2017_1_4.png" /> 40<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2017_1_5.png" /> 60<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2017_1_6.png" /> 80<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2017_1_7.png" /> 100<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/VegCoverwithin200mofPoints2017_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8266258.987137, 4938273.541155, -8204152.128723, 4999877.916151]
        })
    });
var lyr_VegCoverwithin200mofPoints2021_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Veg Cover within 200m of Points (2021)<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2021_2_0.png" /> 0<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2021_2_1.png" /> 20<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2021_2_2.png" /> 31.9<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2021_2_3.png" /> 32<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2021_2_4.png" /> 40<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2021_2_5.png" /> 60<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2021_2_6.png" /> 80<br />\
    <img src="styles/legend/VegCoverwithin200mofPoints2021_2_7.png" /> 100<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/VegCoverwithin200mofPoints2021_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8266258.987137, 4938273.541155, -8204152.128723, 4999877.916151]
        })
    });
var lyr_NetChangeinVegCoverwithin200mofPoints20172021_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Net Change in Veg Cover within 200m of Points (2017-2021)<br />\
    <img src="styles/legend/NetChangeinVegCoverwithin200mofPoints20172021_3_0.png" /> -0.6328<br />\
    <img src="styles/legend/NetChangeinVegCoverwithin200mofPoints20172021_3_1.png" /> -0.3509<br />\
    <img src="styles/legend/NetChangeinVegCoverwithin200mofPoints20172021_3_2.png" /> -0.0691<br />\
    <img src="styles/legend/NetChangeinVegCoverwithin200mofPoints20172021_3_3.png" /> 0.2128<br />\
    <img src="styles/legend/NetChangeinVegCoverwithin200mofPoints20172021_3_4.png" /> 0.4946<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NetChangeinVegCoverwithin200mofPoints20172021_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8266258.987137, 4938273.541155, -8204152.128723, 4999877.916151]
        })
    });
var format_ProportionofPointswithatleast32VegCoverin200mradius2017_4 = new ol.format.GeoJSON();
var features_ProportionofPointswithatleast32VegCoverin200mradius2017_4 = format_ProportionofPointswithatleast32VegCoverin200mradius2017_4.readFeatures(json_ProportionofPointswithatleast32VegCoverin200mradius2017_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProportionofPointswithatleast32VegCoverin200mradius2017_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProportionofPointswithatleast32VegCoverin200mradius2017_4.addFeatures(features_ProportionofPointswithatleast32VegCoverin200mradius2017_4);
var lyr_ProportionofPointswithatleast32VegCoverin200mradius2017_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProportionofPointswithatleast32VegCoverin200mradius2017_4, 
                style: style_ProportionofPointswithatleast32VegCoverin200mradius2017_4,
                popuplayertitle: 'Proportion of Points with at least 32% Veg Cover in 200m radius (2017)',
                interactive: true,
    title: 'Proportion of Points with at least 32% Veg Cover in 200m radius (2017)<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2017_4_0.png" /> 0 - 0.15<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2017_4_1.png" /> 0.15 - 0.31<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2017_4_2.png" /> 0.31 - 0.46<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2017_4_3.png" /> 0.46 - 0.62<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2017_4_4.png" /> 0.62 - 0.77<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2017_4_5.png" /> 0.77 - 1<br />' });
var format_ProportionofPointswithatleast32VegCoverin200mradius2021_5 = new ol.format.GeoJSON();
var features_ProportionofPointswithatleast32VegCoverin200mradius2021_5 = format_ProportionofPointswithatleast32VegCoverin200mradius2021_5.readFeatures(json_ProportionofPointswithatleast32VegCoverin200mradius2021_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProportionofPointswithatleast32VegCoverin200mradius2021_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProportionofPointswithatleast32VegCoverin200mradius2021_5.addFeatures(features_ProportionofPointswithatleast32VegCoverin200mradius2021_5);
var lyr_ProportionofPointswithatleast32VegCoverin200mradius2021_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProportionofPointswithatleast32VegCoverin200mradius2021_5, 
                style: style_ProportionofPointswithatleast32VegCoverin200mradius2021_5,
                popuplayertitle: 'Proportion of Points with at least 32% Veg Cover in 200m radius (2021)',
                interactive: true,
    title: 'Proportion of Points with at least 32% Veg Cover in 200m radius (2021)<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2021_5_0.png" /> 0 - 0.15<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2021_5_1.png" /> 0.15 - 0.31<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2021_5_2.png" /> 0.31 - 0.46<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2021_5_3.png" /> 0.46 - 0.62<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2021_5_4.png" /> 0.62 - 0.77<br />\
    <img src="styles/legend/ProportionofPointswithatleast32VegCoverin200mradius2021_5_5.png" /> 0.77 - 1<br />' });
var format_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6 = new ol.format.GeoJSON();
var features_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6 = format_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6.readFeatures(json_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6.addFeatures(features_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6);
var lyr_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6, 
                style: style_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6,
                popuplayertitle: 'Change in Proportion of Points with at least 32% Veg Cover in 200m radius (2017-2021)',
                interactive: true,
    title: 'Change in Proportion of Points with at least 32% Veg Cover in 200m radius (2017-2021)<br />\
    <img src="styles/legend/ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6_0.png" /> -0.137 - -0.091<br />\
    <img src="styles/legend/ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6_1.png" /> -0.091 - -0.046<br />\
    <img src="styles/legend/ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6_2.png" /> -0.046 - 0<br />\
    <img src="styles/legend/ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6_3.png" /> 0 - 0.046<br />\
    <img src="styles/legend/ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6_4.png" /> 0.046 - 0.091<br />\
    <img src="styles/legend/ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6_5.png" /> 0.091 - 0.33<br />' });
var format_MedianVegCoverwtihin200mofPoints2017_7 = new ol.format.GeoJSON();
var features_MedianVegCoverwtihin200mofPoints2017_7 = format_MedianVegCoverwtihin200mofPoints2017_7.readFeatures(json_MedianVegCoverwtihin200mofPoints2017_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MedianVegCoverwtihin200mofPoints2017_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MedianVegCoverwtihin200mofPoints2017_7.addFeatures(features_MedianVegCoverwtihin200mofPoints2017_7);
var lyr_MedianVegCoverwtihin200mofPoints2017_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MedianVegCoverwtihin200mofPoints2017_7, 
                style: style_MedianVegCoverwtihin200mofPoints2017_7,
                popuplayertitle: 'Median Veg Cover wtihin 200m of Points (2017)',
                interactive: true,
    title: 'Median Veg Cover wtihin 200m of Points (2017)<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2017_7_0.png" /> 0.02 - 0.18<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2017_7_1.png" /> 0.18 - 0.32<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2017_7_2.png" /> 0.32 - 0.46<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2017_7_3.png" /> 0.46 - 0.61<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2017_7_4.png" /> 0.61 - 0.75<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2017_7_5.png" /> 0.75 - 0.89<br />' });
var format_MedianVegCoverwtihin200mofPoints2021_8 = new ol.format.GeoJSON();
var features_MedianVegCoverwtihin200mofPoints2021_8 = format_MedianVegCoverwtihin200mofPoints2021_8.readFeatures(json_MedianVegCoverwtihin200mofPoints2021_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MedianVegCoverwtihin200mofPoints2021_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MedianVegCoverwtihin200mofPoints2021_8.addFeatures(features_MedianVegCoverwtihin200mofPoints2021_8);
var lyr_MedianVegCoverwtihin200mofPoints2021_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MedianVegCoverwtihin200mofPoints2021_8, 
                style: style_MedianVegCoverwtihin200mofPoints2021_8,
                popuplayertitle: 'Median Veg Cover wtihin 200m of Points (2021)',
                interactive: true,
    title: 'Median Veg Cover wtihin 200m of Points (2021)<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2021_8_0.png" /> 0.02 - 0.18<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2021_8_1.png" /> 0.18 - 0.32<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2021_8_2.png" /> 0.32 - 0.46<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2021_8_3.png" /> 0.46 - 0.61<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2021_8_4.png" /> 0.61 - 0.75<br />\
    <img src="styles/legend/MedianVegCoverwtihin200mofPoints2021_8_5.png" /> 0.75 - 0.89<br />' });
var format_MedianChangeinVegCoverwithin200mofPoints20172021_9 = new ol.format.GeoJSON();
var features_MedianChangeinVegCoverwithin200mofPoints20172021_9 = format_MedianChangeinVegCoverwithin200mofPoints20172021_9.readFeatures(json_MedianChangeinVegCoverwithin200mofPoints20172021_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MedianChangeinVegCoverwithin200mofPoints20172021_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MedianChangeinVegCoverwithin200mofPoints20172021_9.addFeatures(features_MedianChangeinVegCoverwithin200mofPoints20172021_9);
var lyr_MedianChangeinVegCoverwithin200mofPoints20172021_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MedianChangeinVegCoverwithin200mofPoints20172021_9, 
                style: style_MedianChangeinVegCoverwithin200mofPoints20172021_9,
                popuplayertitle: 'Median Change in Veg Cover within 200m of Points (2017-2021)',
                interactive: true,
    title: 'Median Change in Veg Cover within 200m of Points (2017-2021)<br />\
    <img src="styles/legend/MedianChangeinVegCoverwithin200mofPoints20172021_9_0.png" /> -0.031 - -0.021<br />\
    <img src="styles/legend/MedianChangeinVegCoverwithin200mofPoints20172021_9_1.png" /> -0.021 - -0.01<br />\
    <img src="styles/legend/MedianChangeinVegCoverwithin200mofPoints20172021_9_2.png" /> -0.01 - 0<br />\
    <img src="styles/legend/MedianChangeinVegCoverwithin200mofPoints20172021_9_3.png" /> 0 - 0.01<br />\
    <img src="styles/legend/MedianChangeinVegCoverwithin200mofPoints20172021_9_4.png" /> 0.01 - 0.021<br />\
    <img src="styles/legend/MedianChangeinVegCoverwithin200mofPoints20172021_9_5.png" /> 0.021 - 0.088<br />' });
var format_NTABoundaries_10 = new ol.format.GeoJSON();
var features_NTABoundaries_10 = format_NTABoundaries_10.readFeatures(json_NTABoundaries_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NTABoundaries_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NTABoundaries_10.addFeatures(features_NTABoundaries_10);
var lyr_NTABoundaries_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NTABoundaries_10, 
                style: style_NTABoundaries_10,
                popuplayertitle: 'NTA Boundaries',
                interactive: true,
                title: '<img src="styles/legend/NTABoundaries_10.png" /> NTA Boundaries'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_VegCoverwithin200mofPoints2017_1.setVisible(false);lyr_VegCoverwithin200mofPoints2021_2.setVisible(false);lyr_NetChangeinVegCoverwithin200mofPoints20172021_3.setVisible(false);lyr_ProportionofPointswithatleast32VegCoverin200mradius2017_4.setVisible(false);lyr_ProportionofPointswithatleast32VegCoverin200mradius2021_5.setVisible(false);lyr_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6.setVisible(false);lyr_MedianVegCoverwtihin200mofPoints2017_7.setVisible(false);lyr_MedianVegCoverwtihin200mofPoints2021_8.setVisible(false);lyr_MedianChangeinVegCoverwithin200mofPoints20172021_9.setVisible(true);lyr_NTABoundaries_10.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_VegCoverwithin200mofPoints2017_1,lyr_VegCoverwithin200mofPoints2021_2,lyr_NetChangeinVegCoverwithin200mofPoints20172021_3,lyr_ProportionofPointswithatleast32VegCoverin200mradius2017_4,lyr_ProportionofPointswithatleast32VegCoverin200mradius2021_5,lyr_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6,lyr_MedianVegCoverwtihin200mofPoints2017_7,lyr_MedianVegCoverwtihin200mofPoints2021_8,lyr_MedianChangeinVegCoverwithin200mofPoints20172021_9,lyr_NTABoundaries_10];
lyr_ProportionofPointswithatleast32VegCoverin200mradius2017_4.set('fieldAliases', {'ntacode2020': 'ntacode2020', 'ntaname2020': 'ntaname2020', 'total_pts': 'total_pts', 'min_prop_veg_200m_2017': 'min_prop_veg_200m_2017', 'max_prop_veg_200m_2017': 'max_prop_veg_200m_2017', 'avg_prop_veg_200m_2017': 'avg_prop_veg_200m_2017', 'median_prop_veg_200m_2017': 'median_prop_veg_200m_2017', 'min_prop_veg_200m_2021': 'min_prop_veg_200m_2021', 'max_prop_veg_200m_2021': 'max_prop_veg_200m_2021', 'avg_prop_veg_200m_2021': 'avg_prop_veg_200m_2021', 'median_prop_veg_200m_2021': 'median_prop_veg_200m_2021', 'min_netchng_prop_veg_200m_2017_2021': 'min_netchng_prop_veg_200m_2017_2021', 'max_netchng_prop_veg_200m_2017_2021': 'max_netchng_prop_veg_200m_2017_2021', 'avg_netchng_prop_veg_200m_2017_2021': 'avg_netchng_prop_veg_200m_2017_2021', 'median_netchng_propveg_200m_20172021': 'median_netchng_propveg_200m_20172021', 'prop_pts_200m_gte32pctveg_2017': 'Proportoin of Points with at least 32% Veg Cover within 200m radius (2017)', 'prop_pts_200m_gte32pctveg_2021': 'prop_pts_200m_gte32pctveg_2021', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'netchng_prop_pts_200m_gte32pctveg_2017_2021', 'nta_prop_grass_shrub_2017': 'nta_prop_grass_shrub_2017', 'nta_prop_canopy_2017': 'nta_prop_canopy_2017', 'nta_prop_grass_shrub_2021': 'nta_prop_grass_shrub_2021', 'nta_prop_canopy_2021': 'nta_prop_canopy_2021', 'nta_prop_veg_2021': 'nta_prop_veg_2021', 'nta_netchng_prop_grass_shrub_20172021': 'nta_netchng_prop_grass_shrub_20172021', 'nta_netchng_prop_canopy_20172021': 'nta_netchng_prop_canopy_20172021', 'nta_netchng_prop_veg_20172021': 'nta_netchng_prop_veg_20172021', });
lyr_ProportionofPointswithatleast32VegCoverin200mradius2021_5.set('fieldAliases', {'ntacode2020': 'ntacode2020', 'ntaname2020': 'ntaname2020', 'total_pts': 'total_pts', 'min_prop_veg_200m_2017': 'min_prop_veg_200m_2017', 'max_prop_veg_200m_2017': 'max_prop_veg_200m_2017', 'avg_prop_veg_200m_2017': 'avg_prop_veg_200m_2017', 'median_prop_veg_200m_2017': 'median_prop_veg_200m_2017', 'min_prop_veg_200m_2021': 'min_prop_veg_200m_2021', 'max_prop_veg_200m_2021': 'max_prop_veg_200m_2021', 'avg_prop_veg_200m_2021': 'avg_prop_veg_200m_2021', 'median_prop_veg_200m_2021': 'median_prop_veg_200m_2021', 'min_netchng_prop_veg_200m_2017_2021': 'min_netchng_prop_veg_200m_2017_2021', 'max_netchng_prop_veg_200m_2017_2021': 'max_netchng_prop_veg_200m_2017_2021', 'avg_netchng_prop_veg_200m_2017_2021': 'avg_netchng_prop_veg_200m_2017_2021', 'median_netchng_propveg_200m_20172021': 'median_netchng_propveg_200m_20172021', 'prop_pts_200m_gte32pctveg_2017': 'prop_pts_200m_gte32pctveg_2017', 'prop_pts_200m_gte32pctveg_2021': 'Proportoin of Points with at least 32% Veg Cover within 200m radius (2021)', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'netchng_prop_pts_200m_gte32pctveg_2017_2021', 'nta_prop_grass_shrub_2017': 'nta_prop_grass_shrub_2017', 'nta_prop_canopy_2017': 'nta_prop_canopy_2017', 'nta_prop_grass_shrub_2021': 'nta_prop_grass_shrub_2021', 'nta_prop_canopy_2021': 'nta_prop_canopy_2021', 'nta_prop_veg_2021': 'nta_prop_veg_2021', 'nta_netchng_prop_grass_shrub_20172021': 'nta_netchng_prop_grass_shrub_20172021', 'nta_netchng_prop_canopy_20172021': 'nta_netchng_prop_canopy_20172021', 'nta_netchng_prop_veg_20172021': 'nta_netchng_prop_veg_20172021', });
lyr_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6.set('fieldAliases', {'ntacode2020': 'ntacode2020', 'ntaname2020': 'ntaname2020', 'total_pts': 'total_pts', 'min_prop_veg_200m_2017': 'min_prop_veg_200m_2017', 'max_prop_veg_200m_2017': 'max_prop_veg_200m_2017', 'avg_prop_veg_200m_2017': 'avg_prop_veg_200m_2017', 'median_prop_veg_200m_2017': 'median_prop_veg_200m_2017', 'min_prop_veg_200m_2021': 'min_prop_veg_200m_2021', 'max_prop_veg_200m_2021': 'max_prop_veg_200m_2021', 'avg_prop_veg_200m_2021': 'avg_prop_veg_200m_2021', 'median_prop_veg_200m_2021': 'median_prop_veg_200m_2021', 'min_netchng_prop_veg_200m_2017_2021': 'min_netchng_prop_veg_200m_2017_2021', 'max_netchng_prop_veg_200m_2017_2021': 'max_netchng_prop_veg_200m_2017_2021', 'avg_netchng_prop_veg_200m_2017_2021': 'avg_netchng_prop_veg_200m_2017_2021', 'median_netchng_propveg_200m_20172021': 'median_netchng_propveg_200m_20172021', 'prop_pts_200m_gte32pctveg_2017': 'prop_pts_200m_gte32pctveg_2017', 'prop_pts_200m_gte32pctveg_2021': 'prop_pts_200m_gte32pctveg_2021', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'Change in Proportoin of Points with at least 32% Veg Cover within 200m radius (2017-2021)', 'nta_prop_grass_shrub_2017': 'nta_prop_grass_shrub_2017', 'nta_prop_canopy_2017': 'nta_prop_canopy_2017', 'nta_prop_grass_shrub_2021': 'nta_prop_grass_shrub_2021', 'nta_prop_canopy_2021': 'nta_prop_canopy_2021', 'nta_prop_veg_2021': 'nta_prop_veg_2021', 'nta_netchng_prop_grass_shrub_20172021': 'nta_netchng_prop_grass_shrub_20172021', 'nta_netchng_prop_canopy_20172021': 'nta_netchng_prop_canopy_20172021', 'nta_netchng_prop_veg_20172021': 'nta_netchng_prop_veg_20172021', });
lyr_MedianVegCoverwtihin200mofPoints2017_7.set('fieldAliases', {'ntacode2020': 'ntacode2020', 'ntaname2020': 'ntaname2020', 'total_pts': 'total_pts', 'min_prop_veg_200m_2017': 'min_prop_veg_200m_2017', 'max_prop_veg_200m_2017': 'max_prop_veg_200m_2017', 'avg_prop_veg_200m_2017': 'avg_prop_veg_200m_2017', 'median_prop_veg_200m_2017': 'Median Proportion of Veg Cover within 200m of points (2017)', 'min_prop_veg_200m_2021': 'min_prop_veg_200m_2021', 'max_prop_veg_200m_2021': 'max_prop_veg_200m_2021', 'avg_prop_veg_200m_2021': 'avg_prop_veg_200m_2021', 'median_prop_veg_200m_2021': 'median_prop_veg_200m_2021', 'min_netchng_prop_veg_200m_2017_2021': 'min_netchng_prop_veg_200m_2017_2021', 'max_netchng_prop_veg_200m_2017_2021': 'max_netchng_prop_veg_200m_2017_2021', 'avg_netchng_prop_veg_200m_2017_2021': 'avg_netchng_prop_veg_200m_2017_2021', 'median_netchng_propveg_200m_20172021': 'median_netchng_propveg_200m_20172021', 'prop_pts_200m_gte32pctveg_2017': 'prop_pts_200m_gte32pctveg_2017', 'prop_pts_200m_gte32pctveg_2021': 'prop_pts_200m_gte32pctveg_2021', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'netchng_prop_pts_200m_gte32pctveg_2017_2021', 'nta_prop_grass_shrub_2017': 'nta_prop_grass_shrub_2017', 'nta_prop_canopy_2017': 'nta_prop_canopy_2017', 'nta_prop_grass_shrub_2021': 'nta_prop_grass_shrub_2021', 'nta_prop_canopy_2021': 'nta_prop_canopy_2021', 'nta_prop_veg_2021': 'nta_prop_veg_2021', 'nta_netchng_prop_grass_shrub_20172021': 'nta_netchng_prop_grass_shrub_20172021', 'nta_netchng_prop_canopy_20172021': 'nta_netchng_prop_canopy_20172021', 'nta_netchng_prop_veg_20172021': 'nta_netchng_prop_veg_20172021', });
lyr_MedianVegCoverwtihin200mofPoints2021_8.set('fieldAliases', {'ntacode2020': 'ntacode2020', 'ntaname2020': 'ntaname2020', 'total_pts': 'total_pts', 'min_prop_veg_200m_2017': 'min_prop_veg_200m_2017', 'max_prop_veg_200m_2017': 'max_prop_veg_200m_2017', 'avg_prop_veg_200m_2017': 'avg_prop_veg_200m_2017', 'median_prop_veg_200m_2017': 'median_prop_veg_200m_2017', 'min_prop_veg_200m_2021': 'min_prop_veg_200m_2021', 'max_prop_veg_200m_2021': 'max_prop_veg_200m_2021', 'avg_prop_veg_200m_2021': 'avg_prop_veg_200m_2021', 'median_prop_veg_200m_2021': 'Median Proportion of Veg Cover within 200m of points (2021)', 'min_netchng_prop_veg_200m_2017_2021': 'min_netchng_prop_veg_200m_2017_2021', 'max_netchng_prop_veg_200m_2017_2021': 'max_netchng_prop_veg_200m_2017_2021', 'avg_netchng_prop_veg_200m_2017_2021': 'avg_netchng_prop_veg_200m_2017_2021', 'median_netchng_propveg_200m_20172021': 'median_netchng_propveg_200m_20172021', 'prop_pts_200m_gte32pctveg_2017': 'prop_pts_200m_gte32pctveg_2017', 'prop_pts_200m_gte32pctveg_2021': 'prop_pts_200m_gte32pctveg_2021', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'netchng_prop_pts_200m_gte32pctveg_2017_2021', 'nta_prop_grass_shrub_2017': 'nta_prop_grass_shrub_2017', 'nta_prop_canopy_2017': 'nta_prop_canopy_2017', 'nta_prop_grass_shrub_2021': 'nta_prop_grass_shrub_2021', 'nta_prop_canopy_2021': 'nta_prop_canopy_2021', 'nta_prop_veg_2021': 'nta_prop_veg_2021', 'nta_netchng_prop_grass_shrub_20172021': 'nta_netchng_prop_grass_shrub_20172021', 'nta_netchng_prop_canopy_20172021': 'nta_netchng_prop_canopy_20172021', 'nta_netchng_prop_veg_20172021': 'nta_netchng_prop_veg_20172021', });
lyr_MedianChangeinVegCoverwithin200mofPoints20172021_9.set('fieldAliases', {'ntacode2020': 'ntacode2020', 'ntaname2020': 'ntaname2020', 'total_pts': 'total_pts', 'min_prop_veg_200m_2017': 'min_prop_veg_200m_2017', 'max_prop_veg_200m_2017': 'max_prop_veg_200m_2017', 'avg_prop_veg_200m_2017': 'avg_prop_veg_200m_2017', 'median_prop_veg_200m_2017': 'median_prop_veg_200m_2017', 'min_prop_veg_200m_2021': 'min_prop_veg_200m_2021', 'max_prop_veg_200m_2021': 'max_prop_veg_200m_2021', 'avg_prop_veg_200m_2021': 'avg_prop_veg_200m_2021', 'median_prop_veg_200m_2021': 'median_prop_veg_200m_2021', 'min_netchng_prop_veg_200m_2017_2021': 'min_netchng_prop_veg_200m_2017_2021', 'max_netchng_prop_veg_200m_2017_2021': 'max_netchng_prop_veg_200m_2017_2021', 'avg_netchng_prop_veg_200m_2017_2021': 'avg_netchng_prop_veg_200m_2017_2021', 'median_netchng_propveg_200m_20172021': 'median_netchng_propveg_200m_20172021', 'prop_pts_200m_gte32pctveg_2017': 'prop_pts_200m_gte32pctveg_2017', 'prop_pts_200m_gte32pctveg_2021': 'prop_pts_200m_gte32pctveg_2021', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'netchng_prop_pts_200m_gte32pctveg_2017_2021', 'nta_prop_grass_shrub_2017': 'nta_prop_grass_shrub_2017', 'nta_prop_canopy_2017': 'nta_prop_canopy_2017', 'nta_prop_grass_shrub_2021': 'nta_prop_grass_shrub_2021', 'nta_prop_canopy_2021': 'nta_prop_canopy_2021', 'nta_prop_veg_2021': 'nta_prop_veg_2021', 'nta_netchng_prop_grass_shrub_20172021': 'nta_netchng_prop_grass_shrub_20172021', 'nta_netchng_prop_canopy_20172021': 'nta_netchng_prop_canopy_20172021', 'nta_netchng_prop_veg_20172021': 'nta_netchng_prop_veg_20172021', });
lyr_NTABoundaries_10.set('fieldAliases', {'ntacode2020': 'ntacode2020', 'ntaname2020': 'ntaname2020', 'total_pts': 'total_pts', 'min_prop_veg_200m_2017': 'min_prop_veg_200m_2017', 'max_prop_veg_200m_2017': 'max_prop_veg_200m_2017', 'avg_prop_veg_200m_2017': 'avg_prop_veg_200m_2017', 'median_prop_veg_200m_2017': 'median_prop_veg_200m_2017', 'min_prop_veg_200m_2021': 'min_prop_veg_200m_2021', 'max_prop_veg_200m_2021': 'max_prop_veg_200m_2021', 'avg_prop_veg_200m_2021': 'avg_prop_veg_200m_2021', 'median_prop_veg_200m_2021': 'median_prop_veg_200m_2021', 'min_netchng_prop_veg_200m_2017_2021': 'min_netchng_prop_veg_200m_2017_2021', 'max_netchng_prop_veg_200m_2017_2021': 'max_netchng_prop_veg_200m_2017_2021', 'avg_netchng_prop_veg_200m_2017_2021': 'avg_netchng_prop_veg_200m_2017_2021', 'median_netchng_propveg_200m_20172021': 'median_netchng_propveg_200m_20172021', 'prop_pts_200m_gte32pctveg_2017': 'prop_pts_200m_gte32pctveg_2017', 'prop_pts_200m_gte32pctveg_2021': 'prop_pts_200m_gte32pctveg_2021', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'netchng_prop_pts_200m_gte32pctveg_2017_2021', 'nta_prop_grass_shrub_2017': 'nta_prop_grass_shrub_2017', 'nta_prop_canopy_2017': 'nta_prop_canopy_2017', 'nta_prop_grass_shrub_2021': 'nta_prop_grass_shrub_2021', 'nta_prop_canopy_2021': 'nta_prop_canopy_2021', 'nta_prop_veg_2021': 'nta_prop_veg_2021', 'nta_netchng_prop_grass_shrub_20172021': 'nta_netchng_prop_grass_shrub_20172021', 'nta_netchng_prop_canopy_20172021': 'nta_netchng_prop_canopy_20172021', 'nta_netchng_prop_veg_20172021': 'nta_netchng_prop_veg_20172021', });
lyr_ProportionofPointswithatleast32VegCoverin200mradius2017_4.set('fieldImages', {'ntacode2020': 'Hidden', 'ntaname2020': 'Hidden', 'total_pts': 'Hidden', 'min_prop_veg_200m_2017': 'Hidden', 'max_prop_veg_200m_2017': 'Hidden', 'avg_prop_veg_200m_2017': 'Hidden', 'median_prop_veg_200m_2017': 'Hidden', 'min_prop_veg_200m_2021': 'Hidden', 'max_prop_veg_200m_2021': 'Hidden', 'avg_prop_veg_200m_2021': 'Hidden', 'median_prop_veg_200m_2021': 'Hidden', 'min_netchng_prop_veg_200m_2017_2021': 'Hidden', 'max_netchng_prop_veg_200m_2017_2021': 'Hidden', 'avg_netchng_prop_veg_200m_2017_2021': 'Hidden', 'median_netchng_propveg_200m_20172021': 'Hidden', 'prop_pts_200m_gte32pctveg_2017': 'TextEdit', 'prop_pts_200m_gte32pctveg_2021': 'Hidden', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'Hidden', 'nta_prop_grass_shrub_2017': 'Hidden', 'nta_prop_canopy_2017': 'Hidden', 'nta_prop_grass_shrub_2021': 'Hidden', 'nta_prop_canopy_2021': 'Hidden', 'nta_prop_veg_2021': 'Hidden', 'nta_netchng_prop_grass_shrub_20172021': 'Hidden', 'nta_netchng_prop_canopy_20172021': 'Hidden', 'nta_netchng_prop_veg_20172021': 'Hidden', });
lyr_ProportionofPointswithatleast32VegCoverin200mradius2021_5.set('fieldImages', {'ntacode2020': 'Hidden', 'ntaname2020': 'Hidden', 'total_pts': 'Hidden', 'min_prop_veg_200m_2017': 'Hidden', 'max_prop_veg_200m_2017': 'Hidden', 'avg_prop_veg_200m_2017': 'Hidden', 'median_prop_veg_200m_2017': 'Hidden', 'min_prop_veg_200m_2021': 'Hidden', 'max_prop_veg_200m_2021': 'Hidden', 'avg_prop_veg_200m_2021': 'Hidden', 'median_prop_veg_200m_2021': 'Hidden', 'min_netchng_prop_veg_200m_2017_2021': 'Hidden', 'max_netchng_prop_veg_200m_2017_2021': 'Hidden', 'avg_netchng_prop_veg_200m_2017_2021': 'Hidden', 'median_netchng_propveg_200m_20172021': 'Hidden', 'prop_pts_200m_gte32pctveg_2017': 'Hidden', 'prop_pts_200m_gte32pctveg_2021': 'TextEdit', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'Hidden', 'nta_prop_grass_shrub_2017': 'Hidden', 'nta_prop_canopy_2017': 'Hidden', 'nta_prop_grass_shrub_2021': 'Hidden', 'nta_prop_canopy_2021': 'Hidden', 'nta_prop_veg_2021': 'Hidden', 'nta_netchng_prop_grass_shrub_20172021': 'Hidden', 'nta_netchng_prop_canopy_20172021': 'Hidden', 'nta_netchng_prop_veg_20172021': 'Hidden', });
lyr_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6.set('fieldImages', {'ntacode2020': 'Hidden', 'ntaname2020': 'Hidden', 'total_pts': 'Hidden', 'min_prop_veg_200m_2017': 'Hidden', 'max_prop_veg_200m_2017': 'Hidden', 'avg_prop_veg_200m_2017': 'Hidden', 'median_prop_veg_200m_2017': 'Hidden', 'min_prop_veg_200m_2021': 'Hidden', 'max_prop_veg_200m_2021': 'Hidden', 'avg_prop_veg_200m_2021': 'Hidden', 'median_prop_veg_200m_2021': 'Hidden', 'min_netchng_prop_veg_200m_2017_2021': 'Hidden', 'max_netchng_prop_veg_200m_2017_2021': 'Hidden', 'avg_netchng_prop_veg_200m_2017_2021': 'Hidden', 'median_netchng_propveg_200m_20172021': 'Hidden', 'prop_pts_200m_gte32pctveg_2017': 'Hidden', 'prop_pts_200m_gte32pctveg_2021': 'Hidden', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'TextEdit', 'nta_prop_grass_shrub_2017': 'Hidden', 'nta_prop_canopy_2017': 'Hidden', 'nta_prop_grass_shrub_2021': 'Hidden', 'nta_prop_canopy_2021': 'Hidden', 'nta_prop_veg_2021': 'Hidden', 'nta_netchng_prop_grass_shrub_20172021': 'Hidden', 'nta_netchng_prop_canopy_20172021': 'Hidden', 'nta_netchng_prop_veg_20172021': 'Hidden', });
lyr_MedianVegCoverwtihin200mofPoints2017_7.set('fieldImages', {'ntacode2020': 'Hidden', 'ntaname2020': 'Hidden', 'total_pts': 'Hidden', 'min_prop_veg_200m_2017': 'Hidden', 'max_prop_veg_200m_2017': 'Hidden', 'avg_prop_veg_200m_2017': 'Hidden', 'median_prop_veg_200m_2017': 'TextEdit', 'min_prop_veg_200m_2021': 'Hidden', 'max_prop_veg_200m_2021': 'Hidden', 'avg_prop_veg_200m_2021': 'Hidden', 'median_prop_veg_200m_2021': 'Hidden', 'min_netchng_prop_veg_200m_2017_2021': 'Hidden', 'max_netchng_prop_veg_200m_2017_2021': 'Hidden', 'avg_netchng_prop_veg_200m_2017_2021': 'Hidden', 'median_netchng_propveg_200m_20172021': 'Hidden', 'prop_pts_200m_gte32pctveg_2017': 'Hidden', 'prop_pts_200m_gte32pctveg_2021': 'Hidden', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'Hidden', 'nta_prop_grass_shrub_2017': 'Hidden', 'nta_prop_canopy_2017': 'Hidden', 'nta_prop_grass_shrub_2021': 'Hidden', 'nta_prop_canopy_2021': 'Hidden', 'nta_prop_veg_2021': 'Hidden', 'nta_netchng_prop_grass_shrub_20172021': 'Hidden', 'nta_netchng_prop_canopy_20172021': 'Hidden', 'nta_netchng_prop_veg_20172021': 'Hidden', });
lyr_MedianVegCoverwtihin200mofPoints2021_8.set('fieldImages', {'ntacode2020': 'Hidden', 'ntaname2020': 'Hidden', 'total_pts': 'Hidden', 'min_prop_veg_200m_2017': 'Hidden', 'max_prop_veg_200m_2017': 'Hidden', 'avg_prop_veg_200m_2017': 'Hidden', 'median_prop_veg_200m_2017': 'Hidden', 'min_prop_veg_200m_2021': 'Hidden', 'max_prop_veg_200m_2021': 'Hidden', 'avg_prop_veg_200m_2021': 'Hidden', 'median_prop_veg_200m_2021': 'TextEdit', 'min_netchng_prop_veg_200m_2017_2021': 'Hidden', 'max_netchng_prop_veg_200m_2017_2021': 'Hidden', 'avg_netchng_prop_veg_200m_2017_2021': 'Hidden', 'median_netchng_propveg_200m_20172021': 'Hidden', 'prop_pts_200m_gte32pctveg_2017': 'Hidden', 'prop_pts_200m_gte32pctveg_2021': 'Hidden', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'Hidden', 'nta_prop_grass_shrub_2017': 'Hidden', 'nta_prop_canopy_2017': 'Hidden', 'nta_prop_grass_shrub_2021': 'Hidden', 'nta_prop_canopy_2021': 'Hidden', 'nta_prop_veg_2021': 'Hidden', 'nta_netchng_prop_grass_shrub_20172021': 'Hidden', 'nta_netchng_prop_canopy_20172021': 'Hidden', 'nta_netchng_prop_veg_20172021': 'Hidden', });
lyr_MedianChangeinVegCoverwithin200mofPoints20172021_9.set('fieldImages', {'ntacode2020': 'Hidden', 'ntaname2020': 'Hidden', 'total_pts': 'Hidden', 'min_prop_veg_200m_2017': 'Hidden', 'max_prop_veg_200m_2017': 'Hidden', 'avg_prop_veg_200m_2017': 'Hidden', 'median_prop_veg_200m_2017': 'Hidden', 'min_prop_veg_200m_2021': 'Hidden', 'max_prop_veg_200m_2021': 'Hidden', 'avg_prop_veg_200m_2021': 'Hidden', 'median_prop_veg_200m_2021': 'Hidden', 'min_netchng_prop_veg_200m_2017_2021': 'Hidden', 'max_netchng_prop_veg_200m_2017_2021': 'Hidden', 'avg_netchng_prop_veg_200m_2017_2021': 'Hidden', 'median_netchng_propveg_200m_20172021': 'TextEdit', 'prop_pts_200m_gte32pctveg_2017': 'Hidden', 'prop_pts_200m_gte32pctveg_2021': 'Hidden', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'Hidden', 'nta_prop_grass_shrub_2017': 'Hidden', 'nta_prop_canopy_2017': 'Hidden', 'nta_prop_grass_shrub_2021': 'Hidden', 'nta_prop_canopy_2021': 'Hidden', 'nta_prop_veg_2021': 'Hidden', 'nta_netchng_prop_grass_shrub_20172021': 'Hidden', 'nta_netchng_prop_canopy_20172021': 'Hidden', 'nta_netchng_prop_veg_20172021': 'Hidden', });
lyr_NTABoundaries_10.set('fieldImages', {'ntacode2020': 'TextEdit', 'ntaname2020': 'TextEdit', 'total_pts': 'Hidden', 'min_prop_veg_200m_2017': 'Hidden', 'max_prop_veg_200m_2017': 'Hidden', 'avg_prop_veg_200m_2017': 'Hidden', 'median_prop_veg_200m_2017': 'Hidden', 'min_prop_veg_200m_2021': 'Hidden', 'max_prop_veg_200m_2021': 'Hidden', 'avg_prop_veg_200m_2021': 'Hidden', 'median_prop_veg_200m_2021': 'Hidden', 'min_netchng_prop_veg_200m_2017_2021': 'Hidden', 'max_netchng_prop_veg_200m_2017_2021': 'Hidden', 'avg_netchng_prop_veg_200m_2017_2021': 'Hidden', 'median_netchng_propveg_200m_20172021': 'Hidden', 'prop_pts_200m_gte32pctveg_2017': 'Hidden', 'prop_pts_200m_gte32pctveg_2021': 'Hidden', 'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'Hidden', 'nta_prop_grass_shrub_2017': 'Hidden', 'nta_prop_canopy_2017': 'Hidden', 'nta_prop_grass_shrub_2021': 'Hidden', 'nta_prop_canopy_2021': 'Hidden', 'nta_prop_veg_2021': 'Hidden', 'nta_netchng_prop_grass_shrub_20172021': 'Hidden', 'nta_netchng_prop_canopy_20172021': 'Hidden', 'nta_netchng_prop_veg_20172021': 'Hidden', });
lyr_ProportionofPointswithatleast32VegCoverin200mradius2017_4.set('fieldLabels', {'prop_pts_200m_gte32pctveg_2017': 'no label', });
lyr_ProportionofPointswithatleast32VegCoverin200mradius2021_5.set('fieldLabels', {'prop_pts_200m_gte32pctveg_2021': 'no label', });
lyr_ChangeinProportionofPointswithatleast32VegCoverin200mradius20172021_6.set('fieldLabels', {'netchng_prop_pts_200m_gte32pctveg_2017_2021': 'no label', });
lyr_MedianVegCoverwtihin200mofPoints2017_7.set('fieldLabels', {'median_prop_veg_200m_2017': 'no label', });
lyr_MedianVegCoverwtihin200mofPoints2021_8.set('fieldLabels', {'median_prop_veg_200m_2021': 'no label', });
lyr_MedianChangeinVegCoverwithin200mofPoints20172021_9.set('fieldLabels', {'median_netchng_propveg_200m_20172021': 'no label', });
lyr_NTABoundaries_10.set('fieldLabels', {'ntacode2020': 'inline label - always visible', 'ntaname2020': 'inline label - always visible', });
lyr_NTABoundaries_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});