const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName':'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England' 
    },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois' 
    },
    'dylan':{
        'age': 29,
        'birthName':'Dylan',
        'birthLocation': 'Dylan' 
    },

    '1': {
        'quote': 'Love is not all: it is not meat nor drink',
        'author': 'Edna St. Vincent Millay',
        'work': '"Sonnet XXX," Fatal Interview'
    },
    '2': {
        'quote': 'Yet shamed the more that in my heart I know, / Cry as I may, I could not let you go.',
        'author': 'Edna St. Vincent Millay',
        'work': '"Sonnet X," Fatal Interview'
    },
    '3': {
        'quote': 'I bring you, calling out as children do: “Look what I have!” and “These are all for you.”',
        'author': 'Edna St. Vincent Millay',
        'work': '"Not In A Silver Casket Cool With Pearls," Collected Poems'
    },
    '4': {
        'quote': '(dreaming, / et / cetera, of / Your smile / eyes knees and of your Etcetera)',
        'author': 'e. e. cummings',
        'work': '"My sweet old etcetera," is 5'
    },
    '5': {
        'quote': 'This hour I tell things in confidence, / I might not tell everybody but I will tell you.',
        'author': 'Walt Whitman',
        'work': 'Leaves of Grass'
    },
    '6': {
        'quote': 'Hands I have taken, face I have kissed, mortal have I known, it shall be you.',
        'author': 'Walt Whitman',
        'work': 'Leaves of Grass'
    },
    '7': {
        'quote': 'Darkness you are gentler than my lover . . . .',
        'author': 'Walt Whitman',
        'work': 'Leaves of Grass'
    },
    '8': {
        'quote': 'It is time to explain myself . . . . Let us stand up.',
        'author': 'Walt Whitman',
        'work': 'Leaves of Grass'
    },
    'unknown': {
        'death': 'unknown.',
        'booksWritten': 0,
        'oneoftheThree': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})