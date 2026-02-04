document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', e.target.innerHTML);
        card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => card.classList.remove('dragging'));
});

document.querySelectorAll('.list').forEach(list => {
    list.addEventListener('dragover', e => e.preventDefault());
    list.addEventListener('drop', e => {
        const data = e.dataTransfer.getData('text/plain');
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.draggable = true;
        newCard.innerHTML = data;
        list.appendChild(newCard);
        // Nota: Esto es visual, para que sea permanente necesitarás una base de datos después.
    });
});
