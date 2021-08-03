// =======================================

const dragItems = document.querySelectorAll('.dragItem');
const dropZones = document.querySelectorAll('.dropZone');
let draggedItem = null;
// let droppeZone = null;
let droppedItem = null;

dragItems.forEach(dragItem => {
  dragItem.addEventListener('dragstart', handlerDragstart);
  dragItem.addEventListener('dragend', handlerDragend);
  dragItem.addEventListener('drag', handlerDrag);

  dragItem.addEventListener('dragenter', () => {
    if (draggedItem !== droppedItem) {
      droppedItem = dragItem;
    }
  });

  dragItem.addEventListener('dragleave', () => {
    droppedItem = null;
  });
});

dropZones.forEach(dropZone => {
  dropZone.addEventListener('dragenter', handlerDragenter);
  dropZone.addEventListener('dragleave', handlerDragleave);
  dropZone.addEventListener('dragover', handlerDragover);
  dropZone.addEventListener('drop', handlerDrop);
});

function handlerDragstart(e) {
  // e.dataTransfer.setData('dragItem', this.dataset.item);
  this.classList.add('dragItem--active');
  draggedItem = this;
}

function handlerDragend(e) {
  this.classList.remove('dragItem--active');
  draggedItem = null;
}

function handlerDrag(e) {
  // console.log('drag');
}

function handlerDragenter(e) {
  e.preventDefault();
  this.classList.add('dropZone--active');
  // droppeZone = this;
}

function handlerDragleave(e) {
  this.classList.remove('dropZone--active');
  // droppeZone - null
}

function handlerDragover(e) {
  e.preventDefault();
}

function handlerDrop(e) {
  // const dragFlag = e.dataTransfer.getData('dragItem');
  // const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);

  if (droppedItem) {
    if (droppedItem.parentElement === draggedItem.parentElement) {
      const children = Array.from(droppedItem.parentElement.children);
      const draggedIndex = children.indexOf(draggedItem);
      const droppedIndex = children.indexOf(droppedItem);

      if (draggedIndex > droppedIndex) {
        draggedItem.parentElement.insertBefore(draggedItem, droppedItem);
      } else {
        draggedItem.parentElement.insertBefore(draggedItem, droppedItem.nextElementSibling);
      }
    } else {
      this.insertBefore(draggedItem, droppedItem);
    }
  } else {
    this.append(draggedItem);
  }
}
