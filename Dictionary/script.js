function showCard(){
    document.getElementById('card-field').innerHTML=''

    console.log("");
    let query = document.getElementById('search-field').value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data[0].meanings);


        data[0].meanings.forEach(element => {
           console.log(element);
            
        let div = document.createElement('div')
        div.innerHTML=  `
   
        <h1>Part of Speech: ${element.partOfSpeech}</h1>

    ${
        element.definitions[0].definition
        ?

        `<h1 style= "dispaly: none"> Definitions: ${element.definitions[0].definition}</h1>`
        :
        `<h1> Definitions: none </h1>`   
    }
        
        
    ${
        element.synonyms[0]
        ?
         `<h1> Synonyms: ${element.synonyms[0]}</h1>`
        :
        `<h1> Synonyms: none </h1>`   
    }

 ${
        element.antonyms[0]
        ?
          `<h1> Antonyms: ${element.antonyms[0]}</h1>`
        :
         `<h1> Antonyms: none </h1>`   
    }

        `
        document.getElementById('card-field').appendChild(div)

        });
    }
)
        
}
