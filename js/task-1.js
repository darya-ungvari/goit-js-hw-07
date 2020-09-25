const list = document.querySelector('#categories');
const categories = list.querySelectorAll('.item');


console.log(`В списке ${categories.length} категории.`);

categories.forEach(
    function(categ) {
        console.log(`Категория: ${categ.querySelector('h2').textContent}`)
        console.log(`Количество элементов: ${categ.querySelectorAll('li').length}`);
    }
  );





