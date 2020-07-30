// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $(".scroll").on('click', function(event) {
//         alert(this.hash);
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
//         var position = $(hash).offset().top - 80;
  
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $(".body-content").animate({
//           scrollTop: position
//         }, "slow", "swing");
//         window.location.hash = hash;
//       } // End if
//     });
//   });

document
  .querySelector('.scroll')
  .on('click', function(evnt) {
    document
     .querySelector(this.hash)
     .scrollIntoView({behavior: auto})
  })