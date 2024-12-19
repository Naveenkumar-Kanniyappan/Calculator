let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let string = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        if (buttonText === '=') {
            try {
                if (string.includes('%')) {
                    let parts = string.split('%');
                    if (parts.length === 2) {
                        let num1 = parseFloat(parts[0]);
                        let num2 = parseFloat(parts[1]);
                        string = (num1 * (num2 / 100)).toString();
                    } 
                    else {
                        alert("Error")
                    }
                } 
                else {
                    string = eval(string.replace('x', '*'));
                }
                input.innerHTML = string;
            } 
            catch {
                input.innerHTML = "Error";
                string = "";
            }
        } 
        else if (buttonText === 'C') {
            string = "";
            input.innerHTML = "0";
        } 
        else if (button.classList.contains('backspace')) { 
            string = string.slice(0, -1); 
            input.innerHTML = string || "0";
        } 
        else {
            string += buttonText;
            input.innerHTML = string;
        }
    });
});
buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('active');
    });
    button.addEventListener('mouseup', () => {
        button.classList.remove('active');
    });
    button.addEventListener('mouseup', () => {
        button.classList.remove('active');
    });
});

