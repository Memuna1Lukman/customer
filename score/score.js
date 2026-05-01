const player = [
    {name : "Muna",score: 45},
    {name : "Bintu",score: 85},
    {name : "Memuna",score: 75},
    {name : "Lukman",score: 60},
    {name : "Mahi",score: 40}
]
// let people;
// let len = player.length;
// for (i=0;i< len;i++){
//     people += player[i]["name"]
    
// }
// console.log(people)     
// console.log(player[0]["name"]);

// The Average calcultor
// The champion Finder that is  the highest scorer
// The leaderboard sorter


function averageCalculator(){
    let total = 0
    let count = 0
    for (let i in player){
        total+=player[i].score;
           
    }
    count+= player.length;
    console.log(count)
    let average = total/count;
    return average;


}
console.log(averageCalculator());


function highScorer(){
    let result = player[0]
    for(let i = 1;i<player.length;i++){
        if( player[i]["score"] > result.score){
            result = player[i];
        }

    }
    return result.name;
}
console.log(highScorer());

function sortFinder(){
    
   
    let sorted=player.sort((a,b)=>b.score-a.score);
    return sorted;
    

}
console.log(sortFinder());