let bandNames=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']
console.log(bandNames.sort())
const ref= document.getElementsByTagName("ul")[0]
for(let i=0;i<bandNames.length;i++){
	const li = document.createElement("li") 
	li.innerText= bandNames[i]
	ref.append(li)
}
