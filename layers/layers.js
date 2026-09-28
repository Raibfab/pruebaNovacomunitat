var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMSatellite_1 = new ol.layer.Tile({
            'title': 'OSM Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Tuberiesestudio_2 = new ol.format.GeoJSON();
var features_Tuberiesestudio_2 = format_Tuberiesestudio_2.readFeatures(json_Tuberiesestudio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuberiesestudio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuberiesestudio_2.addFeatures(features_Tuberiesestudio_2);
var lyr_Tuberiesestudio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuberiesestudio_2, 
                style: style_Tuberiesestudio_2,
                popuplayertitle: 'Tuberies - estudio',
                interactive: true,
    title: 'Tuberies - estudio<br />\
    <img src="styles/legend/Tuberiesestudio_2_0.png" /> Basura<br />\
    <img src="styles/legend/Tuberiesestudio_2_1.png" /> Cementeri<br />\
    <img src="styles/legend/Tuberiesestudio_2_2.png" /> Garrorto<br />\
    <img src="styles/legend/Tuberiesestudio_2_3.png" /> Jaime<br />' });
var format_cabezales_estudio_3 = new ol.format.GeoJSON();
var features_cabezales_estudio_3 = format_cabezales_estudio_3.readFeatures(json_cabezales_estudio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cabezales_estudio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cabezales_estudio_3.addFeatures(features_cabezales_estudio_3);
cluster_cabezales_estudio_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_cabezales_estudio_3
});
var lyr_cabezales_estudio_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_cabezales_estudio_3, 
                style: style_cabezales_estudio_3,
                popuplayertitle: 'cabezales_estudio',
                interactive: true,
                title: '<img src="styles/legend/cabezales_estudio_3.png" /> cabezales_estudio'
            });
var format_elementos_estudio_4 = new ol.format.GeoJSON();
var features_elementos_estudio_4 = format_elementos_estudio_4.readFeatures(json_elementos_estudio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_elementos_estudio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_elementos_estudio_4.addFeatures(features_elementos_estudio_4);
cluster_elementos_estudio_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_elementos_estudio_4
});
var lyr_elementos_estudio_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_elementos_estudio_4, 
                style: style_elementos_estudio_4,
                popuplayertitle: 'elementos_estudio',
                interactive: true,
    title: 'elementos_estudio<br />\
    <img src="styles/legend/elementos_estudio_4_0.png" /> HIDRANTE DE CABEZAL<br />\
    <img src="styles/legend/elementos_estudio_4_1.png" /> SONDA<br />\
    <img src="styles/legend/elementos_estudio_4_2.png" /> TOMA DE CANAL<br />' });
var format_nodos_estudio_5 = new ol.format.GeoJSON();
var features_nodos_estudio_5 = format_nodos_estudio_5.readFeatures(json_nodos_estudio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nodos_estudio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nodos_estudio_5.addFeatures(features_nodos_estudio_5);
var lyr_nodos_estudio_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nodos_estudio_5, 
                style: style_nodos_estudio_5,
                popuplayertitle: 'nodos_estudio',
                interactive: true,
                title: '<img src="styles/legend/nodos_estudio_5.png" /> nodos_estudio'
            });
var format_imagenes_puntos_6 = new ol.format.GeoJSON();
var features_imagenes_puntos_6 = format_imagenes_puntos_6.readFeatures(json_imagenes_puntos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_imagenes_puntos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_imagenes_puntos_6.addFeatures(features_imagenes_puntos_6);
cluster_imagenes_puntos_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_imagenes_puntos_6
});
var lyr_imagenes_puntos_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_imagenes_puntos_6, 
                style: style_imagenes_puntos_6,
                popuplayertitle: 'imagenes_puntos',
                interactive: true,
                title: '<img src="styles/legend/imagenes_puntos_6.png" /> imagenes_puntos'
            });
var group_Cartografa = new ol.layer.Group({
                                layers: [lyr_OSMSatellite_1,],
                                fold: 'open',
                                title: 'Cartografía'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMSatellite_1.setVisible(true);lyr_Tuberiesestudio_2.setVisible(true);lyr_cabezales_estudio_3.setVisible(true);lyr_elementos_estudio_4.setVisible(true);lyr_nodos_estudio_5.setVisible(true);lyr_imagenes_puntos_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Cartografa,lyr_Tuberiesestudio_2,lyr_cabezales_estudio_3,lyr_elementos_estudio_4,lyr_nodos_estudio_5,lyr_imagenes_puntos_6];
lyr_Tuberiesestudio_2.set('fieldAliases', {'id': 'id', 'Cabezal': 'Cabezal', 'nodo_inici': 'nodo_inici', 'nodo_fin': 'nodo_fin', 'Longitud': 'Longitud', });
lyr_cabezales_estudio_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Caract.': 'Caract.', });
lyr_elementos_estudio_4.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'TIPO', 'field_4': 'DESCRIPCIÓN', });
lyr_nodos_estudio_5.set('fieldAliases', {'id': 'id', 'descripcio': 'descripcio', 'nodo_inici': 'nodo_inici', 'nodo_fin': 'nodo_fin', 'x': 'x', 'y': 'y', });
lyr_imagenes_puntos_6.set('fieldAliases', {'id': 'id', 'com_reg': 'com_reg', 'descripcio': 'descripcio', 'ruta_img': 'ruta_img', });
lyr_Tuberiesestudio_2.set('fieldImages', {'id': 'TextEdit', 'Cabezal': 'TextEdit', 'nodo_inici': 'TextEdit', 'nodo_fin': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_cabezales_estudio_3.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'Caract.': 'TextEdit', });
lyr_elementos_estudio_4.set('fieldImages', {'field_1': 'UniqueValues', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_nodos_estudio_5.set('fieldImages', {'id': 'TextEdit', 'descripcio': 'TextEdit', 'nodo_inici': 'TextEdit', 'nodo_fin': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_imagenes_puntos_6.set('fieldImages', {'id': 'TextEdit', 'com_reg': 'TextEdit', 'descripcio': 'TextEdit', 'ruta_img': 'ExternalResource', });
lyr_Tuberiesestudio_2.set('fieldLabels', {'id': 'no label', 'Cabezal': 'inline label - visible with data', 'nodo_inici': 'no label', 'nodo_fin': 'no label', 'Longitud': 'no label', });
lyr_cabezales_estudio_3.set('fieldLabels', {'id': 'header label - always visible', 'Nom': 'no label', 'Caract.': 'hidden field', });
lyr_elementos_estudio_4.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'inline label - visible with data', 'field_4': 'no label', });
lyr_nodos_estudio_5.set('fieldLabels', {'id': 'no label', 'descripcio': 'no label', 'nodo_inici': 'inline label - always visible', 'nodo_fin': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_imagenes_puntos_6.set('fieldLabels', {'id': 'no label', 'com_reg': 'no label', 'descripcio': 'no label', 'ruta_img': 'no label', });
lyr_imagenes_puntos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});