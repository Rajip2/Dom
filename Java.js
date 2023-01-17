const Tubahwarna= document.getElementById('Tubahwarna');
Tubahwarna.onclick = function() {
    //  document.body.style.backgroundColor = "#ccc";
  document.body.classList.toggle('abu');
}

const Tacakwarna = document.createElement('button');
const teksTombol = document.createTextNode('warna acak');
Tacakwarna.appendChild(teksTombol);
Tacakwarna.setAttribute('type','button');
Tubahwarna.after(Tacakwarna);

Tacakwarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru  = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});


sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});


document.body.addEventListener('mousemove', function(event){
    const xpos= Math.round((event.clientX / window.innerWidth)*255);
    const ypos= Math.round((event.clientY / window.innerHeight)*255);
  document.body.style.backgroundColor = 'rgb('+xpos+','+ypos+',100)';
});