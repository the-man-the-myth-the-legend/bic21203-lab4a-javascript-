function generateNumbers() {
    let numberList = document.getElementById("numberList");
    numberList.textContent = "";
    
    for (let i = 1; i <= 5; i++) {
        
        let li = document.createElement("li");
        li.textContent = "The number is " + i;
        numberList.appendChild(li);
    }
}
document.getElementById("generateBtn").addEventListener("click", generateNumbers);