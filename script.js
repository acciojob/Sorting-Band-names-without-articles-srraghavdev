let bandNames=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']
bandNames.sort((a,b)=> (strip(a)>strip(b))? 1: -1)
const ref= document.getElementsByTagName("ul")[0]
for(let i=0;i<bandNames.length;i++){
	const li = document.createElement("li") 
	li.innerText= bandNames[i]
	ref.append(li)
}
function strip(word){
	let arr= word.split(" ")
	let s=""
	let articles=['A','AN','THE']
	for(let i=0;i<arr.length;i++){
		if(articles.indexOf(arr[i].toUppercase)=== -1){
			s=s+arr[i]
		}
	}
	return s.trim()
}
