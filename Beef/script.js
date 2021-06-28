let questions = [ 
    {
        "title": "Question 1 Test / 10 - Feeder Cattle Market Expectations)",
        "question": `The nearby feeder cattle futures contract (March 2021) closed at 137.25 on Friday, January 22, which was up 6.6% from the previous Friday’s close at 128.17.What are your expectations for the near contract’s closing price as follows?  `,
        "type": "chooseFromList",
        "price": 100,
        "columnTitle1": "Friday, 01/29 (next week)",
        "columnTitle2": "Friday, 02/26 (next month)",
        "columnTitle3": "Friday, 03/26 (three months)"
    },
    {
        "title": "Question 2 Test / 10 - Fed Cattle Market Expectations)",
        "question": "The nearby fed cattle futures contract (March 2021) closed at 137.25 on Friday, January 22, which was up 6.6% from the previous Friday’s close at 128.17.What are your expectations for the near contract’s closing price as follows?",
        "type": "chooseFromList",
        "price": 150,
        "columnTitle1": "NextFriday",
        "columnTitle2": "One month from now",
        "columnTitle3": "Contract End"
    },
    {
        "title": "Question 3 Test / 10 - Corn Market Expectations",
        "question": "The nearby corn futures contract (March 2021) closed at 137.25 on Friday, January 22, which was up 6.6% from the previous Friday’s close at 128.17.What are your expectations for the near contract’s closing price as follows??",
        "type": "chooseFromList",
        "price": 170,
        "columnTitle1": "NextFriday",
        "columnTitle2": "One month from now",
        "columnTitle3": "Contract End"
    },
    {
        "title": "Question 4 Test / 10 - Cattle on Feed Report (Placements)",
        "question": "The January 2021 Cattle on Feed Report will be released on Friday, January 22. Whatareyourexpectations forCattle on Feed Placements vs. last year?",
        "type": "chooseFromPercentage"
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
        const price = questions[questionNum].price
        const labelValues = [
            `Much Higher \n (+ 5% or more: over $ ${price + (price * .05)})`,
            `Higher \n (+ 2% to + 4.9%: $${price + (price * .02)} to $${price + (price * .049)} )`,
            `Little Change \n (+ 1.9% to -1.9%: $${price + (price * .019)} to $${price - (price * .019)})`,
            `Lower \n (- 2% to -4.9%: $${price - (price * .02)} to $${price - (price * .049)})`,
            `Much Lower \n (- 5% or more: under $ ${price - (price * .05)})`]
        const button1 = document.createElement('input')
        const label1 = document.createElement('label')
        const br = document.createElement('br')
        const labelDiv = document.createElement('div')
        label1.innerText = labelValues[i]
        labelDiv.classList.add('columnLabel')

        button1.type = "radio"
        button1.name = "response1"
        button1.value = labelValues[i]

        labelDiv.append(button1)
        labelDiv.append(label1)
        
        questionColumn1.append(labelDiv)  
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
        const price = questions[questionNum].price
        const labelValues = [
            `Much Higher \n (+ 10% or more: over $ ${price + (price * .1)})`,
            `Higher \n (+ 5% to + 9.9%: $${price + (price * .05)} to $${price + (price * .099)} )`,
            `Little Change \n (+ 4.9% to -4.9%: $${price + (price * .049)} to $${price - (price * .049)})`,
            `Lower \n (- 5% to -9.9%: $${price - (price * .05)} to $${price - (price * .099)})`,
            `Much Lower \n (- 10% or more: under $ ${price - (price * .1)})`]
        const button1 = document.createElement('input')
        const label1 = document.createElement('label')
        const br = document.createElement('br')
        const labelDiv = document.createElement('div')

        label1.innerText = labelValues[i]
        labelDiv.classList.add('columnLabel')
        button1.type = "radio"
        button1.name = "response2"
        button1.value = labelValues[i]

        labelDiv.append(button1)
        labelDiv.append(label1)

        questionColumn2.append(labelDiv)  
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
        const price = questions[questionNum].price
        const labelValues = [
            `Much Higher \n (+ 20% or more: over $ ${price + (price * .2)})`,
            `Higher \n (+ 10% to + 19.9%: $${price + (price * .1)} to $${price + (price * .199)} )`,
            `Little Change \n (+ 9.9% to -9.9%: $${price + (price * .099)} to $${price - (price * .099)})`,
            `Lower \n (- 10% to -19.9%: $${price - (price * .1)} to $${price - (price * .199)})`,
            `Much Lower \n (- 20% or more: under $ ${price - (price * .2)})`]
        const button1 = document.createElement('input')
        const label1 = document.createElement('label')
        const br = document.createElement('br')
        const labelDiv = document.createElement('div')

        label1.innerText = labelValues[i]
        labelDiv.classList.add('columnLabel')
        button1.type = "radio"
        button1.name = "response3"
        button1.value = labelValues[i]

        labelDiv.append(button1)
        labelDiv.append(label1)
        questionColumn3.append(labelDiv)  
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
        question.innerText = questions[questionNum].question
        
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
        question.innerText = questions[questionNum].question
        
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





