const apikey = "pl4n06";
/************************************** SERVICIOS ****************************************/
/*const getHermandades = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/hermandades/";
const getDias = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/fechas/";
const getRutas = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/ruta/";
const getFechas = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/fechas/";
const getCamino = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/camino/";
const getPasos = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/pasos/";
const getFechasPaso = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/fechas/paso/";
const getHoras = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/horario/";
const getGPS = "http://www.mocky.io/v2/5aa275db2f0000b01ad465d2";
//const getGPS = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/gps/";
const getColor = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/color/"; //NO USADO
/**/
const getHermandades = "http://ws198.juntadeandalucia.es/prom/rest/hermandades/";
const getDias = "http://ws198.juntadeandalucia.es/prom/rest/fechas/";
const getRutas = "http://ws198.juntadeandalucia.es/prom/rest/ruta/";
const getFechas = "http://ws198.juntadeandalucia.es/prom/rest/fechas/";
const getCamino = "http://ws198.juntadeandalucia.es/prom/rest/camino/";
const getPasos = "http://ws198.juntadeandalucia.es/prom/rest/pasos/";
const getFechasPaso = "http://ws198.juntadeandalucia.es/prom/rest/fechas/paso/";
const getHoras = "http://ws198.juntadeandalucia.es/prom/rest/horario/";
//const getGPS = "http://www.mocky.io/v2/5aa275db2f0000b01ad465d2";
const getGPS = "http://ws198.juntadeandalucia.es/prom/rest/gps/";
const getColor = "http://ws198.juntadeandalucia.es/prom/rest/color/"; //NO USADO
const bboxContext = {x:{min:96388,max:621889},y:{min:3959795,max:4299792}};
const zoomToPoint = 12;
const updateGPS = 60; //en segundos. TODO:cambiar a 150 antes de publicar
const timeout = 30; //en segundos. Se usa para detectar si hay algún problema con los servicios no controlado
const attrNotShow = ["the_geom", "geom", "geometry", "color", "sentido"];
/*********************** MENSAJES DE ERROR NO CONTROLADO EN LOS SERVICIOS **********************/
const noGPS = "Actualmente no existen posiciones GPS. Inténtelo más tarde";
/*const noPosicion = "No existe posición para la hermandad seleccionada";*/
const errInesperado = "Ha ocurrido un error inesperado. Vuelva a ejecutar la aplicación";
const errCode = [2];
const errMsg = ["No es posible visualizar la ruta. El desplazamiento no se realiza en carreta"];
const urlCJI = 'http://www.juntadeandalucia.es/organismos/justiciaeinterior.html';
const urlConsorcioHuelva= "http://www.cthu.es/";
const urlConsorcioSevilla= "http://www.consorciotransportes-sevilla.com/";
const urlPDF = "http://www.juntadeandalucia.es/justiciaeinterior/imgplan/InformaPlanRomero.pdf";
const versionApp = "Versión 1.0.0";
const htmlAcercade = `<img src="img/logoJunta.png"/><br>Plan Romero<br>${versionApp}<br><br>Junta de Andalucía<br>
						<a href="#" onclick="javascript:openUrlExternal('${urlCJI}');">Consejería de Justicia e Interior</a>
						<br>
						<a href="#" onclick="javascript:openUrlExternal('${urlConsorcioHuelva}');">Consorcio de transportes de Huelva</a>
						<br>
						<a href="#" onclick="javascript:openUrlExternal('${urlConsorcioSevilla}');">Consorcio de transportes de Sevilla</a>`;

const horaCambioJornada = 15;
const urlWMSCaminosOcupados = 'http://www.juntadeandalucia.es/justiciaeinterior/IDE-pru/PlanRomero/wms';
const legendURL = "http://www.juntadeandalucia.es/justiciaeinterior/imgplan/LeyendaPRomero.png";
window.isApp = /^(?!HTTP)/.test(document.URL.toUpperCase()); //
window.iOS = /IPAD|IPHONE|IPOD/.test(navigator.userAgent.toUpperCase());
var formatDate = function (date, format) {
	//console.log(date);
	switch (format) {
		case "gps":
			return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " +
				('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
		
		case "combo":
		default:
			//JGL: añado un 0 al mes ya que el servicio lo devuelve con 2 dígitos
			return date.getDate() + "/0" + (date.getMonth()+1) + "/" + date.getFullYear();
	}
};
M.proxy(false);
