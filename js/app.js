'use strict';

function Pictures(picture) {
  this.image_url = picture.image_url;
  this.title = picture.title;
  this.description = picture.description;
  this.keyword = picture.keyword;
  this.horns = picture.horns;
}

// Rendering Manually
// Pictures.prototype.render = function() {
//   $('main').append(`
//     <div class=${this.name}>
//       <h2>${this.name}</h2>
//       <img src="${this.image_url}" />
//       <p>${this.description}</p>
//     </div>
//   `);
// };

Pictures.prototype.render = function () {
  let $picDuplicate = $('.picture-temp').clone();
  $('main').append($picDuplicate);
  $picDuplicate.find('h2').text(this.name);
  $picDuplicate.find('img').attr('src', this.image_url);
  $picDuplicate.find('p').text(this.description);
  $picDuplicate.removeClass('picture-temp');
  $picDuplicate.attr('class', this.name);
};

Pictures.readJson = () => {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  $.ajax('../data/page-1.json', ajaxSettings)
    .then(data => {
      data.forEach(item => {
        let pic = new Pictures(item);
        console.log(pic);
        pic.render();
      });
    });
};

$(() => Pictures.readJson());
