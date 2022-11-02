module.exports = {
    title: "Escola WEB3 - MELK DAO",
    theme: "reco",
    base: process.env.BASE_PATH || "/",
    dest: "/dist",

    head: [
        // ["link", { rel: "icon", href: "/favicon.ico" }],
        [
          "meta",
          {
            name: "viewport",
            content: "width=device-width,initial-scale=1,user-scalable=no",
          },
        ],
    ],
    
    locales: {
        "/": {
          lang: "pt-BR",
        },
    },
    
    themeConfig: {
        // logo: "/logo-blue-w3d.png",
        // logoDark: "/logo-blue.png",
        lastUpdated: true,
        editLinks: false,
        sidebar: "auto",
    
        author: "MELKDAO Team",
        repo: "https://github.com/web3melk/melk-dao-docs.git",
    
        locales: {
          "/": {
            label: "Português",
            nav: [
              {
                text: "Site Oficial",
                link: "https://www.melkdao.com",
                target: "_self",
                rel: "",
                icon: "reco-home",
              },
              {
                text: "Discord",
                link: "https://discord.web3dev.com.br/",
                target: "_blank",
                rel: "",
              },
              { text: "Índice", link: "/" },
            ],
            sidebar: require("./config/sidebar-pt"),
          },
        },
      },
    }