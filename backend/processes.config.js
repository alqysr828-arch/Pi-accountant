module.exports = {
  apps: [
    {
      name: "pi-accountant-backend",
      script: "dist/index.js",
      instances: "1",
      exec_mode: "fork",
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
