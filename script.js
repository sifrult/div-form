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
