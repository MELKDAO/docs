---
description: >-
  This manual is intended for server administrators who wish to install the
  MelkBot and make it available for their Discord community. If you are a user,
  there is no need to follow these instructions.
---

# 🖥 Installation Manual

Installing the Melk Bot is simple and consists of two steps: 1/ accessing the Discord authorization link and 2/ running the installation command within Discord.&#x20;

\
Authorizing the bot
-------------------

Enter this application [link](https://discord.com/oauth2/authorize?client\_id=933510731398266880\&permissions=534723947600\&scope=bot) and choose the server you want to install the bot on. Then click \[Continue]. Once you click, the permissions used by the bot will appear. I will explain the required permissions for security and reliability purposes:\


* **Manage Channels**: This permission is required for creating Discord categories and channels that will serve as the validation gateway for each mission. Once you configure the bot, it will create a project-specific category and all the mission channels within the category.
* **Read Messages:** Read messages is required for us to take the users' proof of mission, validate it, and send the reward in MELK based on the message.
* **Thread Permissions** (Send messages in threads, create public threads, create private threads, manage threads): These permissions are used in case of an eventual creation of  threads.
* **Manage Messages**: We need this permission to manage messages and store their ID in the database for later checking. The only messages we manage are the ones in the project channels.
* **Embed Links:** This permission is needed for us to embed external links from each mission that  point to our website (currently in gitbook).
* **Attach Files:** files can be sent in bot messages, referring to images, PDFs or other files related to the lessons.
* **Read Message History:** we use it to re-process old messages that, for some reason, were not processed and to send rewards.
* **Mention @everyone @here and All Roles:** we use this to announce missions, notifying users.
* **Add reactions:** we use reactions to inform users about the result of quests (to validate, invalid message, etc)
* **Use External Emoji/Stickers:** send emojis and stickers in messages, aesthetic
* **Use application commands:** run standard application commands\


**Note: if you wish, you can change specific permissions of other categories, so that the above permissions will exist only in the category of the project.**

Once approved, you will probably have to go through the "captcha", and then you will receive a notification that the bot has joined your server. Make sure the bot is on your server. It will appear in the member list.

## Setting up the bot

Bot configuration is simple and automated. To configure it, type !melk configServer

on a public channel. You can only run this command if you are the owner of the server. If everything goes well, the categories and channels should be created. If something goes wrong, contact the team.



{% hint style="info" %}
Once created, the channels are out of order due to an issue with the Discord API. Therefore, it is necessary to arrange them according to the mission order. To do this, just click on the mission channel and drag it to the correct order.
{% endhint %}

\
