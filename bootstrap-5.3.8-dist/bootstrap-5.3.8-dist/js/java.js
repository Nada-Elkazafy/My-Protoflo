
   (function(){
      emailjs.init('4pXPqEGQXysPq6BMa'); 
   })();


document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault(); // منع إعادة تحميل الصفحة

  emailjs.sendForm('service_qn3ck7a', 'template_prfxtib', this)
    .then(function() {
      alert('Thank you! Your message has been sent.');
    }, function(error) {
      alert('Oops! Something went wrong...', error);
    });

  this.reset();
});
