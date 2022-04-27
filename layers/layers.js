var wms_layers = [];

var format_Border_0 = new ol.format.GeoJSON();
var features_Border_0 = format_Border_0.readFeatures(json_Border_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Border_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Border_0.addFeatures(features_Border_0);
var lyr_Border_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Border_0, 
                style: style_Border_0,
                interactive: true,
                title: '<img src="styles/legend/Border_0.png" /> Border'
            });
var format_Polyline_Clip_1 = new ol.format.GeoJSON();
var features_Polyline_Clip_1 = format_Polyline_Clip_1.readFeatures(json_Polyline_Clip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polyline_Clip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polyline_Clip_1.addFeatures(features_Polyline_Clip_1);
var lyr_Polyline_Clip_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polyline_Clip_1, 
                style: style_Polyline_Clip_1,
                interactive: true,
    title: 'Polyline_Clip<br />\
    <img src="styles/legend/Polyline_Clip_1_0.png" /> DROAD<br />\
    <img src="styles/legend/Polyline_Clip_1_1.png" /> DROAD1<br />\
    <img src="styles/legend/Polyline_Clip_1_2.png" /> EOP<br />\
    <img src="styles/legend/Polyline_Clip_1_3.png" /> EOP1<br />\
    <img src="styles/legend/Polyline_Clip_1_4.png" /> S-TREE<br />'
        });
var format_Houses_2 = new ol.format.GeoJSON();
var features_Houses_2 = format_Houses_2.readFeatures(json_Houses_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Houses_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Houses_2.addFeatures(features_Houses_2);
var lyr_Houses_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Houses_2, 
                style: style_Houses_2,
                interactive: true,
                title: '<img src="styles/legend/Houses_2.png" /> Houses'
            });
var format_Primary_3 = new ol.format.GeoJSON();
var features_Primary_3 = format_Primary_3.readFeatures(json_Primary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primary_3.addFeatures(features_Primary_3);
var lyr_Primary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Primary_3, 
                style: style_Primary_3,
                interactive: true,
    title: 'Primary<br />\
    <img src="styles/legend/Primary_3_0.png" /> Primary<br />\
    <img src="styles/legend/Primary_3_1.png" /> Secondary<br />\
    <img src="styles/legend/Primary_3_2.png" /> Local<br />'
        });
var format_ImportantPlaces_4 = new ol.format.GeoJSON();
var features_ImportantPlaces_4 = format_ImportantPlaces_4.readFeatures(json_ImportantPlaces_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImportantPlaces_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImportantPlaces_4.addFeatures(features_ImportantPlaces_4);
var lyr_ImportantPlaces_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ImportantPlaces_4, 
                style: style_ImportantPlaces_4,
                interactive: true,
    title: 'ImportantPlaces<br />\
    <img src="styles/legend/ImportantPlaces_4_0.png" /> Bakery<br />\
    <img src="styles/legend/ImportantPlaces_4_1.png" /> Car Shop<br />\
    <img src="styles/legend/ImportantPlaces_4_2.png" /> Clothing<br />\
    <img src="styles/legend/ImportantPlaces_4_3.png" /> Coffee Shop<br />\
    <img src="styles/legend/ImportantPlaces_4_4.png" /> Company<br />\
    <img src="styles/legend/ImportantPlaces_4_5.png" /> Dentist<br />\
    <img src="styles/legend/ImportantPlaces_4_6.png" /> Gas Station<br />\
    <img src="styles/legend/ImportantPlaces_4_7.png" /> Governmental Building<br />\
    <img src="styles/legend/ImportantPlaces_4_8.png" /> Hall<br />\
    <img src="styles/legend/ImportantPlaces_4_9.png" /> Historical Place<br />\
    <img src="styles/legend/ImportantPlaces_4_10.png" /> Mall<br />\
    <img src="styles/legend/ImportantPlaces_4_11.png" /> Mosque<br />\
    <img src="styles/legend/ImportantPlaces_4_12.png" /> Pharmacy<br />\
    <img src="styles/legend/ImportantPlaces_4_13.png" /> police station<br />\
    <img src="styles/legend/ImportantPlaces_4_14.png" /> Resturant<br />\
    <img src="styles/legend/ImportantPlaces_4_15.png" /> Salon<br />\
    <img src="styles/legend/ImportantPlaces_4_16.png" /> School<br />\
    <img src="styles/legend/ImportantPlaces_4_17.png" /> Shopping<br />'
        });

lyr_Border_0.setVisible(true);lyr_Polyline_Clip_1.setVisible(true);lyr_Houses_2.setVisible(true);lyr_Primary_3.setVisible(true);lyr_ImportantPlaces_4.setVisible(true);
var layersList = [lyr_Border_0,lyr_Polyline_Clip_1,lyr_Houses_2,lyr_Primary_3,lyr_ImportantPlaces_4];
lyr_Border_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Polyline_Clip_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'METERS': 'METERS', 'CENTIMETERS': 'CENTIMETERS', 'MAG_DATE': 'MAG-DATE', 'Shape_Length': 'Shape_Length', });
lyr_Houses_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Primary_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Type': 'Type', });
lyr_ImportantPlaces_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Type': 'Type', });
lyr_Border_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Polyline_Clip_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'METERS': 'Range', 'CENTIMETERS': 'Range', 'MAG_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_Houses_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Primary_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Type': 'TextEdit', });
lyr_ImportantPlaces_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', });
lyr_Border_0.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Polyline_Clip_1.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetype': 'no label', 'LyrLnType': 'no label', 'BlkLinetype': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'DocUpdate': 'no label', 'METERS': 'no label', 'CENTIMETERS': 'no label', 'MAG_DATE': 'no label', 'Shape_Length': 'no label', });
lyr_Houses_2.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetype': 'no label', 'LyrLnType': 'no label', 'BlkLinetype': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'DocUpdate': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Primary_3.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Type': 'no label', });
lyr_ImportantPlaces_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'Type': 'no label', });
lyr_ImportantPlaces_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});