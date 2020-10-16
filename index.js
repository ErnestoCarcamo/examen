//importar
const express = require("express");
const exphbs = require("express-handlebars");
const { calcularInteresCompuesto, calculoInteresCompuesto } = require("./calculoInteresCompuesto");
const app = express();
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res,next)=>{
    res.render(calculo_interes_compuesto);
});
app.listen(9500,()=>{
    console.log("Servidor ejecutandose, puerto 9500");
});