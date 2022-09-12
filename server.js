const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const quotes = {
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
    '9': {
        'quote': 'My youth has been nothing but a tenebrous storm, / Pierced now and then by rays of brilliant sunshine; / Thunder and rain have wrought so much havoc / That very few ripe fruits remain in my garden.',
        'author': 'Charles Baudelaire',
        'work': '"The Enemy," Les Fleurs du mal '
    },
    '10': {
        'quote': 'I know the art of evoking happy moments, / And live again our past, my head laid on your knees, / For what’s the good of seeking your languid beauty / Elsewhere than in your dear body and gentle heart? / I know the art of evoking happy moments.',
        'author': 'Charles Baudelaire',
        'work': '"The Balcony," Les Fleurs du mal'
    },
    '11': {
        'quote': 'Tell me, does your heart sometimes fly way, Agatha, / Far from the black ocean of the filthy city, / Toward another ocean where splendor glitters, / Blue, clear, profound, as is virginity? / Tell me, does your heart sometimes fly away, Agatha?',
        'author': 'Charles Baudelaire',
        'work': '"Grieving and Wandering," Les Fleurs du mal'
    },
    '12': {
        'quote': 'death has no country. / Love has no name.',
        'author': 'Mary Oliver',
        'work': '"The Lost Children," American Primitive'
    },
    '13': {
        'quote': 'if I could touch you, / my hands would begin to sing.',
        'author': 'Mary Oliver',
        'work': '"Postcard from Flamingo," American Primitive'
    },
    '14': {
        'quote': 'because my life without you would be / a place of parched and broken trees.',
        'author': 'Mary Oliver',
        'work': '"University Hospital, Boston," American Primitive'
    },
    '15': {
        'quote': '“The foxes in the Sechura Desert always howl like demons at nightfall. Do you know why? To break the silence that terrifies them.”',
        'author': 'Mario Vargas Llosa',
        'work': 'The Time of the Hero'
    },
    '16': {
        'quote': '“even with all its calvaries, life is full of beautiful things.”',
        'author': 'Mario Vargas Llosa',
        'work': 'The War of the End of the World'
    },
    '17': {
        'quote': 'I thought the present was the safer bet. We can only die in the future, I thought; right now we are always alive.',
        'author': 'Amy Hempel',
        'work': '"Pool Night," Reasons to Live'
    },
    '18': {
        'quote': 'I have written letters that are failures, but I have written few, I think, that are lies.',
        'author': 'Amy Hempel',
        'work': '"Tumble Home," Tumble Home'
    },
    '19': {
        'quote': 'I begin this letter to you, then, in the western tradition. If I understand it, the western tradition is: Put your cards on the table.',
        'author': 'Amy Hempel',
        'work': '"Tumble Home," Tumble Home'
    },
    '20': {
        'quote': 'Don’t you find that there is no right place to begin?',
        'author': 'Amy Hempel',
        'work': '"Tumble Home," Tumble Home'
    },
    '21': {
        'quote': 'Such confessions as I intend to make are never printed nor given to other people to read.',
        'author': 'Fyodor Dostoevsky',
        'work': 'Notes from the Underground'
    },
    '22': {
        'quote': 'Then there will be the union of souls, they will have everything in common, there will be no secrets between them. And once they have children, the most difficult times will seem to them happy, so long as there is love and courage. Even toil will be a joy, you may deny yourself bread for your children and even that will be a joy. They will love you for it afterwards; so you are laying by for your future. As the children grow up you feel that you are an example, a support for them; that even after you die your children will always keep your thoughts and feelings, because they have received them from you, they will take on your semblance and likeness. So you see this is a great duty.',
        'author': 'Fyodor Dostoevsky',
        'work': 'Notes from the Underground'
    },
    '23': {
        'quote': 'One can forgive a great deal for the sake of such moments.',
        'author': 'Fyodor Dostoevsky',
        'work': 'Notes from the Underground'
    },
    '24': {
        'quote': 'She understood from all this what a woman understands first of all, if she feels genuine love, that is, that I was myself unhappy.',
        'author': 'Fyodor Dostoevsky',
        'work': 'Notes from the Underground'
    },
    '25': {
        'quote': 'Even in my underground dreams I did not imagine love except as a struggle.',
        'author': 'Fyodor Dostoevsky',
        'work': 'Notes from the Underground'
    },
    '26': {
        'quote': 'We had so long been strangers to one another, had grown so alienated from one another, and suddenly all this . . .',
        'author': 'Fyodor Dostoevsky',
        'work': '"The Meek One"'
    },
    'unknown': {
        'quote': 'unknown',
        'author': 'unknown',
        'work': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:bookQuote', (request,response)=>{
    const bookQuotes = request.params.bookQuote.toLowerCase()
    if(quotes[bookQuotes]){
        response.json(quotes[bookQuotes])
    }else{
        response.json(quotes['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})