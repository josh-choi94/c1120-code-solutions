function handleClick(event) {
    console.log('button clicked');
    console.log('event:', event);
    console.log('event.target:', event.target);
  
  }
  var $button = document.querySelector('.click-button');
  $button.addEventListener('click', handleClick);
  
  function handleMouseOver(event) {
    console.log('button hovered');
    console.log('event:', event);
    console.log('event.target:', event.target);
  
  }
  var $hover = document.querySelector('.hover-button');
  $hover.addEventListener('mouseover', handleMouseOver);
  
  function handleDoubleClick(event) {
    console.log('button double-clicked');
    console.log('event:', event);
    console.log('event.target:', event.target);
  }
  var $double = document.querySelector('.double-click-button');
  $double.addEventListener('dblclick', handleDoubleClick);
  