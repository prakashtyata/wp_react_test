const settings = {
  name: "codesandbox-frontity",
  state: {
    frontity: {
      url: "https://wprevamp.com/projects/directory2/dev_react/",
      title: "Prakash Tyata WordPress to React Test",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["Sample Page", "/sample-page/"],
            ["Page", "/page/"],
            ["About Us", "/about/"]
          ],
          featured: {
            showOnList: false,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://wprevamp.com/projects/directory2/dev_react/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
