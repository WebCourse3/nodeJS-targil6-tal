var heroes = [
	{id: 1, name: 'aviv'},
	{id: 2, name: 'saar'},
	{id: 3, name: 'kosta'}
];
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/heroes', (req, res) => {
	res.send(heroes);
});

app.get('/heroes/:id', function (req, res) {
	var id = Number.parseInt(req.params.id);
	var herofind = heroes.find((hero) => {
		return hero.id == id;
});
	res.send(herofind);
});

app.put('/heroes/:id', function (req, res) {
	var id = Number.parseInt(req.param('id'));
	var heroFind = heroes.find((hero) => {
		return hero.id === id;
});
	heroFind.name = req.query.name;
	res.send(heroFind);
});

app.post('/heroes', function (req, res) {
	var hero = req.body;
	heroes.push(hero);
	res.send(heroes);
});

app.delete('/heroes/:id', function (req, res) {
	var id = Number.parseInt(req.param('id'));
	var heroFind = heroes.find((hero) => {
		return hero.id === id;
});
	var index = heroes.indexOf(heroFind);
	heroes.splice(index, 1);
	res.send(heroes);
});

app.delete('/heroes', function (req, res) {
	var name = req.query.name;
	name=name.toLowerCase();
	var heroFind = heroes.find((hero) => {
		var nam2=hero.name.toLowerCase();
	if(nam2==name)
		return hero;
});
	var index = heroes.indexOf(heroFind);
	heroes.splice(index, 1);
	res.send(heroes);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});



