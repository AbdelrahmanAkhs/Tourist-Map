var size = 0;
var placement = 'point';
function categories_Polyline_Clip_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'DROAD':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(185,171,171,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'DROAD1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(185,171,171,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EOP':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(185,171,171,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EOP1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(185,171,171,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'S-TREE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(90,212,74,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Polyline_Clip_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Layer");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Polyline_Clip_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
