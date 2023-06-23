let bandNames=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']
console.log(bandNames.sort)
cont ref= document.getElementsByTagName("ul")[0]
for(let i=0;i<bandNames.length;i++){
	const li = document.CreateElement("li")
	li.innerText= bandNames[i]
	ref.append(li)
}
