const express = require("express");
const app = express();
const fs = require(`fs`);




app.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + "/public"})
});

app.get(`/img/:img`, (req, res) => {
	const imgName = req.params.img;
	if (!fs.existsSync(`./img/${imgName}`)) return res.end(400, `Invalid Image`);
	else return res.sendFile(`${imgName}`, {root: __dirname + `/public/img`});
})

app.listen(8080, () => console.log(`Server listening at 8080!`));
