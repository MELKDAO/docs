---
description: Configurar una nueva red y un nuevo token en la cartera.
---

# Misión 2

En esta misión entenderemos lo que son las diferentes redes y aprenderemos a visualizar en Metamask la cantidad de tokens que tenemos en nuestra cartera. Este es el primer paso para comenzar a administrar el saldo en tokens que tienes disponible para usar.

Para continuar con esta misión necesitas haber completado la Misión 1 de forma tal que asumo que ya instalaste Metamask y ya recibiste tu recompensa.

Entonces, ¡vamos allá!

{% hint style="info" %}
Las pantallas de esta misión fueron tomadas de Metamask desde el computador, en caso de que estés usando tu celular las pantallas pueden variar, pero la interfaz es muy parecida y podrás ejecutar todas las acciones sin ningún problema.
{% endhint %}

El mundo cripto funciona con una tecnología llamada blockchain. La blockchain es una base de datos que contiene la información de todas las transacciones que se han realizado hasta este momento. La blockchain no está en un servidor (computador) en un sólo lugar. Está distribuido en miles de computadoras, que a través de mecanismos de consenso garantizan la integridad de las operaciones.

La primer blockchain que existió fue el de Bitcoin, y poco después surgieron otras blockchains, como Ethereum por ejemplo. Cada blockchain es una base de datos diferente y posee diferentes transacciones. Entonces, en la práctica, siempre que recibes un token, estás recibiendo en una blockchain específica, o en “una cadena” específica o en “una red” específica. Estos son los nombres usados para la blockchain.

Cuando tú negocias Bitcoin (BTC), estas realizando transacciones en la base de datos de Bitcoin. Cuando intercambias Ether (ETH), estás realizando transacciones en la base de datos de Ethereum. No es posible nativamente (los expertos me disculpan aquí, por un momento) mover BTC de la red de Bitcoin a la red de Ethereum.

Cada blockchain tiene un formato de cartera y tiene un software diferente para manejar los tokens de tu cartera. El Metamask que instalaste en la Misión 1 es el software de administración de la cartera de blockchain Ethereum y de blockchain que se derivan de Ethereum. No puedes ver el saldo de Bitcoin (BTC) a través de Metamask, por ejemplo.

Cuando abrimos la pantalla de Metamask, vemos lo siguiente:

![](<../.gitbook/assets/Screenshot\_29\_01\_22\_16\_29 (1).png>)

{% hint style="info" %}
En mi pantalla a veces aparece Account 1 o Account 2, pero en tu pantalla siempre aparecerá Account 1, no te preocupes por eso.
{% endhint %}

Justo en la parte superior tiene escrito **Mainnet de Ethereum** y eso muestra a cuál blockchain está conectada en este momento. Como Metamask se creó para Ethereum, es esa blockchain la que aparece por defecto. Mainnet significa que es la red principal. Esto es porque también están las llamadas Testnets que solo existen para que los desarrolladores realicen pruebas antes de poner sus sistemas en ejecución en la red principal

En el centro ves 0 ETH que representa el saldo en ETH que tienes en esa cartera. Como no se ha hecho nada hasta ahora, tu saldo será cero. Dado que ETH es la moneda predeterminada de Ethereum, es esa moneda la que aparece en el medio.

Más abajo se muestra el listado de tokens que tienes en esta cartera. Como todavía no tienes nada, solo se muestra el ETH que ya viene configurado por ser la moneda por defecto y el saldo es cero, porque no has recibido nada todavía.

¡Pués bien! Si ya recibiste tus $MELKS de recompensa, ¿por qué no aparecen allí?

Hay dos razones por las que no puedes ver tus tokens MELK todavía. La primera razón es que el token MELK no es un token de la red Ethereum y la segunda razón es que no has incluido el token en la lista para que aparezca allí.

Los tokens que recibes no se almacenan en el software de Metamask. Una transferencia de tokens es una transacción que ocurre en la base de datos de la blockchain y que resulta en un saldo en tu cartera. Toda la información de transacciones y saldo quedan registradas en la blockchain y no en tu computador.

En otras palabras, cuando te transfiero un token, yo no te envío ningún archivo a tu computador. Por lo tanto, si tú formateas el computador, no pierdes tus tokens, siempre y cuando hayas guardado las palabras semillas.

Pierdes tus tokens si un día pierdes tus palabras semillas. Porque las palabras semillas son la clave para que puedas enviar una transacción a la blockchain que maneja los tokens de tu cartera.

Si estás confundido y tienes alguna pregunta sobre ese mecanismo, pregunta en el [canal de ayuda de la comunidad web3dev](https://discord.gg/w8smrfEpN4).

Como dije, el token MELK no es un token de la red Ethereum, es un token de la red Polygon. Polygon es una blockchain diferente de Bitcoin y de Ethereum, que se deriva de Ethereum y por eso puede ser manejado con Metamask.

Ahora vamos a seguir los pasos para configurar la red de Polygon en Metamask.

### 1. Configuración de la red Polygon

#### 1.1. Abre tu Metamask y haz clic en la red Mainnet Ethereum actual

![](../.gitbook/assets/Screenshot\_29\_01\_22\_16\_33.png)

#### 1.2.  Haz clic en Adicionar red

![](../.gitbook/assets/Screenshot\_29\_01\_22\_16\_34.png)

#### 1.3. Rellena los datos de la red Polygon

Metamask abrirá un formulario para que completes los datos de la red Polygon. Abajo están los datos que necesitas llenar en el formulario:

|                    |                                                              |
| ------------------ | ------------------------------------------------------------ |
| Network Name       | Mainnet de Polygon                                           |
| New RPC URL        | [https://polygonscan-rpc.com/](https://polygonscan-rpc.com/) |
| Chain ID           | 137                                                          |
| Currency Symbol    | MATIC                                                        |
| Block Explorer URL | [https://polygonscan.com](https://polygonscan.com)           |

{% hint style="info" %}
La RPC URL puede dar error en el momento de la importación de la red Polygon. Por esa razón, te ofrecemos aquí algunas URLs alternativas para resolver este problema. Estos enlaces fueron tomados directamente de la [Documentación de la red Polygon.](https://docs.polygon.technology/docs/develop/network-details/network/)

[https://rpc-mainnet.matic.network](https://rpc-mainnet.matic.network)

[https://matic-mainnet.chainstacklabs.com](https://matic-mainnet.chainstacklabs.com)

[https://rpc-mainnet.maticvigil.com](https://rpc-mainnet.maticvigil.com)

[https://rpc-mainnet.matic.quiknode.pro](https://rpc-mainnet.matic.quiknode.pro)
{% endhint %}

{% hint style="warning" %}
Un proveedor de red malicioso puede mentir sobre el estado de la blockchain y grabar la actividad de tu red. Agrega sólo las redes en las que tú confías.
{% endhint %}

Presta atención a las mayúsculas y las minúsculas. El formulario se verá así:

![](../.gitbook/assets/Screenshot\_29\_01\_22\_16\_47.png)

Haz clic en Guardar.

#### 1.4. ¡Listo! Ya registraste la red Polygon en tu Metamask

Metamask regresará a la pantalla de la cartera con el mensaje de éxito.

![](<../.gitbook/assets/Screenshot\_29\_01\_22\_16\_49 (2).png>)

Mira como ahora la red Polygon estará seleccionada y por eso, en el medio de la pantalla no ves más el 0 ETH sino más bien 0 MATIC. Esto es porque MATIC es la moneda predeterminada de la red Polygon.

Toma en consideración que en la lista de tokens sólo aparece el token MATIC con saldo cero. Ya no ves el token ETH. Porque ese token sólo está configurado en tu cartera de la red Ethereum.

![](<../.gitbook/assets/Screenshot\_29\_01\_22\_16\_49 (3).png>)

Como la red Polygon se deriva de la red Ethereum, la misma dirección pública de tu cartera y la misma clave privada con las mismas palabras semillas funcionan para ambas redes.

Si observas la dirección justo abajo del nombre de tu cuenta, verás que sigue siendo la misma dirección pública que estaba presente en la red Ethereum.

En cualquier momento puedes cambiar de red haciendo clic en la red actual en la parte superior de la pantalla.

### 2. Incluyendo el token MELK

Ahora vamos a incluir el token MELK para poder ver el saldo que tienes. Dado que ya recibiste la recompensa de la misión anterior, tu cartera tendrá un saldo de este token.

Como dije antes, el token no se encuentra en tu computador como un archivo, es el resultado de las transacciones que se efectúan en la blockchain. Tu Metamask no sabe lo que sucedió por allá, tú necesitas informarle que deseas consultar un determinado token para ver cuánto saldo de ese token tiene tu cartera. Para hacer eso sigue los pasos a continuación.

#### 2.1. Haz clic en Import tokens

![](<../.gitbook/assets/Screenshot\_29\_01\_22\_16\_49 (1).png>)

#### 2.2. Rellena los datos del token

Cada token es un smart contract, es decir, un software, un código de programación que está en la blockchain. Cada contrato tiene una dirección que es un código similar a la dirección pública de tu cartera. Para importar un token necesitas saber cuál es la dirección del token.

Los siguientes son los datos del token MELK.

|                                  |                                              |
| -------------------------------- | -------------------------------------------- |
| Dirección del contrato del token | `0x9fd41f6f67d4438f0e3dc3951eae0ad2093492dd` |
| Símbolo del token                | MELK                                         |
| Decimal del Token                | 18                                           |

Rellena el campo de la dirección del contrato del token con el valor que está abajo:

`0x9fd41f6f67d4438f0e3dc3951eae0ad2093492dd`

Al rellenar la dirección, Metamask ya hace una consulta la blockchain y recupera el símbolo y el decimal del token.

![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_03.png)

¡Después de hacer clic en **Add Custom Token** ya verás tu saldo de MELK!

#### 2.3. Haz clic en **Import Token**

![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_05.png)

Después de importar el token, Metamask mostrará la pantalla del token con tu saldo justo en el medio. Luego puedes hacer clic en la flecha para regresar a la cuenta que veías en la pantalla de inicio ya con el token importado.

![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_08.png) ![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_07.png)

#### 2.4. ¡Felicidades! ¡Has importado el token MELK

Listo, ahora puedes realizar un seguimiento a tu saldo de MELK. Como puedes ver, yo he recibido 1.003 token MELK por haber realizado la misión 1.

Pero espera. ¿La recompensa de la misión 1 no era de 1 token? ¡Si, es verdad! Pero en realidad yo pase un poquito más, justamente para que nos pudiéramos validar en la misión 2 :)

### 3. Envía a discord tu saldo en MELK para recibir la recompensa de esta misión

Dirígete al [canal de la Misión 2 del Experimento MELK en discord](https://discord.gg/uDyHmwBw6E) y envía un mensaje con el valor exacto que recibiste de recompensa por la misión anterior. Escribe exactamente como aparece en Metamask, es decir, el valor con 3 decimales y usando punto como separador. En mi caso el mensaje que tendría que enviar sería este:

> 1.003 Cualquier pregunta que tengas, puedes hacerla en el canal de ayuda.

{% hint style="info" %}
En esta misión tuvimos 2 aprendizajes:

1. El primero fue sobre las diferentes redes y cómo configurar una red nueva en Metamask y;
2. El segundo fue cómo configurar un nuevo token en Metamask.
{% endhint %}

