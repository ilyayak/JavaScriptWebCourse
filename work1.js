const string = "Привет! Как дела?";
const str=(string.toLowerCase());
var lett = ['а','я','е','и','ё','ю','у','й','э','ы','о']; 
var k=0;
for (exp=0;exp<=lett.length;exp++){
  var b=0;
  var t=0;
  while (t!==-1){
    t=str.indexOf(lett[exp],b);
    var b=t+1;
    if (t>-1){
      console.log(lett[exp]);
    }
  }
}
