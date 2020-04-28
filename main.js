// ASSIGNMENT:  write the document ready function
// PURPOSE OF CODE:  tells jquery the document is ready to start
 $(document).ready(() => {
     
 




// ASSIGNMENT:  write the jQ code that shows the dropdown menu for the cart
// PURPOSE OF CODE:  shows the event to show cart menu on click

$('#cart').on('click', () => {
    $('cartMenu').show();
    
})



// ASSIGNMENT write the jQ code that shows the dropdown menu for the account
// PURPOSE OF CODE: shows the event to show account menu on click
$('#account').on('click', () => {
    $('accountMenu').show();
    
})


// ASSIGNMENT:  write the jQ code that shows the dropdown menu for help
// PURPOSE OF CODE: shows the event to show help menu cart menu on click

$('#cart').on('click', () => {
    $('helpMenu').show();
    
})

// ASSIGNMENT:  write the jQ code that causes the menu to disappear
// PURPOSE OF CODE: makes menu dissapear whn mouse leaves

$('dropdown-menu').on('mouseleave',() => {
    $('dropdown-menu').hide();

})

})