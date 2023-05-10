const container = document.getElementById("container");
const select = document.getElementById("select")
const buttonPlay = document.getElementById("button-play")
const risultato = document.getElementById("risultato");
const risultato2 = document.getElementById("risultato2")


buttonPlay.addEventListener("click",
    
    function(){

        // svuotare container
        container.innerHTML = "";

        // creare array numeri casuali (bombe)
        const arrayNumEasy = arrayRamdomNumber (1, 100, 16);
        console.log("EASY", arrayNumEasy);

        // creare array numeri casuali (bombe)
        const arrayNumNormal = arrayRamdomNumber (1, 81, 16);
        console.log("NORMAL", arrayNumNormal);

        // creare array numeri casuali (bombe)
        const arrayNumHard = arrayRamdomNumber (1, 49, 16);
        console.log("HARD", arrayNumHard);

        risultato.innerHTML = "IL TUO PUNTEGGIO: "
        risultato2.innerHTML = ""
        let punteggio = 1

        if (select.value === "Easy"){
            for (let i=1; i <= 100; i++ ){
                const square = createElement("div", "square-easy")
            
                container.append(square)
            
                // creo elemento span per inserire i numeri
                const span = createElement("span", "span")
                square.append(span)
                span.innerHTML = i
            
                // aggiungi a square evento con click
                square.addEventListener("click",
                
                function(){
                    if(arrayNumEasy.includes(i)){
                        square.classList.add("red")
                        console.log("Paccato hai trovato una bomba")
                        risultato2.innerHTML = "Game Over"
                    }else {
                        square.classList.add("blue")
                        console.log("Hai cliccato la casella numero: ", i)
                        risultato.innerHTML = "IL TUO PUNTEGGIO: " + punteggio++
                    }
                    
                }
            
                )
            
            }

        }if (select.value === "Normal"){
            for (let i=1; i <= 81; i++ ){
                const square = createElement("div", "square-normal");
            
                container.append(square);
            
                // creo elemento span per inserire i numeri
                const span = createElement("span", "span");
                square.append(span);
                span.innerHTML = i
            
                // aggiungi a square evento con click
                square.addEventListener("click",
                
                function(){
                    if(arrayNumNormal.includes(i)){
                        square.classList.add("red")
                        console.log("Paccato hai trovato una bomba")
                        risultato2.innerHTML = "Game Over"
                    }else {
                        square.classList.add("blue")
                        console.log("Hai cliccato la casella numero: ", i)
                        risultato.innerHTML = "IL TUO PUNTEGGIO: " + punteggio++
                    }
                    
                }
            
                )
            
            }
            

        }if (select.value === "Hard"){
            for (let i=1; i <= 49; i++ ){
                const square = createElement("div", "square-hard");
            
                container.append(square);
            
                // creo elemento span per inserire i numeri
                const span = createElement("span", "span");
                square.append(span);
                span.innerHTML = i
            
                // aggiungi a square evento con click
                square.addEventListener("click",
                
                    function(){
                        if(arrayNumHard.includes(i)){
                            square.classList.add("red")
                            console.log("Paccato hai trovato una bomba")
                            risultato2.innerHTML = "Game Over"
                        }else {
                            square.classList.add("blue")
                            console.log("Hai cliccato la casella numero: ", i)
                            risultato.innerHTML = "IL TUO PUNTEGGIO: " + punteggio++
                        }
                        
                    }
            
                )
            
            }
        }
        
        
    }

)

// creare array numeri casuali (bombe)
// const arrayNum = arrayRamdomNumber (1, 100, 16);
//     console.log(arrayNum);

// FUNZIONI CREA ELEMENTO
function createElement (tag, nameClassAdd){
    const newElement = document.createElement(tag);
    newElement.classList.add(nameClassAdd);
    return newElement
}

// FUNZIONA CREA ARRAY DI NUMERI CASUALI
function arrayRamdomNumber(min, max, lunghezzaArray){
    const arrayInt = [];

    
    while (arrayInt.length < lunghezzaArray){
        // creare numero random
        const nuovoNum = numeriRandom (min, max);

        // se il numero random creato non è presente nell'array fai push
        if (!arrayInt.includes(nuovoNum)){
            arrayInt.push(nuovoNum);
        }
    }
    return arrayInt    
}

// FUNZIONE NUMERI CASUALI
function numeriRandom (numMin, numMax){
    return Math.floor(Math.random() * (numMax - numMin +1) + numMin);
}