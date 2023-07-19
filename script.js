const checkboxes = document.getElementsByClassName('checkbox');

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function() {
    const targetId = this.getAttribute('data-target');
    const target = document.getElementById(targetId);

    if (this.checked) {
      target.style.display = 'block';
    } else {
      target.style.display = 'none';
    }
  });
}

const copyButtons = document.getElementsByClassName('copy-button');

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener('click', function() {
    const targetId = this.getAttribute('data-copy');
    const target = document.getElementById(targetId);

    // Create a temporary textarea to hold the text to be copied
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = target.textContent;
    document.body.appendChild(tempTextarea);

    // Select the text in the textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
  });
}
