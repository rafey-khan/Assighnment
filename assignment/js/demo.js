import { ifcode, switchcode } from "./condetext.js";


let root = document.getElementById('root');
let clear = document.getElementById('clear');

document.getElementById("condition").addEventListener('click',()=>{
    root.innerHTML = "";
    var code = document.createElement('pre');
    code.innerHTML = ifcode();
    root.appendChild(code);
    clear.disabled = false;   
})
document.getElementById("switch").addEventListener('click',()=>{
    root.innerHTML = "";
    var code = document.createElement('pre');
    code.innerHTML = switchcode();
    root.appendChild(code);
    clear.disabled = false;  
});
clear.addEventListener('click',()=>{
    root.innerHTML = "";
    clear.disabled = true;
});