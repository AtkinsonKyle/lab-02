'use strict';

let $template = $('#picture-temp');
let $dropdown = $('#dropdown');
let $container = $('.container');

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
    let $picDuplicate = $template.clone();
    $picDuplicate.attr('class', `${pic.keyword} item`);
    $picDuplicate.find('h2').text(pic.title);
    $picDuplicate.find('p').text(pic.description);
    $picDuplicate.find('img').attr('src', pic.image);
    $container.append($picDuplicate);
    if (keywordArray.indexOf(pic.keyword)=== -1){
      keywordArray.push(pic.keyword);
      $dropdown.append(
        $('<option></option>').text(pic.keyword)
      );
    }
  });

});
// $.ajax('./data/page-2.json').then(data => {
//   data.forEach(item => {

//     let pic = new Pictures(item.image_url, item.title, item.description, item.keyword, item.horns);
//     let $picDuplicate = $template.clone();
//     $picDuplicate.attr('class', `${pic.keyword} item`);
//     $picDuplicate.find('h2').text(pic.title);
//     $picDuplicate.find('p').text(pic.description);
//     $picDuplicate.find('img').attr('src', pic.image);
//     $container.append($picDuplicate);
//     if (keywordArray.indexOf(pic.keyword)=== -1){
//       keywordArray.push(pic.keyword);
//       $dropdown.append(
//         $('<option></option>').text(pic.keyword)
//       );
//     }
//   });

// });

$dropdown.change(function(){
  let $photo = $('.item');
  $photo.hide();
  let val = $(this).val();
  console.log(val);
  let $showto = $('.' + val);
  $showto.show();
});

