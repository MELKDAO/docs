---
description: Configurar uma nova rede e um novo token na carteira.
---

# Missão 2

Nesta missão vamos entender o que são as diferentes redes e vamos aprender como visualizar na Metamask a quantia de tokens que temos em nossa carteira. Este é o primeiro passo para você começar a gerenciar o saldo em tokens que você tem à disposição para usar.

Para seguir com essa missão você precisa ter realizado a [Missão 1](missao-1/) então estou considerando que você já instalou a Metamask e já recebeu sua recompensa.

Então vamos lá!

{% hint style="info" %}
As telas dessa missão foram tiradas da Metamask do computador, caso você use o celular as telas não serão idênticas, mas a interface é muito similar e você conseguirá executar todas as ações sem problema.
{% endhint %}

O mundo cripto funciona com uma tecnologia chamada blockchain. O blockchain é uma base de dados que possui a informação de todas as transações que já foram realizadas até o momento. O blockchain não está em um servidor (computador) em algum lugar único. Ele é distribuído em milhares de computadores, que através de mecanismos de consenso garantem a integridade das operações.

O primeiro blockchain que existiu foi o do Bitcoin, e logo depois surgiram diversos outros blockchains, como o Ethereum, por exemplo. Cada blockchain é uma base de dados diferente e possui transações diferentes. Então, na prática, sempre que você recebe um token, você está recebendo em um blockchain específico, ou em "uma chain" específica ou em "uma rede" específica. Esses são os nomes usados para o blockchain.

Quando você transaciona Bitcoin (BTC), você está realizando transações na base de dados do Bitcoin. Quando você transaciona Ether (ETH) você está realizando transações na base de dados do Ethereum. Não é possível nativamente (os experts me dêem licença aqui, por um minuto) mover BTC da rede do Bitcoin para a rede do Ethereum.

Cada blockchain tem um formato de carteira e tem um software diferente para manipular os tokens da sua carteira. A Metamask que você instalou na Missão 1 é o software para gerenciamento da carteira do blockchain Ethereum, e de blockchains que foram derivados do Ethereum. Você não consegue visualizar saldo de Bitcoin (BTC) pela Metamask, por exemplo.

Quando a gente abre a tela da Metamask a gente vê o seguinte:

![](../.gitbook/assets/Screenshot\_29\_01\_22\_16\_29.png)

{% hint style="info" %}
Na minha tela as vezes aparece Account 1 ou Account 2, mas na sua vai aparecer sempre Account 1, não se preocupe com isso.
{% endhint %}

Bem no topo tem escrito **Mainnet do Ethereum** e isso mostra em qual blockchain ela está conectada no momento. Como a Metamask foi feita para o Ethereum, é esse blockchain que aparece por padrão. Mainnet siginifica que é a rede principal. Isso porque também existem as chamadas Testnets que existem apenas para os desenvolvedores fazerem testes antes de colocar seus sistemas para rodar na rede principal.

No centro você vê 0 ETH que representa o saldo em ETH que você tem nessa carteira. Como nada foi feito até agora, o seu saldo vai estar zerado. Como o ETH é a moeda padrão da Ethereum, é essa moeda que aparece no meio.

Mais abaixo ele mostra a listagem de tokens que você tem nesta carteira. Como ainda não tem nada, ele mostra somente o ETH que já vem configurado por ser a moeda padrão e o saldo zerado, porque você não recebeu nada ainda.

Pois bem! Se você já recebeu os seus $MELKs de recompensa, por que eles não aparecem ali?

Existem dois motivos para que você não consiga ver os seus tokens MELK ainda. O primeiro motivo é que o token MELK não é um token da rede Ethereum e o segundo motivo é que você ainda não incluiu o token na listagem para ele aparecer ali.

Os tokens que você recebe não ficam no software da Metamask. Uma transferência de tokens é uma transação que ocorre na base de dados do blockchain e que resulta em um saldo na sua carteira. Toda a informação de transações e saldo ficam registradas no blockchain e não no seu computador.

Em outras palavras, quando transfiro um token para você, eu não mando nenhum arquivo para o seu computador. Por isso, se você formatar o computador, você não perde os seus tokens, desde que você tenha salvo as palavras sementes.

Você perde os seus tokens se um dia você perder suas palavras sementes. Porque as palavras sementes são a chave para que você consiga enviar uma transação para o blockchain que manipule os tokens da sua carteira.

Se ficar confuso e você tiver alguma dúvida sobre esse mecanismo, pergunte lá no [canal de ajuda da comunidade web3dev](https://discord.gg/w8smrfEpN4).

Como eu disse, o token MELK não é um token da rede Ethereum, ele é um token da rede Polygon. Polygon é um blockchain diferente do Bitcoin e do Ethereum e que foi derivado do Ethereum e por isso pode ser manipulado com a Metamask.

Vamos agora seguir os passos para configurar a rede da Polygon na Metamask.

### 1. Configurando a rede Polygon

#### 1.1. Abra a sua Metamask e clique na rede atual Mainnet Ethereum

![](../.gitbook/assets/Screenshot\_29\_01\_22\_16\_33.png)

1.2. Clique em Adicionar Rede

![](<../.gitbook/assets/Screenshot\_29\_01\_22\_16\_34 (1).png>)

#### 1.3. Preencha os dados da rede Polygon

A Metamask vai abrir um formulário para você preencher os dados da rede Polygon. Abaixo estão os dados que você precisa preencher no formulário:

|                    |                                                              |
| ------------------ | ------------------------------------------------------------ |
| Network Name       | Mainnet da Polygon                                           |
| New RPC URL        | [https://polygonscan-rpc.com/](https://polygonscan-rpc.com/) |
| Chain ID           | 137                                                          |
| Currency Symbol    | MATIC                                                        |
| Block Explorer URL | [https://polygonscan.com](https://polygonscan.com)           |

{% hint style="info" %}
O RPC URL pode dar erro na hora da importação da rede Polygon. Por esse motivo, disponibilizamos aqui alguns RPC URLs alternativos para resolver esse problema. Esses links foram retirados diretamente da [Documentação da rede Polygon.](https://docs.polygon.technology/docs/develop/network-details/network/)

[https://rpc-mainnet.matic.network](https://rpc-mainnet.matic.network)

[https://matic-mainnet.chainstacklabs.com](https://matic-mainnet.chainstacklabs.com)

[https://rpc-mainnet.maticvigil.com](https://rpc-mainnet.maticvigil.com)

[https://rpc-mainnet.matic.quiknode.pro](https://rpc-mainnet.matic.quiknode.pro)
{% endhint %}

{% hint style="warning" %}
Um provedor de rede mal-intencionado pode mentir sobre o estado do blockchain e gravar a atividade da sua rede. Adicione somente as redes em que você confia.
{% endhint %}

Preste atenção às maiúsculas e minúsculas. O formulário vai ficar assim:

![](../.gitbook/assets/Screenshot\_29\_01\_22\_16\_47.png)

Clique em Salvar.

#### 1.4. Pronto! Você já cadastrou a rede Polygon na sua Metamask

A metamask já vai retornar para a tela da carteira com a mensagem de sucesso.

![](../.gitbook/assets/Screenshot\_29\_01\_22\_16\_49.png)

Veja que agora a rede Polygon estará selecionada e por conta disso, no meio da tela você não vê mais o 0 ETH mas sim 0 MATIC. Isso porque MATIC é a moeda padrão da rede Polygon.

Perceba também que na listagem de tokens só aparece o token MATIC com o saldo zero. Você não visualiza mais o token ETH. Por que esse token está configurado apenas na sua carteira da rede Ethereum.

![](<../.gitbook/assets/Screenshot\_29\_01\_22\_16\_49 (2).png>)

Como a rede Polygon foi derivada da rede Ethereum o mesmo endereço público da sua carteira e a mesma chave privada, com as mesmas palavras sementes funcionam para ambas as redes.

Se você olhar o endereço logo abaixo do nome da sua conta, perceberá que permanece o mesmo endereço público que estava presente na rede Ethereum.

A qualquer momento você pode mudar de rede clicando na rede atual lá em cima da tela.

### 2. Incluindo o token MELK

Agora vamos incluir o token MELK para conseguir visualizar o saldo que você tem. Dado que você já recebeu a recompensa da missão anterior, a sua carteira terá um saldo deste token.

Como falei antes, o token não fica no seu computador como um arquivo, ele é resultante das transações que acontecem lá no blockchain. A sua Metamask não sabe o que aconteceu por lá, você precisa informá-la que quer consultar um determinado token para ver o quanto deste token a sua carteira tem de saldo. Para fazer isso siga os passos abaixo.

#### 2.1. Clique em Import tokens

![](<../.gitbook/assets/Screenshot\_29\_01\_22\_16\_49 (1).png>)

#### 2.2. Preencha os dados do token

Todo token é um smart contract, ou seja, um software, um código de programação que está na blockchain. Cada contrato possui um endereço que é um código similar ao seu endereço público da carteira. Para importar um token você precisa saber qual é o endereço do token.

Seguem os dados do token MELK.

|                               |                                              |
| ----------------------------- | -------------------------------------------- |
| Endereço do contrato do token | `0x9fd41f6f67d4438f0e3dc3951eae0ad2093492dd` |
| Símbolo do token              | MELK                                         |
| Decimal do Token              | 18                                           |

Preencha o campo do endereço do contrato do token como o valor abaixo:

`0x9fd41f6f67d4438f0e3dc3951eae0ad2093492dd`

Ao preencher o endereço, a Metamask já faz uma consulta ao blockchain e recupera o símbolo e o decimal do token.

![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_03.png)

Depois de clicar em **Add Custom Token** você já vai ver o seu saldo de MELK!

#### 2.3. Clique em **Import Token**.

![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_05.png)

Após importar o token, a Metamask mostrará a tela do token com o seu saldo bem no meio. Você pode então clicar na setinha para voltar para a conta que verá a tela inicial já com o token importado.

![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_08.png) ![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_07.png)

#### 2.4. Parabéns! Você importou o token MELK!

Prontinho, você agora pode acompanhar o seu saldo de MELK. Como você pode ver, eu recebi 1.003 token MELK por ter realizado a missão 1.

Mas espera aí. A recompensa da missão 1 não era de 1 token? Sim, é verdade! Mas na realidade eu passei um pouquinho mais, justamente para que nós pudéssemos validar essa missão 2 :)

### 3. Manda lá no discord o seu saldo em MELK para receber a recompensa dessa missão

Vá até o [canal da Missão 2 do Experimento MELK no discord](https://discord.gg/uDyHmwBw6E) e mande uma mensagem com o valor exato que você recebeu de recompensa pela missão anterior. Escreva exatamente como aparece na Metamask, ou seja, o valor com 3 casas decimais e usando ponto como delimitador. No meu caso a mensagem que eu teria que enviar seria essa:

> 1.003

Qualquer dúvida, fique a vontade para falar no canal de ajuda.

{% hint style="info" %}
Nesta missão tivemos 2 aprendizados:

1. O primeiro foi sobre as diferentes redes e como configurar uma rede nova na Metamask e;
2. O segundo foi sobre como configurar um novo token na Metamask.
{% endhint %}
