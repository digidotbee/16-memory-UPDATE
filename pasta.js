<div id="grid">
      <div data-target="1" data-child="card-1">
        <span class="child" data-el="card-1" data-target="1">1</span>
      </div>
      <div data-target="1">
        <span data-target="1">1</span>
      </div>
      <div data-target="2">
        <span data-target="2">2</span>
      </div>
      <div data-target="2">
        <span data-target="2">2</span>
      </div>
    </div>

const grid = document.querySelector('#grid')
let card1 = null
let card2 = null
grid.addEventListener('click', function (e) {
  const currEl = e.target
 console.log(currEl.dataset.target)
}) 