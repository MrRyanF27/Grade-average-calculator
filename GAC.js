
let studentArr = []
let averageArr = []
const sname = document.getElementById("sname");
let math = document.getElementById("math");
let english = document.getElementById("english");
let filipino = document.getElementById("filipino");
let science = document.getElementById("science");
let PE = document.getElementById("pe");
const btn = document.getElementById("btn");
let display = document.getElementById("display");
let mp = document.getElementById("mp");

let slist = document.getElementById("slist");
let averagelist = document.getElementById("average-list");



let StudentDisplayer = JSON.parse(localStorage.getItem("Students"))
let averageDisplayer = JSON.parse(localStorage.getItem("Average"))

if(StudentDisplayer){
    studentArr = StudentDisplayer
    averageArr = averageDisplayer

    render()
}

// if(averageDisplayer){
    
//     averageArr = averageDisplayer

//     render()
// }




btn.addEventListener("click", function(){ 

    let compute =  (parseFloat(math.value) + parseFloat(english.value) + parseFloat(filipino.value) + parseFloat(science.value) + parseFloat(PE.value) )/ 5 ;
    console.log(compute.toFixed(1));
    let total = compute.toFixed(1)

    display.innerHTML = ` AVERAGE 
    <h1>${total}</h1>`

    if(total >= 97.0 && total <= 99.9){
        mp.textContent = `  Congrats ${sname.value} your average is ${total} , you are with highest honor!! 🥇🏅🎉`

    }else if(total >= 94.0 && total <= 96.9){
        mp.textContent = `  Congrats ${sname.value} your average is ${total} , you are with honor!! 🥇👏`

    }else if(total >= 85.0 && total <= 93.9){
        mp.textContent = `  Hello ${sname.value} your average is ${total} , you are great!! 👏`

    }else if(total >= 75.0 && total <= 84.9){
        mp.textContent = `  Hi ${sname.value} your average is ${total} , you passed 👍`

    }else if(total < 75.0){
        mp.textContent = `  Sorry ${sname.value} your average is ${total} , you are failed 😢👎 `

    }else{
        mp.textContent = `  INVALID GRADE`
    }


    studentArr.push(sname.value)
    averageArr.push(total)

    // console.log(studentArr)
    // console.log(averageArr)


    localStorage.setItem("Students",JSON.stringify(studentArr))
    localStorage.setItem("Average",JSON.stringify(averageArr))

    render()

}) 


function render(){
    let studentBag = ""

    for( let i=0; i < studentArr.length; i++){
        studentBag  += studentArr[i]
    }

    slist.innerHTML = ` <li> ${studentBag}</li>`



    let averageBag = ""

    for( let i = 0; i < averageArr.length; i++){
        averageBag  += averageArr[i]

    }

    averagelist.innerHTML = ` <li> ${averageBag}</li> `
}