const prevNum = document.querySelector(".prevNum"),
    currNum = document.querySelector(".currNum"),
    numBtns = document.querySelectorAll(".numBtn"),
    operBtns = document.querySelectorAll(".operatorBtn"),
    eqlsBtn = document.querySelector(".eqlsBtn");

numBtns.forEach(num => {
    num.addEventListener("click", () => {
        calculator.appednNumber(num.value),
        calculator.updateDisplay();
    })
});

operBtns.forEach(operator => {
    operator.addEventListener("click", () => {
        calculator.chooseOperation(operator.value),
        calculator.updateDisplay();
    })    
});

eqlsBtn.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay()
})

const calculator = {
    operator : "",
    currNum : "",
    prevNum : "",

    updateDisplay(){
        currNum.innerText = this.currNum;
        prevNum.innerText = this.prevNum;
    },

    appednNumber (num){
        if (num === "." && this.currNum.includes(".")) return;
        this.currNum += num.toString();
    },

    chooseOperation (operator){
        if (this.currNum === "") return;
        if (this.prevNum !== "") {
            this.compute()
        }
        this.operator = operator;
        this.prevNum = this.currNum;
        this.currNum = "";
    },

    compute (){
        let result;
        const curr = parseFloat(this.currNum),
            prev = parseFloat(this.prevNum);

        if (isNaN(curr) || isNaN(prev)) return;

        switch (this.operator) {
            case "+" :
                result = prev + curr;
                break;
            case "-" :
                result = prev - curr;
                break;
            case "*" :
                result = prev * curr;
                break;
            case "/" :
                result = prev / curr;
                break;
        };

        this.prevNum = "";
        this.operator = "";
        this.currNum = result.toString(); 
    },
}