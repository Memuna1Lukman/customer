
// let ran; this was the code i wrote the forst time
// for(i=0;i>=alphabet.length,i++;){
//     random = Math.floor(Math.random()*alphabet.length)
//     ran= random[i]
// }
// let random = "";
// for(let i = 0; i<8;i++){
//     let randomIndex=Math.floor(Math.random()*alphabet.length);
//     random += alphabet[randomIndex];
// }
// console.log(random);

function generateCode(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    let random = "";
    for(let i = 0; i<8;i++){
        let randomIndex = Math.floor(Math.random() * alphabet.length);
        random+=alphabet[randomIndex];
        
    }
    return random;
}

// console.log(generateCode())
function Customer(){
    let discount = "";
    const customer={}
    let names= prompt("What is your name?").trim().toLocaleLowerCase();
    if (names==""){
        console.log("Enter a valid answer");
        return
    }
    let membershipLevel = prompt("What is your membership level ").trim().toLocaleLowerCase();
    if(membershipLevel == ""){
        console.log("Enter a value");
        return
    }else if (membershipLevel != "gold" || membershipLevel != "silver") {
        console.log("Enter Either Gold or Silver");
        return
    } else {
        membershipLevel = membershipLevel
    }
    let totalSpend = Number(prompt("What is your total amount spent? "));
    if (isNaN(totalSpend) || totalSpend == ""){
        console.log("That is not a valid number");
        return
    }
    else{
        totalSpend = totalSpend
    }
    
    
    customer.name = names;
    customer.membershipLevels=membershipLevel;
    customer.totalSpends=totalSpend;
    customer.codes = generateCode();
    console.log(customer)
    if (customer.totalSpends >= 30){
    discount = customer.totalSpends*0.05;

   }else{
    discount = customer.totalSpends
   }
   let result = `Hello ${customer.name} your code is ${customer.codes} for ${discount} spent`;
   return result;
}



console.log(Customer());









letter=alphabet.charAt(Math.floor(Math.random()*alphabet.length))
console.log(letter)