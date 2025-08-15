require("dotenv").config();
const app = require("./src/app.js");
const initData = require("./src/config/initData.js");

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  await initData(); 
  console.log(`Server is running on port ${PORT}`);
});
