// ecosystem.config.js
const os = require("os");

module.exports = {
  apps: [{
    name: "colyseus",
    script: "./app/public/dist/server/app/index.js", // your entrypoint file
    instances: os.cpus().length,
    exec_mode: "fork",         // IMPORTANT: do not use cluster mode.
    watch: false,
    time: true,
    wait_ready: true,
    env_production: {
      NODE_ENV: "production"
    },
    interpreter: "node@20.12.2"
  }],
  deploy: {
    production: {
      "key"  : "C:/Users/maxim/.ssh/id_rsa",
      "user": "root",
      "host": ["89.116.110.190"],
      "ref": "origin/prod",
      "repo": "https://github.com/Mjaffres/pokemonAutoChess.git",
      "path": "/home/pac",
      "post-deploy": "nvm use 20.16 npm install && npm run assetpack && npm run build"
    }
  }
}