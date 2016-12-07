$('.dropdown-button').dropdown({
  constrain_width: false, // Does not change width of dropdown to that of the activator
  hover: true, // Activate on hover
});

$('.collapsible').collapsible();

$('.modal').modal();

$('.save').click(function(){
  $('#modal1').modal('close');
});