let slider1 = document.getElementsByClassName("slider_body");
let slide = document.getElementsByClassName("slider");
let nav = document.getElementsByClassName("navi");
let btn2 = document.getElementsByClassName("sbtn");
let ci = 0;
let prev = 0;
let preprev = slide.length - 1;
var time = 0;
let u = 0;
let y = 1;
let f = 1;
let h = 1;
let g = 0;
let o = 1;
let z = 0;
let e = 0;
slide[slide.length -1].style.transition="0s";
slide[slide.length -1].style.transform="translateX(-122%)";
for( var i = 0; i<slide.length - 1; i++)
{
slide[i].style.transform = "translateX(122%)";
}
o = 1;
slideShow();
function currentSlide(n){
if(slide[n].style.transform != "translateX(0%)"){
ci = n;
ci= n;
chk();
clearTimeout(time);
e = 1;
slideShow();
}
}
function delay(){
if(e === 0)
{
e = 0;
}
else{
e = 0;
setTimeout(delay, 700);
}
}
function chk(){
if(slide[ci].style.transform === "translateX(-122%)"){
h = 0;
}
else{
h = 1;
}
}
function back(){
if(ci === 0){
ci = slide.length - 1;
}
else{
ci--;
}
clearTimeout(time);
slideShowBack();
btn[0].setAttribute("disabled","");
z = 1;
empty();
}
function go(){
if(ci === slide.length-1){
ci = 0;
}
else{
ci++;
}
clearTimeout(time);
currentSlide(ci);
btn[1].setAttribute("disabled","");
z = 1;
empty();
}
function slideShow(){
if(f === 1){
if(u>0){
slide[prev].style.transition="1s ease";
slide[prev].style.transform = "translateX(-122%)";
if(u>1){
slide[preprev].style.transition = "0s";
slide[preprev].style.transform = "translateX(122%)";
}
}
preprev = prev;
}
if(h === 0 || slide[ci].style.transform === "translateX(-122%)"){
slide[ci].style.transition="0s";
slide[ci].style.transform = "translateX(122%)";
time = setTimeout(slideShow, 10);
f = 0;
h =1;
}
else{
if(e === 0){
slide[ci].style.transition="1s ease";
slide[ci].style.transform = "translateX(0%)";
nav[ci].querySelector("input").checked = "true";
prev = ci;
u++;
if(o === 1){
resumeSlide();
}
f = 1;
}
else{
delay();
slide[ci].style.transition="1s ease";
slide[ci].style.transform = "translateX(0%)";
nav[ci].querySelector("input").checked = "true";
prev = ci;
u++;
if(o === 1){
resumeSlide();
}
f = 1;
}
}
}
function slideShowBack(){
slide[prev].style.transition="1s ease";
slide[prev].style.transform = "translateX(122%)";
if(u>1){
slide[preprev].style.transition = "0s";
slide[preprev].style.transform = "translateX(-122%)";
}
preprev = prev;
slide[ci].style.transition="1s ease";
slide[ci].style.transform = "translateX(0%)";
if(ci===0){
slide[slide.length - 1].style.transition = "0s";
slide[slide.length - 1].style.transform = "translateX(-122%)";
}
else{
slide[ci-1].style.transition = "0s";
slide[ci-1].style.transform = "translateX(-122%)";
}
nav[ci].querySelector("input").checked = "true";
prev = ci;
u++;
if(o === 1){
resumeSlide();
}
}
function resumeSlide(){
time=setTimeout(go, 2500);
}
function on(){
clearTimeout(time);
o = 0;
}
function off(){
clearTimeout(time);
resumeSlide();
o = 1;
}
function empty(){
if(z === 0){
btn[1].removeAttribute("disabled","");
btn[0].removeAttribute("disabled","");
}
else{
z = 0;
setTimeout(empty, 1000);
}
}





var slider2 = document.getElementsByClassName('item');
var btn = document.getElementsByClassName('btn');
var t=0;
if(t==0)
{btn[0].classList.add("inactive");}
function nextt(){
t++;
for(var i of slider2){
if(t==0){i.style.left="0px";}
if(t==1){i.style.left="-650px";}
if(t==2){i.style.left="-1050px";}
if(t>2){t=2;}
}
if(t==2){
btn[1].classList.add('inactive');
}else{
btn[0].classList.remove('inactive');
}
}
function prevv(){
t--;
for(var i of slider2){
if(t==0){i.style.left="0px";}
if(t==1){i.style.left="-400px";}
if(t==2){i.style.left="-1100px";}
if(t<0){t=0;}
}
if(t==0){
btn[0].classList.add('inactive');
}else{
btn[1].classList.remove('inactive');
}
}