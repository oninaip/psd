const songs=[
    {name:"There i'm to worship",
     words:`Light of the World 
            You stepped down into darkness,
            Opened my eyes, let me see 
            Beauty that made this heart adore You,
            Hope of a life spent with You
            Here I am to worship
            Here I am to bow down,
            Here I am to say that You are my God
            You are altogether lovely Altogether worthy,
            Altogether wonderful to me`,
    chords:`G D Em C
    G D Am G D C
     G D/nEm C
     G D Em C
     G D Em C
     D Em C D Em C`},
    {name:"I'am there",
     words:`Light of the World 
            You stepped down into darkness,
            Opened my eyes, let me see 
            Beauty that made this heart adore You,
            Hope of a life spent with You
            Here I am to worship
            Here I am to bow down,
            Here I am to say that You are my God
            You are altogether lovely Altogether worthy,
            Altogether wonderful to me`,
    chords:`G D Em C
    G D Am G D C
     G D/nEm C
     G D Em C
     G D Em C
     D Em C D Em C`},
    {name:"Jjkjkj",
     words:`Light of the World 
            You stepped down into darkness,
            Opened my eyes, let me see 
            Beauty that made this heart adore You,
            Hope of a life spent with You
            Here I am to worship
            Here I am to bow down,
            Here I am to say that You are my God
            You are altogether lovely Altogether worthy,
            Altogether wonderful to me`,
    chords:`G D Em C
    G D Am G D C
     G D/nEm C
     G D Em C
     G D Em C
     D Em C D Em C`},
    {name:"Lojbbnb",
     words:`Light of the World 
            You stepped down into darkness,
            Opened my eyes, let me see 
            Beauty that made this heart adore You,
            Hope of a life spent with You
            Here I am to worship
            Here I am to bow down,
            Here I am to say that You are my God
            You are altogether lovely Altogether worthy,
            Altogether wonderful to me`,
    chords:`G D Em C
    G D Am G D C
     G D/nEm C
     G D Em C
     G D Em C
     D Em C D Em C`},
    {name:"Lololo hhj",
     words:`Light of the World 
            You stepped down into darkness,
            Opened my eyes, let me see 
            Beauty that made this heart adore You,
            Hope of a life spent with You
            Here I am to worship
            Here I am to bow down,
            Here I am to say that You are my God
            You are altogether lovely Altogether worthy,
            Altogether wonderful to me`,
    chords:`G D Em C
    G D Am G D C
     G D/nEm C
     G D Em C
     G D Em C
     D Em C D Em C`},
    {name:"Lore tre tybv",
     words:`Light of the World 
            You stepped down into darkness,
            Opened my eyes, let me see 
            Beauty that made this heart adore You,
            Hope of a life spent with You
            Here I am to worship
            Here I am to bow down,
            Here I am to say that You are my God
            You are altogether lovely Altogether worthy,
            Altogether wonderful to me`,
    chords:`G D Em C
    G D Am G D C
     G D/nEm C
     G D Em C
     G D Em C
     D Em C D Em C`},
    {name:"I am cute",
     words:`Light of the World 
            You stepped down into darkness,
            Opened my eyes, let me see 
            Beauty that made this heart adore You,
            Hope of a life spent with You
            Here I am to worship
            Here I am to bow down,
            Here I am to say that You are my God
            You are altogether lovely Altogether worthy,
            Altogether wonderful to me`,
    chords:`G D Em C
    G D Am G D C
     G D/nEm C
     G D Em C
     G D Em C
     D Em C D Em C`},
    {name:"Ok, Baby",
     words:`Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Etiam hendrerit libero nunc, 
            et tempor elit mollis non. 
            Sed volutpat nunc viverra odio volutpat, 
            eu gravida augue tempus. 
            Curabitur non est ut orci viverra 
            elementum eget non ligula. 
            Mauris pharetra ipsum id consequat aliquet. 
            Sed eleifend et leo vel tristique. `,
    chords:`G D Em C
    G D Am G D C
     G D/nEm C
     G D Em C
     G D Em C
     D Em C D Em C`}
]

export function reducerSong(state=songs, action){
    switch(action.type){
        case "SHOW_SONG": return  [...state,{name:action.payload.name,words:action.payload.words,chords:action.payload.chords,}];
        default: return state;
            }
}