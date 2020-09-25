const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ]; 
    
 const ingredientsList = document.createElement('ul');
 ingredientsList.classList.add('ingridients-list');

  const elements = ingredients.map((ingredient) => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.classList.add('ingredients-item');
    ingredientsItem.textContent = [ingredient];
    return ingredientsItem;
  });

ingredientsList.append(...elements);

console.log(ingredientsList);




