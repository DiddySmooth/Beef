let questions = [ 
    {
        "title": "Question 1 Test / 10 - Feeder Cattle Futures (near contract (March 2021))",
        "question": "The March 2021 feeder cattle futures contract closed at 141.5 on Friday, January 22. What are your expectations for the March contract's closing price as follows?",
        "type": "chooseFromList",
        "columnTitle1": "NextFriday",
        "columnTitle2": "One month from now",
        "columnTitle3": "Contract End"
    },
    {
        "title": "Question 2 Test / 10 - Feeder Cattle Futures (far contract (November 2021))",
        "question": "The November 2021 feeder cattle futures contract closed at 154.425 on Friday, January 22. WhatareyourexpectationsfortheNovember contract’s closing price as follows?",
        "type": "chooseFromPercentage",
        "columnTitle1": "NextFriday",
        "columnTitle2": "One month from now",
        "columnTitle3": "Contract End"
    },
    {
        "title": "Question 3 Test / 10 - Cattle on Feed Report (Inventory)",
        "question": "The January 2021 Cattle on Feed Report will be released on Friday, January 22. Whatareyourexpectations forCattle on Feed Inventory vs. last year?",
        "type": "range"
    },
    {
        "title": "Question 4 Test / 10 - Cattle on Feed Report (Placements)",
        "question": "The January 2021 Cattle on Feed Report will be released on Friday, January 22. Whatareyourexpectations forCattle on Feed Placements vs. last year?",
        "type": "range"
    },
    {
        "title": "Question 5 Test / 10",
        "question": "The March 2021 feeder cattle futures contract closed at 141.5 on Friday, January 22. What are your expectations for the March contract's closing price as follows?",
        "type": "range"
    },
    {
        "title": "Question 6 Test / 10?",
        "question": "The March 2021 feeder cattle futures contract closed at 141.5 on Friday, January 22. What are your expectations for the March contract's closing price as follows?",
        "type": "range"
    },
    {
        "title": "Question 7 Test / 10",
        "question": "The March 2021 feeder cattle futures contract closed at 141.5 on Friday, January 22. What are your expectations for the March contract's closing price as follows?",
        "type": "range"
    },
    {
        "title": "Question 8 Test / 10",
        "question": "The March 2021 feeder cattle futures contract closed at 141.5 on Friday, January 22. What are your expectations for the March contract's closing price as follows?",
        "type": "range"
    },
    {
        "title": "Question 9 Test / 10",
        "question": "The March 2021 feeder cattle futures contract closed at 141.5 on Friday, January 22. What are your expectations for the March contract's closing price as follows?",
        "type": "range"
    },
    {
        "title": "Question 10 Test / 10",
        "question": "The March 2021 feeder cattle futures contract closed at 141.5 on Friday, January 22. What are your expectations for the March contract's closing price as follows?",
        "type": "range"
    },
]

let questionNum = 0


const previous = document.querySelector(".previous")
const next = document.querySelector(".next")
const scale = document.querySelector(".chooseFromListForm")
const percentage = document.querySelector(".formContainerPercentages")
const container = document.querySelector(".questionDiv")

const renderQuestion = () => {
    if(questions[questionNum].type === "chooseFromList"){
        chooseFromList()
    }
    else if(questions[questionNum].type === "chooseFromPercentage"){
        console.log("Works")
        chooseFromPercentage()
    }
}

const chooseFromList = () => {

    /////Column 1 /////
    const questionColumn1 = document.createElement('form')
    questionColumn1.classList.add('columnForm1')

    const columnTitle1 = document.createElement('p')
    columnTitle1.classList.add('columnTitle')
    columnTitle1.innerText = questions[questionNum].columnTitle1
    
    questionColumn1.append(columnTitle1)

    for(i=0;i<5;i++){
        const labelValues = ["Really Bad", "Bad", "Nuetral", "Good", "Really Good"]
        const button1 = document.createElement('input')
        const label1 = document.createElement('label')
        const br = document.createElement('br')
        label1.innerText = labelValues[i]
        button1.type = "radio"
        button1.name = "response1"
        button1.value = labelValues[i]

        questionColumn1.append(button1)
        questionColumn1.append(label1)  
        questionColumn1.append(br)
    }

    scale.append(questionColumn1)
    
    /////Column 2 /////
    const questionColumn2 = document.createElement('form')
    questionColumn2.classList.add('columnForm2')

    const columnTitle2 = document.createElement('p')
    columnTitle2.classList.add('columnTitle')
    columnTitle2.innerText = questions[questionNum].columnTitle2

    questionColumn2.append(columnTitle2)

    for(i=0;i<5;i++){
        const labelValues = ["Really Bad", "Bad", "Nuetral", "Good", "Really Good"]
        const button1 = document.createElement('input')
        const label1 = document.createElement('label')
        const br = document.createElement('br')
        label1.innerText = labelValues[i]
        button1.type = "radio"
        button1.name = "response2"
        button1.value = labelValues[i]

        questionColumn2.append(button1)
        questionColumn2.append(label1)  
        questionColumn2.append(br)
    }

    scale.append(questionColumn2)

    /////Column 3 /////
    const questionColumn3 = document.createElement('form')
    questionColumn3.classList.add('columnForm3')

    const columnTitle3 = document.createElement('p')
    columnTitle3.classList.add('columnTitle')
    columnTitle3.innerText = questions[questionNum].columnTitle3

    questionColumn3.append(columnTitle3)

    for(i=0;i<5;i++){
        const labelValues = ["Relaly Bad", "Bad", "Nuetral", "Good", "Really Good"]
        const button1 = document.createElement('input')
        const label1 = document.createElement('label')
        const br = document.createElement('br')
        label1.innerText = labelValues[i]
        button1.type = "radio"
        button1.name = "response3"
        button1.value = labelValues[i]

        questionColumn3.append(button1)
        questionColumn3.append(label1)  
        questionColumn3.append(br)
    }
    scale.append(questionColumn3)
}


const chooseFromPercentage = () => {
    ///// Column 1 //////
    console.log("also works")
    const questionColumn1 = document.createElement('form')
    questionColumn1.classList.add('columnForm1')

    const columnTitle1 = document.createElement('p')
    columnTitle1.classList.add('columnTitle')
    columnTitle1.innerText = questions[questionNum].columnTitle1

    questionColumn1.append(columnTitle1)
    
    const select1 = document.createElement('select')
    select1.id = 'col1'
    for(i=0; i<20; i++){
        const option = document.createElement("option")
        option.innerText = `${i*5}%`
        console.log(typeof(option.value))
        select1.append(option)
    }
    questionColumn1.append(select1)
    scale.append(questionColumn1)

    ////column 2 //////
    const questionColumn2 = document.createElement('form')
    questionColumn2.classList.add('columnForm2')

    const columnTitle2 = document.createElement('p')
    columnTitle2.classList.add('columnTitle')
    columnTitle2.innerText = questions[questionNum].columnTitle2

    questionColumn2.append(columnTitle2)
    
    const select2 = document.createElement('select')
    select2.id = 'col2'
    for(i=0; i<20; i++){
        const option = document.createElement("option")
        option.innerText = `${i*5}%`
        console.log(typeof(option.value))
        select2.append(option)
    }
    questionColumn2.append(select2)
    scale.append(questionColumn2)

    ///// column 3 /////
    const questionColumn3 = document.createElement('form')
    questionColumn3.classList.add('columnForm3')

    const columnTitle3 = document.createElement('p')
    columnTitle3.classList.add('columnTitle')
    columnTitle3.innerText = questions[questionNum].columnTitle3

    questionColumn3.append(columnTitle3)
    
    const select3 = document.createElement('select')
    select3.id = 'col3'
    for(i=0; i<21; i++){
        const option = document.createElement("option")
        option.innerText = `${i*5}%`
        console.log(typeof(option.value))
        select3.append(option)
    }
    questionColumn3.append(select3)
    scale.append(questionColumn3)

}
previous.addEventListener('click', (event) => {
    while(scale.firstChild){
        scale.removeChild(scale.firstChild)
    }

    if (questionNum >= 1){
        questionNum --
        title.innerText = questions[questionNum].title
        questions.innerText = questions[questionNum].question
        
    }
    renderQuestion()
})
next.addEventListener('click', (event) => {
    while(scale.firstChild){
        scale.removeChild(scale.firstChild)
    }
    
    if (questionNum < questions.length - 1){
        questionNum ++
        title.innerText = questions[questionNum].title
        questions.innerText = questions[questionNum].question
        
    }
    renderQuestion()
    
})


const question = document.createElement('h3')
question.classList.add("question")
question.innerText = questions[questionNum].question
container.prepend(question)

const title = document.createElement('h1')
title.classList.add("title")
title.innerText = questions[questionNum].title
container.prepend(title)



title.innerText = questions[0].title
question.innerText = questions[0].question





