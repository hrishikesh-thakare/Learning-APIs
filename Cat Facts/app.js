let btn=document.querySelector("button");

btn=addEventListener("click",async()=>{
    let fact=await getfacts();
    let p=document.querySelector("#result");
    p.innerText=fact;
})

//cat facts api info giver

let url= "https://catfact.ninja/fact";

// fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data1)=>{
//         console.log("Fact 1-",data1.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("Fact 2-",data2.fact);
//     })
//     .catch((err)=>{
//         console.log("ERROR-",err);
//     })

    //using await and async
    // async function getfacts(){
    //     try{
    //         let res=await fetch(url);
    //         let data=await res.json();
    //         console.log(data.fact);
    //     }catch(e){
    //         console.log("ERROR-",e)
    //     }
    // }

    // getfacts();
    // getfacts();

    //using axios
    async function getfacts(){
        try{
            let res=await axios.get(url);
            return res.data.fact;
        }catch(e){
            console.log("ERROR-",e)
        }
    }

  