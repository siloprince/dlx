"use strict";

let data = [
['1,1,1,1,1,1,1,1,1,1,1,1']
,    
['1,1,1,1,1,1,1,1,1,1,2']
,
['1,1,1,1,1,1,1,1,2,2', '1,1,1,1,1,1,1,2,1,2', '1,1,1,1,2,1,1,1,1,2', '1,1,1,1,1,1,2,1,1,2', '1,1,1,1,1,2,1,1,1,2']
,
['1,1,1,1,1,1,2,2,2', '1,1,1,1,1,2,1,2,2', '1,1,1,1,2,1,1,2,2', '1,1,1,1,2,1,2,1,2', '1,1,1,2,1,1,1,2,2', '1,1,1,2,1,1,2,1,2', '1,1,2,1,1,2,1,1,2']
,
['1,1,1,1,2,2,2,2', '1,1,1,2,1,2,2,2', '1,1,1,2,2,1,2,2', '1,1,2,1,1,2,2,2', '1,1,2,1,2,1,2,2', '1,1,2,1,2,2,1,2', '1,1,2,2,1,1,2,2', '1,2,1,2,1,2,1,2']
,
['1,1,2,2,2,2,2', '1,2,1,2,2,2,2', '1,2,2,1,2,2,2']
,
['2,2,2,2,2,2']
,
['1,1,1,1,1,1,1,1,1,3']
,
['1,1,1,1,1,1,1,2,3', '1,1,1,1,1,1,2,1,3', '1,1,1,1,2,1,1,1,3', '1,1,1,1,1,2,1,1,3']
,
['1,1,1,1,1,2,2,3', '1,1,1,1,1,2,3,2', '1,1,1,1,2,1,2,3', '1,1,1,1,2,1,3,2', '1,1,1,1,2,2,1,3', '1,1,2,1,1,2,1,3', '1,1,1,2,1,1,2,3', '1,1,1,2,1,1,3,2', '1,1,1,2,1,2,1,3', '1,1,1,2,1,3,1,2', '1,1,1,2,2,1,1,3', '1,1,2,1,2,1,1,3']
,
['1,1,1,2,2,2,3', '1,1,1,2,2,3,2', '1,1,2,1,2,2,3', '1,1,2,1,2,3,2', '1,1,2,1,3,2,2', '1,1,2,2,1,2,3', '1,1,2,2,1,3,2', '1,1,2,2,2,1,3', '1,2,1,2,1,2,3', '1,2,1,2,2,1,3']
,
['1,2,2,2,2,3', '1,2,2,2,3,2', '1,2,2,3,2,2']
,
['1,1,1,1,1,1,3,3', '1,1,1,1,1,3,1,3', '1,1,1,1,3,1,1,3', '1,1,1,3,1,1,1,3']
,
['1,1,1,1,2,3,3', '1,1,1,1,3,2,3', '1,1,1,2,1,3,3', '1,1,1,2,3,1,3', '1,1,1,3,1,2,3', '1,1,2,1,1,3,3', '1,1,2,1,3,1,3', '1,1,2,3,1,1,3', '1,1,3,1,2,1,3']
,
['1,1,2,2,3,3', '1,1,2,3,2,3', '1,1,2,3,3,2', '1,1,3,2,2,3', '1,2,1,2,3,3', '1,2,1,3,2,3', '1,2,2,1,3,3', '1,2,2,3,1,3', '1,2,3,1,2,3', '1,2,3,1,3,2', '1,2,3,2,1,3']
,
['2,2,2,3,3', '2,2,3,2,3']
,
['1,1,1,3,3,3', '1,1,3,1,3,3', '1,3,1,3,1,3']
,
['1,2,3,3,3', '1,3,2,3,3']
,
['3,3,3,3']
,
['1,1,1,1,1,1,1,1,4']
,
['1,1,1,1,1,1,2,4', '1,1,1,1,1,2,1,4', '1,1,1,2,1,1,1,4', '1,1,1,1,2,1,1,4']
,
['1,1,1,1,2,2,4', '1,1,1,1,2,4,2', '1,1,1,2,1,2,4', '1,1,1,2,1,4,2', '1,1,1,2,2,1,4', '1,1,2,1,1,2,4', '1,1,2,1,2,1,4', '1,1,2,1,4,1,2', '1,1,2,2,1,1,4']
,
['1,1,2,2,2,4', '1,1,2,2,4,2', '1,2,1,2,2,4', '1,2,1,2,4,2', '1,2,2,1,2,4', '1,2,2,2,1,4']
,
['2,2,2,2,4']
,
['1,1,1,1,1,3,4', '1,1,1,1,3,1,4', '1,1,1,3,1,1,4']
,
['1,1,1,2,3,4', '1,1,1,2,4,3', '1,1,1,3,2,4', '1,1,2,1,3,4', '1,1,2,1,4,3', '1,1,2,3,1,4', '1,1,2,4,1,3', '1,1,3,1,2,4', '1,1,3,2,1,4', '1,2,1,3,1,4']
,
['1,2,2,3,4', '1,2,2,4,3', '1,2,3,2,4', '1,2,3,4,2', '1,2,4,2,3', '1,3,2,2,4']
,
['1,1,3,3,4', '1,1,3,4,3', '1,3,1,3,4', '1,3,3,1,4']
,
['2,3,3,4', '2,3,4,3']
,
['1,1,1,1,4,4', '1,1,1,4,1,4', '1,1,4,1,1,4']
,
['1,1,2,4,4', '1,1,4,2,4', '1,2,1,4,4', '1,2,4,1,4']
,
['2,2,4,4', '2,4,2,4']
,
['1,3,4,4', '1,4,3,4']
,
['4,4,4']
,
['1,1,1,1,1,1,1,5']
,
['1,1,1,1,1,2,5', '1,1,1,1,2,1,5', '1,1,1,2,1,1,5']
,
['1,1,1,2,2,5', '1,1,1,2,5,2', '1,1,2,1,2,5', '1,1,2,1,5,2', '1,1,2,2,1,5', '1,2,1,2,1,5']
,
['1,2,2,2,5', '1,2,2,5,2']
,
['1,1,1,1,3,5', '1,1,1,3,1,5', '1,1,3,1,1,5']
,
['1,1,2,3,5', '1,1,2,5,3', '1,1,3,2,5', '1,2,1,3,5', '1,2,3,1,5', '1,2,5,1,3']
,
['2,2,3,5', '2,3,2,5']
,
['1,3,3,5', '1,3,5,3']
,
['1,1,1,4,5', '1,1,4,1,5']
,
['1,2,4,5', '1,2,5,4', '1,4,2,5']
,
['3,4,5']
,
['1,1,5,5', '1,5,1,5']
,
['2,5,5']
,
];
header();
let count=-1;
for (let di=0;di<data.length;di++) {
    for (let dj=0;dj<data[di].length;dj++){
        let list = data[di][dj].split(',');
        let lsum=0;
        transform(++count);
        let points = [];
        for (let li=0;li<list.length;li++) {
            let lv = parseInt(list[li],10);
            lsum += lv;
            let angle = 2.*Math.PI*lsum/12;
            points.push(Math.cos(angle)+' '+Math.sin(angle));
        }
        drawPolygon(points.join(','));
    }
}
footer();

function drawPolygon(points) {
  console.log(`<circle  stroke="none" fill="#999999" r="1.05"/><circle  stroke="none" fill="#cccccc" r="1"/><polygon fill="#001180" points="`+points+`"/>`);
}
function transform (i) {
  let scale= 0.25;
  let size = 10;
  let scaledSize = scale*size;
  let xx = i%size;
  let yy = (i-xx)/size;
  let x = 2 + scaledSize*xx;
  let y = 2 + scaledSize*yy;
  console.log(`</g><g test="${i} ${xx} ${yy}" transform="translate(${x},${y})">`);
}
function header(){
  console.log(`<svg width="1000" height="1450"><g transform="translate(4,4),scale(30,30)"><g>`);
}
function footer(){
  console.log(`</g></g></svg>`);
}