const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
];
//filtering user who scored more than 85
function getScore(userScore){
    const a = users.filter(element=>element.scores>= userScore)
    console.log(a)
}
getScore(85);


//adding user only if user doesnt exist
// function addUser(name,score,skills,age){
//     if(!users.find(element=>element.name==name)){
//         users.push({name:name, scores:score, skills:skills, age:age})
//     }
//     console.log(users)
// }
// addUser('y',100,["fullstack"],26);