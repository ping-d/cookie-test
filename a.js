/**
 * all cookie instance access the same cookie storage
 * */
function Cookie(){}

/**
 * @param objName {string} :cookie key
 * @param objValue {string} :cookie value
 * @param objDays {number} : expire day
 * @param objDomain ?
 * */
Cookie.prototype.addCookie = function( objName, objValue, objDays, objDomain ){
  // use escape to avoid @#$%^%
  var str = objName + "=" + escape(objValue);
      str += ";path=/;domain=" + objDomain ;
  if( objDays > 0 ){
    var date = new Date();
    var ms = objDays * ( 3600 * 24 * 1000 );
    date.setTime( date.getTime() + ms );
    str += ";expires=" + date.toGMTString();
  }
  return document.cookie = str ;
};
/**
 * author:zws
 * @param objName {string} : cookie key
 * */
Cookie.prototype.getCookie = function( objName ){
  var arrStr = document.cookie.split("; ");
  var objVal = "";
  for( var i = 0,l = arrStr.length; i < l ; i++ ){
    var temArr = arrStr[i].split("=" );
    if( temArr[0] === objName ){
      objVal = unescape( temArr[1] )
    }
  }
  return objVal;
};
Cookie.prototype.deleteCookie = function(objName, objDomain) {
  return document.cookie = objName + "=;path=/;domain=" + objDomain + ";expires=" + (new Date(0)).toGMTString();
};
module.exports = Cookie ;
