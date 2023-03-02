
const gallery = document.getElementById("gallery")

for(var i=0;i<21;i++){
    const url =`https://source.unsplash.com/random/300x300?${i}`
    const div = document.createElement('div')
    div.classList.add('col-sm')
    div.classList.add('p-2')
    const img=document.createElement('img')
    img.src = url;
    div.appendChild(img)
    gallery.appendChild(div)
}
