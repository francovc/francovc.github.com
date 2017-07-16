var size = 0;
function categories_Ciudad_de_Ayacucho0(feature, value, size) {
                switch(value) {case 'AYACUCHO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(223,193,24,0.8)'})
    })];
                    break;
case 'CARMEN ALTO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(69,212,13,0.8)'})
    })];
                    break;
case 'LAS NAZARENAS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(147,122,216,0.8)'})
    })];
                    break;
case 'SAN JUAN BAUTISTA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(81,156,210,0.8)'})
    })];
                    break;
case 'SAN JUAN DE URUBAMBA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(209,15,183,0.8)'})
    })];
                    break;
case 'YANAMA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(88,206,155,0.8)'})
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(88,206,155,0.8)'})
    })];
                    break;}};
var styleCache_Ciudad_de_Ayacucho0={}
var style_Ciudad_de_Ayacucho0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NOMCCPP");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = categories_Ciudad_de_Ayacucho0(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_Ciudad_de_Ayacucho0[key]){
        var text = new ol.style.Text({
                font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_Ciudad_de_Ayacucho0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Ciudad_de_Ayacucho0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};