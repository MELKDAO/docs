---
description: Aprendiendo a firmar transacciones con MetaMask
---

# Misión 5

Estamos aprendiendo muchas cosas nuevas. En la última misión, entendimos el explorador de Polygon, Polygonscan, y aprendimos a visualizar nuestras transacciones en detalle, entendiendo todos los campos y lo que significan.

Hoy vamos a presentar un nuevo concepto, el de firmar transacciones usando MetaMask, que creamos en la misión 1.

Como ya hemos aprendido, una blockchain se compone de numerosos bloques de transacciones, y para cada transacción es necesario usar gas para completarla. Actualmente no tenemos gas en nuestra billetera, ya que el token MELK no tiene valor financiero y en la red Polygon el token que se usa para pagar las tarifas de gas es MATIC.

Sin embargo, existe un tipo de operación que se ajusta al concepto de _gas free_, es decir, no es necesario utilizar gas para ejecutarse. Son las firmas.

### 1. ¿Qué son las firmas?

Las firmas se utilizan desde hace mucho tiempo en nuestra sociedad, y sirven como mecanismo de autenticación, acreditando tu identidad a través de una firma. En el mundo web3 también tenemos este proceso de firma, muy utilizado en los sistemas de inicio de sesión. Para ello disponemos de una imagen común del paradigma de inicio de sesión en las diferentes fases de la web:

![paradigma de inicio de sesión](<../.gitbook/assets/image (13) (3).png>)

Las firmas sirven para demostrar que eres el propietario de la billetera, es decir, que tienes la clave privada, que a menudo se usa para iniciar sesión en los sistemas, como se muestra en el paradigma anterior.

Con la llegada de web3, el inicio de sesión será mucho más sencillo, usando firmas para probar identidades. Además de ser un formato mucho más rápido y cómodo, es tan seguro como los métodos antiguos.

En la misión de hoy, vamos a aprender en la práctica cómo firmar un mensaje usando Metamask.

{% hint style="danger" %}
Recuerda: Ten cuidado donde conectas tu billetera para la autenticación. Los sitios web maliciosos pueden usar tus datos con fines dañinos.
{% endhint %}

### 2. Aprendiendo a firmar un mensaje

Para esta misión, creamos un sitio web especial para interactuar con Metamask y firmar un mensaje.

Para acceder al sitio web, visita: [https://missions.melkdao.com](https://missions.melkdao.com)

Tu pantalla debería verse así:

![](<../.gitbook/assets/image (11) (3) (1).png>)

Primero, lee las notas para la misión 5. Hemos especificado algunos detalles importantes sobre cómo funcionará esta misión y a qué tendremos acceso.

Ten en cuenta que al final de la pantalla tenemos un botón, donde está escrito 'Firmar mensaje':

![botón de firmar mensaje](../.gitbook/assets/button.jpg)

Haz clic en ese botón. En tu pantalla, debería aparecer una ventana emergente de Metamask. Si no ha aparecido, comprueba si no tienes alguna notificación en la extensión de Chrome.

Si no has iniciado sesión en Metamask, tu pantalla se verá así:

![](<../.gitbook/assets/image (53).png>)

Entendamos lo que está sucediendo aquí.

Metamask solicita la contraseña de desbloqueo de la billetera, la cual sirve para que inicies sesión en tu cuenta de Metamask.

Si ya has iniciado sesión en Metamask, esta pantalla no aparecerá.

### 3. Consentimiento de la conexión

El segundo paso es el consentimiento que le das al sitio para que pueda leer tu dirección pública y con eso pueda identificar el saldo de tu billetera.

![](../.gitbook/assets/metamask.jpg)

Haz clic en Connect para continuar.

### 4. Firmando el mensaje

La siguiente pantalla es la solicitud de firma y se verá como esta imagen:

![](<../.gitbook/assets/image (24) (3).png>)

Es importante notar el título de la ventana que dice "Solicitud de Firma".

También ten en cuenta que el mensaje que estás firmando aparece en esta pantalla, en este caso es el "Experimento MELK".

El botón también es bastante sencillo y dice "Firmar". Cuando te encuentres con una solicitud como esta, ten la seguridad de que no corres el riesgo de gastar dinero o perder monedas de tu billetera.

Haz clic en Firmar y tu pantalla se actualizará.

![](<../.gitbook/assets/image (10) (1) (1).png>)

Para copiar el hash de la firma, haz clic en él:

![](<../.gitbook/assets/image (5) (1).png>)

¡Felicidades! Hiciste tu primera firma con tu billetera. No se registró información en Blockchain, por lo que no hubo necesidad de pagar tarifas ni gasolina.

El sitio ahora tiene el _hash_ de la firma que realizó y, al conocer el mensaje que se firmó, puede validar que tú eres el titular de la clave privada relativa a la dirección de la billetera pública.

Esto garantiza que solo tú y nadie más pueda generar este hash de firma. Este proceso prueba tu identidad. Es un sistema de inicio de sesión simple, efectivo y seguro.

Normalmente el hash de la firma no aparece en pantalla y no necesita ser manipulado por ti, pero en nuestro caso te lo mostramos para que puedas usarlo como prueba de la misión.

### 5. ¡Listo! Ahora envía el hash de la firma a Discord

Dirígete al canal de la misión 5 del Experimento MELK en discord y envía tu hash de suscripción para ganar 10 MELKs.

{% hint style="info" %}
¡Recordando! Esta misión no nos da acceso a ningún dato confidencial en tu billetera, solo tu dirección pública, saldo y permisos básicos de lectura para que el hash de la firma pueda generarse y usarse para verificar tu identidad.
{% endhint %}