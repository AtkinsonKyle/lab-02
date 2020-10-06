'use strict';

// let $template = $('#picture-temp');
let $dropdown = $('#dropdown');
// let $container = $('.container');

function Pictures(image, title, description, keyword, horns) {
  this.image = image;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}
let keywordArray = [];

$.ajax('./data/page-1.json').then(data => {
  data.forEach(item => {
    let pic = new Pictures(item.image_url, item.title, item.description, item.keyword, item.horns);
    console.log(pic);
    render(pic);

    if (keywordArray.indexOf(pic.keyword)=== -1){
      keywordArray.push(pic.keyword);
      $dropdown.append(
        $('<option></option>').text(pic.keyword)
      );
    }
  });
});

$dropdown.change(function(){
  let $photo = $('.item');
  $photo.hide();
  let val = $(this).val();
  console.log(val);
  let $showto = $('.' + val);
  $showto.show();
});

function render(pics){
  let templatePic = {
    name: pics.title,
    src: pics.image,
    description: pics.description,
    keyword: pics.keyword
  };
  let $template = $('#template').html();
  let rendered = Mustache.render($template, templatePic);
  $('#container').append(rendered);
  console.log(templatePic.src);
}