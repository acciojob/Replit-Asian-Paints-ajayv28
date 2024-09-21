//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', function() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Reset all grid items to transparent
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change color of the specified block if it is valid
    if (blockId >= 1 && blockId <= 9) {
        const targetItem = document.getElementById(blockId);
        targetItem.style.backgroundColor = color;
    } else {
        alert('Please enter a valid block ID (1-9)');
    }
});

document.getElementById('reset_button').addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
});