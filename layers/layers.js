ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([107.610976, -6.898570, 107.618141, -6.888959]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kesehatan_1 = new ol.format.GeoJSON();
var features_Kesehatan_1 = format_Kesehatan_1.readFeatures(json_Kesehatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kesehatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_1.addFeatures(features_Kesehatan_1);
var lyr_Kesehatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_1, 
                style: style_Kesehatan_1,
                popuplayertitle: 'Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_1.png" /> Kesehatan'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Kesehatan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kesehatan_1];
lyr_Kesehatan_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'Gambar URL': 'Gambar URL', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', });
lyr_Kesehatan_1.set('fieldImages', {'id': '', 'Nama': '', 'Deskripsi': '', 'Gambar URL': '', 'X-Coord': '', 'Y-Coord': '', });
lyr_Kesehatan_1.set('fieldLabels', {'id': 'inline label - always visible', 'Nama': 'header label - always visible', 'Deskripsi': 'header label - visible with data', 'Gambar URL': 'inline label - visible with data', 'X-Coord': 'inline label - visible with data', 'Y-Coord': 'inline label - visible with data', });
lyr_Kesehatan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});