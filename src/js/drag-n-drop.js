const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);
// item.addEventListener('dragstart', onDragStart);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  //   placeholder.addEventListener('dragenter', dragenter);
  //   placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
  //   placeholder.addEventListener('drop', onDrop);
}

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide');

  //   event.target.className = 'item';
}

function dragover(event) {
  event.preventDefault();
}

// function dragenter(event) {
//   event.target.classList.add('hovered');
// }

// function dragleave(event) {
//   event.target.classList.remove('hovered');
// }

function dragdrop(event) {
  //   event.target.classList.remove('hovered');
  event.target.append(item);
  event.currentTarget.append(item);
}

// var arr = [];
// function allowDrow(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData('text', event.target.id);
//   ev.dataTransfer.setData('content', event.target.id);
// }

// function drop(event, block) {
//   const data = event.dataTransfer.getData('text');
//   const content = event.dataTransfer.getData('content');

//   if (block.id == 'div2') {
//     if (arr.indexOf(content) == -1) {
//       arr.push(content);
//     }
//   }
//   if (block.id == 'div1') {
//     if (arr.indexOf(content) != -1) {
//       arr.splice(arr.indexOf(content), 1);
//     }
//   }
//   block.appendChild(document.getElementById(data));
// }
