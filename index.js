const Koa = require("koa");
const Log = require("./log");
const router = require("./router");
const mongoose = require("mongoose")
const dotenv = require("dotenv");

dotenv.config();


const app = new Koa();


const PORT = process.env.PORT || 4040;


app.use(router.routes())


app.listen(PORT, async () => {
    await mongoose.connect(process.env.mongodb_url);
    Log(`Server running in port ${PORT}, http://localhost:${PORT}`)
})