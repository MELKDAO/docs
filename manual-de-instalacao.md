---
description: >-
  Este manual destina-se a administradores de servidores que desejam instalar o
  MelkBot para sua comunidade no Discord. Se você é um usuário, não há
  necessidade de seguir essas instruções.
---

# 🖥 Manual de Instalação

A instalação do Melk Bot é simples, e consiste em dois passos: 1/ acessar o link de autorização do discord e 2/ rodar o comando de instalação dentro do Discord.&#x20;

### Autorizando o bot

Entre [nesse link](https://discord.com/api/oauth2/authorize?client\_id=933510731398266880\&permissions=534723947600\&scope=bot) da aplicação e escolha o servidor que você deseja instalar o bot. Depois, clique em \[Continue]. Quando clicar, as permissões que o bot utiliza vão aparecer. Vou explicar as permissões necessárias para fins de segurança e confiabilidade:

* **Manage Channels (gerenciar canais):** Essa permissão é necessária para a criação de categorias e canais do Discord que servirão de porta de validação de cada missão. Quando configurar o bot, ele vai criar uma categoria específica do projeto e todos os canais das missões dentro da categoria.
* **Read Messages (ler mensagens):** Ler mensagens é necessário para que possamos pegar a prova de missão dos usuários, validar e enviar a recompensa em MELK baseado na mensagem.
* **Permissões de Thread (Send messages in threads, create public threads, create private threads, manage threads):** Essas permissões são usadas para possíveis casos futuros de criação de threads.
* **Manage Messages (gerenciar mensagens)**: precisamos dessa permissão para gerenciar as mensagens, armazenar o ID delas no banco de dados para posterior checagem. As únicas mensagens que gerenciamos são dentro dos canais do projeto.
* **Embed Links (embutir links):** essa permissão é necessária para colocarmos os links externos de cada missão que direcionam para o nosso site (atualmente no gitbook).
* **Attach Files (enviar arquivos):** arquivos podem ser enviados nas mensagens do bot, referindo-se a imagens, PDFs ou outros arquivos referentes às aulas.
* **Read Message History (ler histórico de mensagens):** utilizamos para re-processar mensagens antigas que por algum motivo não foram processadas e enviar recompensas.
* **Mention @everyone @here and All Roles (mencionar as roles):** utilizamos para anunciar as missões, notificando os usuários
* **Add reactions (adicionar reações):** usamos as reações para informar os usuários sobre o resultado das missões (validar, mensagem inválida, etc)
* **Use External Emoji/Stickers (usar emojis ou adesivos externos):** enviar emojis e adesivos nas mensagens, estético
* **Use application commands (usar comandos de aplicação):** rodar comandos de aplicação padrão\


**Nota: caso queira, você pode mudar permissões específicas de outras categorias, de maneira que as permissões acima existam apenas na categoria do projeto.**

Depois de autorizar, provavelmente você terá que passar pelo “captcha” e em seguida receberá uma notificação de que o bot entrou no seu servidor. Certifique-se de que o bot está no seu servidor, ele aparecerá na lista de membros.

### Configurando o bot

A configuração do bot é simples e automatizada. Para configurar, digite !melk configServer

em um canal público. Você só pode rodar esse comando se for o dono do servidor. Se tudo der certo, as categorias e os canais devem ser criados. Caso algo dê errado, contate a equipe.

{% hint style="info" %}
Depois de criados, os canais ficam fora de ordem devido a um problema na API do Discord. Por isso, é necessário organizá-los por ordem de missão. Para isso é só clicar no canal da missão e arrastar para a ordem correta.
{% endhint %}

\
