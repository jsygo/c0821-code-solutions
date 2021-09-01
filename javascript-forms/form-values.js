var $contactForm = document.querySelector('form');

$contactForm.addEventListener('submit', function () {
  event.preventDefault();
  var formValues = {};
  formValues.name = $contactForm.elements.name.value;
  formValues.email = $contactForm.elements.email.value;
  formValues.message = $contactForm.elements.message.value;
  console.log('form values:', formValues);
  $contactForm.reset();
});
