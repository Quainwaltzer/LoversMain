document.querySelector('.clickButton').addEventListener('click', function() {
    let texts = document.querySelectorAll('.flyText li'); // Select list items inside .flyText
    let button = this; // Reference to the button itself
    let welcome = document.querySelector('.welcome');
    let content = document.querySelector('.content-wrap');
    let main = document.querySelector('.main');
    let bodys = document.querySelector('body');
    texts.forEach(function(text) {
        text.classList.toggle('active'); // Add or remove the class for list items
    });

    button.classList.toggle('active'); // Add or remove the class for the button
        welcome.classList.toggle('active'); // Remove from layout
    content.classList.toggle('active');
    main.classList.toggle('activate');
    body.classList.toggle('activate');
});

 
    document.querySelector('.rewind').addEventListener('click', function() {
        const back = document.querySelector('.welcome');
        back.classList.remove('active'); // Remove active class
        const texts = document.querySelectorAll('.flyText');
        texts.forEach(function(text) {
            text.classList.remove('active'); // Remove active class from flyText
        });

        const button = document.querySelector('.clickButton');
        button.classList.remove('active'); // Remove active class from button
    
        const content = document.querySelector('.content-wrap');
        content.classList.remove('active');
        const main = document.querySelector('.main');
        main.classList.remove('activate');
        const body = document.querySelector('body');
        body.classList.remove('activate');
    });

    const animatedImages = document.querySelectorAll('.animate-me');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, options);
    
    animatedImages.forEach(image => {
      observer.observe(image);
    });
    