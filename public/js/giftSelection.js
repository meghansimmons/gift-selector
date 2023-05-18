// const withAuth = require('../../util/auth')

console.log("the page is loading!!");

  
const saveWishList = async (id, url) =>{
    console.log(id,url);

    const giftId = id;
    const firstName = 'Eileen';
    console.log(firstName);
    const lastName = 'Simms';
    console.log(lastName);
    const holidayName = "Valentine's Day";
    console.log(holidayName);
    const productURL = url;

    const postSavedGift = await fetch('/api/savedgift', {
        method: "POST",
        body: JSON.stringify ({
            first_name: firstName,
            last_name: lastName,
            // relationship: relationship,
            // gender: gender,
            productURL: productURL,
            // event_id:eventId,
            gift_id: giftId
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
