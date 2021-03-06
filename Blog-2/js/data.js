const scriptURL = 'https://script.google.com/macros/s/AKfycbzIa67YizxTrzBcU5FFwndRUTkAkVGxrLJfiamgkLsRfitXKOwIDasTcF4SavRKSA_ABg/exec'
const form = document.forms['news']

    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const myAlert = document.querySelector('.my-alert');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // ketika tombol submit diklik
      // tampilkan tombol loading, hilangkan tombol kirim
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
          // tampilkan tombol kirim, hilangkan tombol loading
          btnLoading.classList.toggle('d-none');
          btnKirim.classList.toggle('d-none');
          // tampilkan alert
          myAlert.classList.toggle('d-none');
          // reset formnya
          form.reset();
          console.log('Success!', response);
        })
        .catch((error) => console.error('Error!', error.message));
    });
    jQuery(document).ready(function () {
  function openFancybox() {
      setTimeout(function () {
          jQuery('#popuplink').trigger('click');
      }, 500);
  };
  var visited = jQuery.cookie('visited');
  if (visited == 'no') {
       // second page load, cookie active
  } else {
      openFancybox(); // first page load, launch fancybox
  }
  jQuery.cookie('visited', 'no', {
      expires: 0 // the number of days cookie  will be effective
  });
  jQuery("#popuplink").fancybox({modal:true, maxWidth: 400, overlay : {closeClick : true}});
});
