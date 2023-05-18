console.log("the page is loading!!");

const wishBtnEl = document.getElementById('wish-btn');
// console.log(wishBtnEl);

const saveWishList = async (event) =>{
    event.preventDefault();
   
    const firstName = 'Cate';
    console.log(firstName);
    const lastName = 'Simms';
    console.log(lastName);
    const holidayName = "Valentine's Day";
    console.log(holidayName);

    const postSavedGift = await fetch('/api/savedgift', {
        method: "POST",
        body: JSON.stringify ({
            first_name: firstName,
            last_name: lastName
            // relationship: relationship,
            // gender: gender,
            // productURL: productURL,
            // event_id:eventId,
            // gift_id: giftId
        }),
        headers: { 'Content-Type': 'application/json' },
    })


    if (postSavedGift.ok) {
        document.location.replace('/');
        alert("Your gift has been saved!");
    }else{
        alert("Something went wrong!")
    }
}

wishBtnEl.addEventListener('click', saveWishList);
