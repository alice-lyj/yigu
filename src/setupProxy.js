//反向代理
const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
    app.use("/api",proxy({
        target : "http://api.egu365.com",
        pathRewrite :{
           "/api":"/"
        },
        changeOrigin : true,
        secure: false
}))
}