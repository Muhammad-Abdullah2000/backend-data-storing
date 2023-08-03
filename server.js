const app = require('./app');
const ConnectDB = require('./config/db.js');





ConnectDB();

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})