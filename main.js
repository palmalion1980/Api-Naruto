const API_Naruto = 'https://dattebayo-api.onrender.com/characters/'
const API_AKATSUKI = 'https://dattebayo-api.onrender.com/akatsuki'



async function naruto_character() {
    const res = await fetch(API_Naruto)
    const data = await res.json()

    const personajes = data.characters

    personajes.forEach(personaje => {
        const container_opend = document.querySelector('.container_main')
        const article_main = document.createElement('article')
        const img_main = document.createElement('img')
        const h2title = document.createElement('h2')
        h2title.textContent = personaje.name
       
        img_main.setAttribute("src", personaje.images[0])
        img_main.setAttribute('width', 300)


       container_opend.appendChild(article_main)
       article_main.appendChild(img_main)
       article_main.appendChild(h2title)


    });
    
} 

async function naruto_akatsuki() {
    const res = await fetch(API_AKATSUKI)
    const data = await res.json()


    const akatsukis = data.akatsuki
      console.log(akatsukis)

   akatsukis.forEach(individuos=>{
          const container_opend = document.querySelector('.container_main')
        const article_main = document.createElement('article')
        const img_main = document.createElement('img')
        const h2title = document.createElement('h2')
        h2title.textContent = individuos.name
    
       
       
        img_main.setAttribute("src", individuos.images)
        img_main.setAttribute('width', 300)
         img_main.setAttribute('height', 250)


       container_opend.appendChild(article_main)
       article_main.appendChild(img_main)
       article_main.appendChild(h2title)
       
   });
 }
naruto_character()
naruto_akatsuki()