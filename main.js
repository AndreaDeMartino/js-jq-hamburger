// Descrizione
// Hamburger menu: mostrare / nascondere il menu principale (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

var hamburger = $('.header-right > a');
var hamburgerMenu = $('.hamburger-menu')
var close = $('.close');

//  *** Soluzione 1 (Sfruttando le classi) ***

hamburger.click( function() {
  console.log('Click Hamburger');
  hamburgerMenu.addClass('active')
}
);

close.click( function() {
  console.log('Click Close');
  hamburgerMenu.removeClass('active');
}
);


//  *** Soluzione 2 (Cambiando css) ***

// hamburger.click( function() {
//   console.log('Hamburger Cliccato');
//   hamburgerMenu.css('display','block');
// }
// )

// close.click( function() {
//   console.log('Close cliccato');
//   hamburgerMenu.css('display','none')
// }
// )

//  *** Soluzione 3 (Fade) ***

// hamburger.click( function() {
//   console.log('Click Hamburger');
//   hamburgerMenu.fadeIn();
// }
// )

// close.click( function() {
//   console.log('Click close');
//   hamburgerMenu.fadeOut();
// })


// SORRY FOR THIS BONUS..
logo = $('img');

logo.click( function() {
  console.log('Smanettone...');
  
  logo.attr('src','https://www.techid.it/wp-content/uploads/2018/01/Pornhub_logo-white.png')
}
)