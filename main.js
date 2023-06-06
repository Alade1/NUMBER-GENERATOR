const input = document.getElementById("inputNumber");
const validateText = document.getElementById("validationText");
const button = document.getElementById("submitNumber");
const numberContainer = document.getElementById("numbersContainer");


button.addEventListener("click", (event) =>{
    event.preventDefault();

    const inputValue = parseInt(input.value);

    if(input.value == ""){
        validateText.textContent ="Enter a fucking value";
        validateText.style.border = "1px solid red";
       
    }
    else if(isNaN(inputValue)){
        validateText.textContent = "Enter a number not a fucking string";
        validateText.style.border = "1px solid red";
    }
    else{
        validateText.textContent="";
        numberContainer ="";
        for (i=1; i < inputValue; i++){
            const span = document.createElement("span");
            span.textContent = i;

            if(i%2 ===0){
                span.style.background="green";
                validateText.textContent="This is even";
            }
            else if (i%2 ===1){
                span.style.background ="red";
                validateText.textContent="This  is odd";
            }
            
        }
        for(i=2; i < inputValue;i++){
            if(i % i ===0){
                span.style.background ="azureblue";
                validateText.textContent="This is prime";
            }
        }
        span.classlist.add("span_fix");
        numberContainer.appendChild(span);

}  
})
