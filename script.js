const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")

const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];
  
  const convertToRoman_recursive = (num) => {
    for (let { value, numeral } of romanNumerals) {
      if (num >= value) {
        return numeral + convertToRoman_recursive(num - value);
      }
    }
    return '';
  };
//   const convertToRoman = (num) => {
//     let roman = "";
//     romanNumerals.forEach(({ value, numeral }) => {
//       while (num >= value) {
//         roman += numeral;
//         num -= value;
//       }
//     });
//     return roman;
//   };

const checkUserInput = () => {
    const inputInt = parseInt(userInput.value); 
    if (!userInput.value || isNaN(inputInt)){
        output.innerText = "Please enter a valid number";
        output.classList.remove("hidden");
        output.style.background = "#f7716d";
        output.style.border = "5px solid #d82f2a"
        return;
    } else if (inputInt <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
        output.classList.remove("hidden");
        output.style.background = "#f7716d";
        output.style.border = "5px solid #d82f2a"
        return;
    } else if (inputInt >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        output.classList.remove("hidden");
        output.style.background = "#f7716d";
        output.style.border = "5px solid #d82f2a"
        return;
    }
    const romanNumber = convertToRoman_recursive(inputInt);
    output.innerText = `${romanNumber}`;
    output.classList.remove("hidden");
    output.style.background = "#4caf50";
    output.style.border = "5px solid #388e3c";
}

convertBtn.addEventListener("click",checkUserInput);
userInput.addEventListener("keydown",
    (e) => {
        if (e.key == "Enter"){
            e.preventDefault();
            checkUserInput()
        }
    }
)