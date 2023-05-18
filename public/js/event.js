const eventFormHandler = async (event) => {
    event.preventDefault();
  
    // const holiday_name = document.querySelector('#holiday_name').value.trim();
    const firstName = document.querySelector('#first_name').value.trim();
    const lastName = document.querySelector('#last_name').value.trim();

    if (firstName && lastName) {
        const response = await fetch('/api/event', {
          method: 'POST',
          body: JSON.stringify({firstName, lastName}),
          headers: { 
            'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            // console.log('lastName');
            document.location.replace('/giftSelection');
          } else {
            alert('Failed to create event');
          }
        }
      };

      document
        .querySelector('.new-event-form')
        .addEventListener('submit', eventFormHandler);