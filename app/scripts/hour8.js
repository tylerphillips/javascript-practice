var jsonObject = {
	"param1" : "value1",
	"param2" : "value2",
	"param3" : "value3"
}
// alert(jsonObject.param1); // alerts "value1"

// JSON.parse()

var Mary = '{"height": 1.9, "age": 39, "eyeColor": "brown"}';
var myObject = JSON.parse(Mary);
var out = " ";
for (i in myObject) {
	out += i + " = " + myObject[i] + "\n";
}
alert(out);