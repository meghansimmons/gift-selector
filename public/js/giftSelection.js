console.log("the page is loading!!");

const wishBtnEl = document.getElementById('wish-btn');


const formSubmission = async (event) =>{
    event.preventDefault();
   
    const firstName = 'Meghan';
    console.log(firstName);
    const lastName = 'Simmons';
    console.log(lastName);
    const holidayName = "Valentine's Day";
    console.log(holidayName);
}

wishBtnEl.addEventListener('click', formSubmission);
