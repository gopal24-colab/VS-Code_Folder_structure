const data = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false,
        },
        {
          name: "hello.html",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "App.css",
          isFolder: false,
        },
        {
          name: "App.jsx",
          isFolder: false,
        },
        {
          name: "index.css",
          isFolder: false,
        },
        {
          name: "main.jsx",
          isFolder: false,
        },
      ],
    },
    {
      name: "node_modules",
      isFolder: true,
      items: [
        {
          name: "bin",
          isFolder: true,
          items: [],
        },
      ],
    },
    {
      name: ".gitignore",
      isFolder: false,
    },
    {
      name: "package.json",
      isFolder: false,
    },
    {
      name: "vite.config.js",
      isFolder: false,
    },
    {
      name: "yarn.lock",
      isFolder: false,
    },
  ],
};
export default data;
