//call url API
const APIurl = "https://api.adviceslip.com/advice/"

//the lets - <p> e <button>
let randomAdvice = document.getElementById("random-advice")
let randomAdviceButton = document.getElementById("button-new")

//function for the advices
function getNewAd(){
        x = Math.floor(200*Math.random()+1)
        fetch(APIurl+x).then(
            (resp)=>{return resp.json()
            }).then(adviceData=> {

                    const adviceobj = adviceData.slip
                    console.log(adviceobj)
                    randomAdvice.innerHTML = adviceobj.advice})
                    
                    .catch(err => {
                        console.log(err)
                    })
    
    }

//event click
randomAdviceButton.addEventListener("click", () => {getNewAd()})

