const series = [

{
id:"naruto",
titulo:"Naruto",
categoria:"Animes",
capa:"https://image.tmdb.org/t/p/w500/xC9q7jHnR7o9p8pXQ8Z9q4CPGK.jpg",

temporadas:[
{
numero:1,

episodios:[
"1abc",
"2abc",
"3abc"
]

}
]

},

{
id:"attack",
titulo:"Attack on Titan",
categoria:"Animes",
capa:"https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",

temporadas:[
{
numero:1,

episodios:[
"4abc",
"5abc",
"6abc"
]

}
]

},

{
id:"witcher",
titulo:"The Witcher",
categoria:"Ação",
capa:"https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",

temporadas:[
{
numero:1,

episodios:[
"7abc",
"8abc"
]

}
]

}

]

/* ------------------------ */
/* HOME */
/* ------------------------ */

const home = document.getElementById("home")

if(home){

const categorias = {}

series.forEach(s=>{

if(!categorias[s.categoria]){
categorias[s.categoria]=[]
}

categorias[s.categoria].push(s)

})

Object.keys(categorias).forEach(cat=>{

const titulo = document.createElement("h2")
titulo.innerText = cat

const row = document.createElement("div")
row.className="row"

categorias[cat].forEach(s=>{

const card = document.createElement("div")
card.className="card"

card.innerHTML=`<img src="${s.capa}">`

card.onclick=()=>{
localStorage.setItem("serie",s.id)
location="serie.html"
}

row.appendChild(card)

})

home.appendChild(titulo)
home.appendChild(row)

})

}

/* ------------------------ */
/* PAGINA SERIE */
/* ------------------------ */

const lista = document.getElementById("episodios")

if(lista){

const id = localStorage.getItem("serie")

const serie = series.find(s=>s.id===id)

document.getElementById("titulo").innerText = serie.titulo

const temporada = serie.temporadas[0]

temporada.episodios.forEach((video,i)=>{

const ep = document.createElement("div")
ep.className="ep"

ep.innerHTML=`

<img src="https://picsum.photos/300/170?random=${i}">

<div>
<h3>Episódio ${i+1}</h3>
</div>

`

ep.onclick=()=>{
document.getElementById("player").src=
`https://drive.google.com/file/d/${video}/preview`
}

lista.appendChild(ep)

})

document.getElementById("player").src=
`https://drive.google.com/file/d/${temporada.episodios[0]}/preview`

}
