import { formatName, addNums } from "./formatters";


const theButton = document.getElementById('formatIt') as HTMLButtonElement;
const firstName = document.getElementById('firstName') as HTMLInputElement;
const lastName = document.getElementById('lastName') as HTMLInputElement;
const formatted = document.getElementById('formatted') as HTMLHeadingElement;



console.log({
    theButton,
    firstName,
    lastName,
    formatted
});

theButton.addEventListener('click', getNames)

function getNames() {
    const fName = firstName.value;
    const lName = lastName.value;
    console.log({ fName, lName })
    const fullName = formatName(fName, lName);
    formatted.innerText = fullName;
}
