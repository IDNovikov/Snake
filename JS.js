let table = document.querySelector("#field_table")
let field=[]
let i = 0
for(let y=0; y<=24; y++){
let tr = document.createElement('tr')
for(let x=0; x<=24; x++) {
let td = document.createElement('td')
tr.appendChild(td)
td.id='x'+x
field.push([y,x])
}
table.appendChild(tr)
tr.id="y"+y
}
let body = [["y7","x8"],["y7","x7"],["y7","x6"]]
let reg = /x|y/
let score=0
let food = []
let randoom = function getRandomInt (min, max) {
food=[]
let yR = Math.floor(Math.random()*(max-min+1))+min;
let xR = Math.floor(Math.random()*(max-min+1))+min;
food.push("y"+yR)
food.push("x"+xR)
body.forEach(function (elem) {
if(JSON.stringify(elem)===JSON.stringify(food)) {
return randoom (0, 24) }})
} 
randoom (0, 24)
function growUp (body, food) {
if (body[0][0]==food[0]&&body[0][1]==food[1]) {
body.unshift(food)
randoom (0, 24)
score+=1
console.log(score)
}
}
function colored (){
let foodStr = document.querySelector("#"+String(food[0]))
let target = foodStr.querySelector("#"+String(food[1]))
target.className="red"
for(block of body) {
let snk = document.querySelector("#"+String(block[0]))
let head = snk.querySelector("#"+String(block[1]))	
head.className="red"
}
}
function makeWhite() {
let td = document.querySelectorAll("td")
for(elem of td){
elem.classList.remove("red")
}}
let x1 = 1
let y1 = 0
function step1(piece, Xx, Yy) {
piece.push("y"+Yy)
piece.push("x"+Xx)
body.unshift(piece)
body.pop(body)}
function step (body, x,y) {
for(let i=2; i<=body.length; i++){
if(JSON.stringify(body[0])===JSON.stringify(body[i])){
alert("Gay-m Over((( Your score: "+score)}}
let Xx
let Yy
let piece = new Array
Xx=Number(body[0][1].replace(reg,""))
Yy=Number(body[0][0].replace(reg,""))	
if(Xx==24&&x==1){
Xx=0 
step1(piece, Xx, Yy)
} 
else if(Xx==0&&x==-1){
Xx=24
step1(piece, Xx, Yy)
}
else if(Yy==0&&y==-1){
Yy=24
step1(piece, Xx, Yy)
}
else if(Yy==24&&y==1){ 
Yy=0
step1(piece, Xx, Yy)
}
else{
Xx+=x; 
Yy+=y
step1(piece, Xx, Yy)
}
}
let int = setInterval(move, 100)
async function move () {
try{
addEventListener("keydown", function(event){
if(event.keyCode==37&&x1!==1){
x1 = -1
y1 = 0
}
if(event.keyCode==38&&y1!==1){
y1 = -1
x1 = 0
}
if(event.keyCode==39&&x1!==-1){
x1 = 1
y1 = 0
}
if(event.keyCode==40&&y1!==-1){
y1 = 1
x1 = 0
}
})
await growUp(body, food)
await step(body, x1, y1)
await makeWhite()
await colored()
await win(score)
}
catch (error){
console.log(body)
console.log(error)
clearInterval(int)}}
function win (score) {
if (score===575) {alert("Are u winning son?")}}