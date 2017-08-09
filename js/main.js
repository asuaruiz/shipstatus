console.log('So are the script files!!!');
var obtenerJson = function(url){
  $.ajax({
      url: url,
      type: 'GET',
      contentType: 'aplication/json',
    dataType: 'json',
    crossDomain: true,

  })
  .done(function(response) {
    console.log(response);
    console.log("aqui");
    //$("#order").append(response.response[0].numero_nota_venta);
    //$("#address").append(response.response[0].direccion_despacho);
    //$("#date").append(response.response[0].fecha_creacion_nota);
    //$("#order").append(response.response[0].numero_nota_venta);
    
    
  })
  .fail(function(e) {
    console.log(e.statusText);
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  }); 
}
for (var functions in obtenerJson) {
       if (obtenerJson.hasOwnProperty(functions)) {
          alert(obtenerJson[functions].numero_nota_venta);
          alert(obtenerJson[functions].msg);
       }
    }
/*var llenarTabla = function(url){
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json'
  })
  .done(function(response) {
    //$("#modal-pokemon .modal-content").empty();
    $("#order").append(response.response[0].numero_nota_venta);
    $("#modal-pokemon .modal-content").append("<p>" + response.weight + "Kg </p>");
    $("#modal-pokemon .modal-content").append("<img src='" + response.sprites.front_default + "' >");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  
}
*/

$(document).ready(function(){
  obtenerJson('http://www.dimerc.cl/api/recepcion_pedido/public/recepcion_pedidos_cliente/66784baf03c356b8006ff51f5aa5b156/get_all/96870780/');
  console.log(obtenerJson);
});   
  

