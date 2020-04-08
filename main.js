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
