//your JS code here. If required.
let angle = 0; 
let line = document.getElementById('line'); 
line.style.cssText= `
    position:absolute;
	 top:50%;
	 left:50%;
    background-color: black;
    color:black;
    width:200px;
	 height:2px;
`;

setInterval(() => {
    angle += 2; 
    line.style.transform = `rotate(${angle}deg)`; 
}, 20)