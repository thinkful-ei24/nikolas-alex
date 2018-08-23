'use strict';

$(function() {
  addAnItem();
  check();
  removeItem();
});

function addAnItem() {
  $('form button').on('click', function(event) {
    event.preventDefault();
    const groceryItem = $('form input').val();
    $('form input').val('');

    const htmlStuff = `<li>
    <span class="shopping-item">${groceryItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;

    $('ul').append(htmlStuff);
  });
}

function check() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked")
  });
}

function removeItem () {
  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).closest("li").remove("li");
  });
}