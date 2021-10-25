
// EJERCICIO FINAL

/*

Se requiere un sistema que pueda correr en consola que permita la atencion al cliente en un restaurante. El sistema debe tener la capacidad de:

-MOSTRAR MENU DISPONIBLE
PERMITIR QUE EL USUARIO PIDA ELEMENTOS DEL MENU
-MOSTRAR EL COSTO TOTAL QUE EL USUARIO DEBE PAGAR
-COBRAR AL USUARIO
-REPORTAR EL MONTO TOTAL DE VENTAS REALIZADAS


*/

//A CONTINUACION TENDREMOS A DISPOSICION UNA SERIE DE FUNCIONES QUE NOS PERMITIRAN OPERAR UN RESTAURANTE

const usuario = {

    nombre : "Federico",
    edad : 28,
    deuda : 0

}

//-------------------------------------------------------------------------------------------------------

let pedido = [] // PARA GUARDAR EL PEDIDO EN UNA VARIABLE
let costoPedido = 0
let costoTotal = 0
costoTotal += costoPedido

//-------------------------------------------------------------------------------------------------------

const mostrarMenu = () => {

    // EN CONSOLA, LLAMAR A LA FUNCION mostrarMenu() Y SE EJECUTARA LA MISMA

    // MENU 

    console.log("CODIGO - PRODUCTO - COSTO")

    /*

    METODO PARA RECORRER ARRAYS
    
    productos.forEach( producto => console.log(producto.codigo + " - " + producto.nombre + " -$" +producto.costo) )

    */

    //OTRA FORMA DE RECORRER ARRAYS

    for(let producto of productos){

    console.log(producto.codigo + " - " + producto.nombre + " -$" +producto.costo) 

    }


}

//--------------------------------------------------------------------------------------------------------------------


const pedirProducto = cod => {

    if (!cod) return "Ingrese un codigo valido por favor" // ESTE FOR VERIFICA " SI NO EXISTE CODIGO, IMPRIMIR EN PANTALLA INGRESE CODIGO VALIDO POR FAVOR"

    const productoEncontrado = productos.find (producto => producto.codigo === cod)
    if (!productoEncontrado) return "El codigo ingresado no existe. Ingrese un codigo valido por favor"

    //EL ANTERIOR CODIGO, GUARDA EN productoEncontrado EL RESULTADO DEL CODIGO DE LA LINEA. CON productos.find, BUSCA SI EN LOS producto, usando el atributo producto.codigo COINCIDE CON EL CODIGO INGRESADO cod.
    //SI NO EXISTE productoEncontrado, RETORNA MENSAJE DE PRODUCTO INGRESADO NO EXISTE.

    pedido.push(productoEncontrado) // SI COINCIDE producto.codigo CON cod, SE GUARDARA EL RESULTADO EN const pedido CON EL METODO pedido.push
    console.log("El producto ha sido agregado a su pedido")
    return verPedido()

    

}

//-----------------------------------------------------------------------------------------------------------------

const verPedido = () => pedido // EL METODO verPedido ES SIMPLEMENTE MOSTRAR EL ARRAY CONSTANTE pedido, EL CUAL LO MOSTRARA POR CONSOLA LO QUE VAMOS AGREGANDO AL CARRITO

//-----------------------------------------------------------------------------------------------------------------

const calcularCosto = () => {

    let costo = 0

    for (producto of pedido){

        costo += producto.costo

    }
    costoPedido = costo
    return costoPedido

}

// EL METODO calcularCosto UTILIZA UN FOR PARA QUE VAYA RECORRIENDO Y VIENDO LA INFORMACION pedido de producto. LUEGO SUMA A UNA VARIABLE LOCAL CREADA LLAMADA let costo, EL COSTO DE CADA PRODUCTO Y REALIZA UNA SUMATORIA, PARA QUE NO NOS DE UN ERROR DE LOGICA CADA VEZ QUE LLAMAMOS A LA FUNCION calcularCosto Y VAYA CRECIENDO EL VALOR TOTAL, ASIGNAMOS EL VALOR DE costoPedido A costo Y LUEGO LO MOSTRAMOS POR PANTALLA

//----------------------------------------------------------------------------------------------------------------

const finalizarPedido = () => {
    calcularCosto() // POR SI EL USUARIO NO CALCULO EL COSTO DEL PEDIDO ANTES DE ESTA FUNCION.

    usuario.deuda = costoPedido

    pedido = []
    costoPedido = 0

    return usuario.nombre + " debes pagar " + usuario.deuda + " pesos."
}

//--------------------------------------------------------------------------------------------------------------


const pagarPedido = (montoEntregado) => {

    if (typeof montoEntregado === 'number' ) {

        if (montoEntregado < usuario.deuda) {
        
            return "No te alcanza para pagar la deuda"
    
        } else if (montoEntregado === usuario.deuda) {
            usuario.deuda = 0
            
            return "Tu pedido ha sido pagado."
    
        } else {
    
           console.log ("Tu pedido ha sido pagado y tu cambio es de " + (montoEntregado - usuario.deuda) + " pesos.")
           usuario.deuda = 0
           
           return "Deuda pagada"
    
        }


    } else {

        return "Dato ingresado incorrecto, por favor vuelva a intentarlo"

    }
    

}

//-------------------------------------------------------------------------------------------------------------




// HACER MONTO TOTAL DE VENTAS REALIZADAS

// REVISAR LA ULTIMA PARTE DE pagarPedido y cambiar if por foreach


