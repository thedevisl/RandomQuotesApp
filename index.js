console.log("Random quotes app")



let quotes = [
    {
        quot:'\“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'\t handle me at my worst, then you sure as hell don\'\t deserve me at my best.\”',
        writer:' Marilyn Monroe'
    },
    {
        quot:'“Be yourself; everyone else is already taken.”',
        writer:'Oscar Wilde'
    },
    {
        quot:'“Two things are infinite: the universe and human stupidity; and I\'\m not sure about the universe.”',
        writer:'Albert Einstein'
    },
    {
        quot:'“So many books, so little time.”',
        writer:'Frank Zappa'
    },
    {
        quot:'“Be who you are and say what you feel, because those who mind don\'\t matter, and those who matter don\'\t mind.”',
        writer:'Bernard M. Baruch'
    },
    {
        quot:'“A room without books is like a body without a soul.” ',
        writer:'Marcus Tullius Cicero'
    },
    {
        quot:'“You\'\ve gotta dance like there\'\s nobody watching,Love like you\'\ll never be hurt,Sing like there\'\s nobody listening,And live like it\'\s heaven on earth.”',
        writer:'William W. Purkey'
    },
    
    {
        quot:'“You know you\'\re in love when you can\'\t fall asleep because reality is finally better than your dreams.”',
        writer:'Dr. Seuss'
    },
    {
        quot:'“You only live once, but if you do it right, once is enough.”',
        writer:'Mae West'
    },
    {
        quot:'“Be the change that you wish to see in the world."',
        writer:' Mahatma Gandhi'
    },
    {
        quot:'“In three words I can sum up everything I\'\ve learned about life: it goes on.”',
        writer:'Robert Frost'
    },
    {
        quot:'“If you want to know what a man\'\s like, take a good look at how he treats his inferiors, not his equals.”',
        writer:'J.K. Rowling, Harry Potter and the Goblet of Fire'
    },
    {
        quot:'“Don’t walk in front of me… I may not follow Don\’\t walk behind me… I may not lead Walk beside me… just be my friend”',
        writer:'Albert Camus'
    },
    {
        quot:'“No one can make you feel inferior without your consent."',
        writer:'Eleanor Roosevelt, This is My Story'
    },
]

const quoteiterator = iterator(quotes);
function iterator(data){
    let nextIndex = 0;
    return {
        next : function(){
            return nextIndex<data.length ? 
            {value: data[nextIndex++], done: false} :
            {done : true}
        }
    };
}     
   
nextQuote();

const next = document.getElementById('next');
next.addEventListener('click',nextQuote);

function nextQuote(){
    const currentquote = quoteiterator.next().value;
    let quote = document.getElementById("quot");

    if(currentquote != undefined){
        quote.innerHTML = `<p>   ${currentquote.quot}   </p><footer class="blockquote-footer">  ${currentquote.writer}  </footer>`;
    }
    else {
        alert("end of quotes!!!");
        window.location.reload();
    }
}



