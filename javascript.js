//getElementById
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor= '#ccc';

//getElementsByTagName
const p = document.getElementsByTagName('p');

for(let i=0 ; i < p.length;i++){
    p[2].style.backgroundColor = '#444';
    p[2].style.color = 'white';
}

const h1 = document.getElementsByTagName('h1')[0];
    h1.style.fontSize = '50px';

//getElementsByClassName
const p1 = document.getElementsByClassName('p1')[0];
    p1.innerHTML = 'Aku baik';


//querySelector
const p4 = document.querySelector('#b p');
    p4.style.color ='White';
    p4.style.backgroundColor = '#333';

const li3 = document.querySelector('section#b ul li:nth-child(3)');
    li3.style.color = '#46e3da';
    li3.style.backgroundColor = '#666';


//querySelectorAll
const p = document.querySelectorAll('p');
    for (let i=0; i < p.length;i++){
      p[1].style.backgroundColor = '#463466';
    }