let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '%':
                try{
                    display.innerText = (display.innerText/100);
                } catch {
                    display.innerText = "Error"
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});


//code source  https://dev.to/javascriptacademy/create-a-simple-calculator-using-html-css-and-javascript-4o7k

/* I make a little edit. */