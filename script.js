'use strict';

const slider = document.querySelector('#slider');
let image = document.getElementsByClassName('myImg')[0];

const newImg = document.querySelector('input[type="file"]');

const input = document.getElementsByTagName('input')[1];

slider.addEventListener('change', () => {
  image.style.filter = 'brightness(' + slider.value + '%)';
});

newImg.addEventListener('change', function () {
  const file = this.files[0];
  //console.log(file);

  //valid image format
  let validExtension = ['jpeg', 'png', 'gif', 'svg'];

  let extension = file.name.substring(file.name.lastIndexOf('.') + 1);
  let matchedExtension = validExtension.includes(extension);

  //console.log(extension);

  if (matchedExtension === true) {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        image.src = result;
      };

      reader.readAsDataURL(file);
    }
  } else {
    input.value = '';
    alert('Please select only Images');
  }
});
