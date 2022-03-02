import { ifcode, switchcode } from "./condetext.js";


let root = document.getElementById('root');
let clear = document.getElementById('clear');
// #### Editor ###
var diveditor = document.createElement('div');
diveditor.setAttribute('id','container');
var textarea = document.createElement('textarea');
textarea.rows = 20;
textarea.cols = 100;
var runbtn = document.createElement('button');
runbtn.setAttribute('id','run');
runbtn.innerHTML = "Run Code";
var heading = document.createElement('h2');
heading.innerHTML = "Here you can run your code";

diveditor.appendChild(heading);
diveditor.appendChild(textarea);
diveditor.appendChild(runbtn);


document.getElementById("condition").addEventListener('click',()=>{
    root.innerHTML = "";
    var code = document.createElement('pre');
    code.innerHTML = ifcode();
    root.appendChild(code);
    clear.disabled = false; 
    document.getElementById('editor').appendChild(diveditor);  
})
document.getElementById("switch").addEventListener('click',()=>{
    root.innerHTML = "";
    var code = document.createElement('pre');
    code.innerHTML = switchcode();
    root.appendChild(code);
    clear.disabled = false;  
    document.getElementById('editor').appendChild(diveditor);  

});
clear.addEventListener('click',()=>{
    root.innerHTML = "";
    clear.disabled = true;
    document.getElementById('editor').removeChild(diveditor); 
});
function p(z){
    var result = document.createElement('h3');
    result.style.color = "green";
    result.innerHTML = z;
    diveditor.insertBefore(result,diveditor.children[0]);

}
var additionalstring = `p(res);`;
runbtn.addEventListener('click',()=>{
    eval(textarea.value+additionalstring);
});
 
