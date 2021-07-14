list= {
    0: "Buy new Turtle"
}
let r=1;
let choice1;
let choice2;
let choice=prompt("Enter Choice");
while(choice.toLowerCase()!='quit')
{
    if(choice.toLowerCase()=='new')
    {
        choice1=prompt("Add a Todo");
        list[r++]=choice1;
        console.log(`${r-1}: ${choice1}`);
    }
    else if(choice.toLowerCase()=='list'){
        console.log("************************");
        for(let element in list)
        {
            console.log(`${element}: ${list[element]}`)
        }
        console.log("************************");
    }
    else if(choice.toLowerCase()=='delete')
    {
        choice2=prompt("To delete");
        for(let element in list){
            if(list[element]==choice2)      //formula relted to Nan
            {
                choice2.splice(element,1);
            }
        }
        choice2.splice()
        console.log(choice2);
    }
    else{
        console.log("Invalid value . Try again!!");
    }
    choice=prompt("Enter Choice");
}
console.log("Thankyou bye bye");

////////////////////////////////////////////////////////map////////////////////////////////////////////////

/* this create new array
number.map(function(num){
    return num*2
})
(7) [2, 4, 6, 8, 10, 12, 14]

const tra=movies.map(function(movies){
    return movies.title
})
undefined

tra
(3) ["abraham", "abraha", "abrah"]
*/