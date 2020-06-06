const app = require("./app");

const PORT = process.env.DB_PORT || 8080;
app.listen(PORT, console.log(`listening on port: 8080`));
