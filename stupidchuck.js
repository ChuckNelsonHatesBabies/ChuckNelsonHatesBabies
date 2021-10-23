let messages = [
    "Chuck Nelson Sucks Turds",
    "Chuck Nelson farts on babies",
    "Chuck Nelson pees outside",
    "Chuck Nelson doesn’t turn his phone on silent in the movies",
    "Chuck Nelson looks like a potato",
    "Chuck Nelson eats onions before he kisses babies for photo ops",
    "Chuck Nelson punches old people in the face",
    "Chuck Nelson hates your mom",
    "Chuck Nelson steals salt from Burger King",
    "Chuck Nelson doesn’t wash his hands before dinner",
    "Chuck Nelson has never beaten a baby in a game of chess",
    "Chuck Nelson has 5 nipples",
    "Chuck Nelson has three tattoos of Jaden Smith",
    "Chuck Nelson sits when he pees",
    "Chuck Nelson wears Ugg boots",
    "Chuck Nelson blew his savings on avocado toast",
    "Chuck Nelson honks the instant the light turns green",
    "Chuck Nelson always drives with his high beams on",
    "Chuck Nelson smells like turkey",
    "Chuck Nelson puts the toilet paper roll on backwards",
    "Chuck Nelson doesn’t know how to tell time",
    "Chuck Nelson has a micropenis",
    "Chuck Nelson’s face is birth control",
    "Chuck Nelson never uses his turn signal",
    "Chuck Nelson can’t count to ten without using his fingers",
    "Chuck Nelson has a tattoo of his mother’s name on his inner thigh",
    "Chuck Nelson wears a toupee", 
    "Chuck Nelson wears a men’s size 5 shoes",
    "Chuck Nelson never flosses",
    "Chuck Nelson has coffee breath",
    "Chuck Nelson farts in crowded elevators", 
    "Chuck Nelson still sleeps with his teddy bear", 
    "Chuck Nelson can’t spell 'Chuck Nelson'",
    "Chuck Nelson sucks his thumb",
    "Chuck Nelson picks his nose",
    "Chuck Nelson doesn’t return his shopping cart",
    "Chuck Nelson doesn’t know what state Erie is in",
    "Chuck Nelson can’t find the United States on a map",
    "Chuck Nelson thinks 1+1=11",
    "Chuck Nelson doesn’t know how to tie his tiny shoes",
    "Chuck Nelson went to see Magic Mike 52 times",
    "Chuck Nelson cries after sex"
];

messages.forEach((mess) => {
    const currentMessage = document.createElement('p');
    const node = document.createTextNode(mess);
    currentMessage.appendChild(node);
    document.getElementById('messages').appendChild(currentMessage);
});

const elemHeight = document.getElementById('messages').scrollHeight;
let scrollTop = 0;
let increment = 3;

window.setInterval(function() {
    if (scrollTop < elemHeight) {
        var elem = document.getElementById('messages');
        elem.scrollTo(0, scrollTop);
        scrollTop += increment;
    }
}, 100);
