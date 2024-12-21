let string = "";
let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        if (buttonText === "=") {
            try {
                let expression = string.replace(/x/g, '*');
                if (expression.includes('%')) {
                    let arr = expression.match(/(\d+|[+\-*/%])/g);

                    for (let i = 0; i < arr.length; i++) {
                        let operator = arr[i];
                        let num1 = parseInt(arr[i - 1]);
                        let num2 = parseInt(arr[i + 1]);

                        if (operator === "%") {
                            arr[i + 1] = (num1 * (num2 / 100)).toString();
                            arr.splice(i - 1, 2);
                            i--;
                        } else if (operator === "*") {
                            arr[i + 1] = (num1 * num2).toString();
                            arr.splice(i - 1, 2);
                            i--;
                        } else if (operator === "/") {
                            arr[i + 1] = (num1 / num2).toString();
                            arr.splice(i - 1, 2);
                            i--;
                        }
                    }

                    let result = parseInt(arr[0]);
                    for (let i = 1; i < arr.length; i++) {
                        let operator = arr[i];
                        let num = parseInt(arr[i + 1]);

                        if (operator === "+") {
                            result = result + num;
                        } else if (operator === "-") {
                            result = result - num;
                        }
                    }

                    input.innerHTML = result;
                    string = result.toString();
                }
                else {
                    input.innerHTML = eval(expression);
                    string = eval(expression).toString();
                }
            }
            catch (e) {
                input.innerHTML = "Error";
                string = "";
            }
        } 
        else if (buttonText === "C") {
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