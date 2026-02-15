function addOperation() {
    //alert("event fired")
    //creating new tag
    let pTag = document.createElement("p"); // p tag ready
    let nameValue = document.getElementById("name").value; // getting value from input tag
    let ageValue = document.getElementById("age").value // getting value from input tag
    // let divTagContent = document.createTextNode("Welcome") // content ready}
    let pTagContent = document.createTextNode(`Name is ${nameValue} Age is ${ageValue}`) // content ready
    pTag.appendChild(pTagContent); // content added to p tag

    if(ageValue>=40){
        pTag.setAttribute("class","abc")

    if(ageValue>=40 && ageValue<=60){
    }else {
        pTag.setAttribute("class","xyz");
    }

    // document.getElementById("result").appendChild(pTag); // <p>Name is ... Age is ...</p>
    document.getElementsByTagName("body")[0].appendChild(pTag); // p     tag added to body tag

}