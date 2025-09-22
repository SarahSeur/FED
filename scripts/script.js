const btnElement = document.createElement("button");

// Coyier, C. (2010, 16 juli). Test if Element Supports Attribute | CSS-Tricks. CSS-Tricks. https://css-tricks.com/snippets/javascript/test-if-element-supports-attribute/
if ("command" in btnElement) {

} else {
  const openButton = document.querySelector('nav div button:last-of-type');
  const closeButton = document.querySelector('button[autofocus]');
  const dialog = document.querySelector('dialog');

  openButton.addEventListener('click', function() {
    dialog.showModal();
  });

  closeButton.addEventListener('click', function() {
    dialog.close();
  });
}