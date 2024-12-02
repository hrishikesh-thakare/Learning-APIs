let url="https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");

btn=addEventListener("click",async()=>{
    let img=document.querySelector("#result");
    let link=await getImage();
    img.setAttribute("src",link);
})

async function getImage(){
    try{
        let res=await axios.get(url);
        return res.data.message;
    }catch(e){
        console.log("ERROR-",e)
    }
}