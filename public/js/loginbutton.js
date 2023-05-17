var getLoginPage = async (e) => {
    // e.preventdefault();
    
    document.location.replace('/login');
  };

document.querySelector('#loginbutton').addEventListener('click', getLoginPage);