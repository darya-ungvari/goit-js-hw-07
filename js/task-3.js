const images = [
  {
    url:
      'https://pixelstalk.net/wp-content/uploads/2016/03/Wallpaper-HD-mountain-village-background.jpg',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://img3.goodfon.ru/wallpaper/nbig/0/87/winter-snow-nature-les-elka-5043.jpg',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://img5.goodfon.ru/wallpaper/nbig/0/bd/mmmmmm-nnnnnn-bbbbbbb-vvvvvvvv-ccccccc.jpg ',
    alt: 'Group of Horses Running',
  },
];



  const galleryList = document.querySelector('#gallery');
  galleryList.classList.add('.gallery-list');


images.forEach(element => {
  let galleryItem = document.createElement('li'); 

  let imageItem = document.createElement('img');
  imageItem.width = 400;
  imageItem.setAttribute('src', element.url);
  imageItem.setAttribute('alt', element.alt);
  galleryItem.appendChild(imageItem);

  galleryList.appendChild(galleryItem);
});



  console.log(galleryList);
  