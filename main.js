// Definir el modelo de aprendizaje automático
const model = {
  'hello': 'hola',
  'world': 'mundo',
  'good': 'bueno',
  'morning': 'mañana',
  'evening': 'noche',
  'apple': 'manzana',
  'banana': 'plátano',
  'watermelon': 'sandía',
  'car': 'coche',
  'bus': 'autobús'
};

// Obtener los elementos de la página
const englishInput = document.getElementById('english-text');
const translateButton = document.getElementById('translate-button');
const spanishOutput = document.getElementById('spanish-text');

// Agregar un evento de click al botón de traducción
translateButton.addEventListener('click', () => {
  // Obtener el texto inglés ingresado por el usuario
  const englishText = englishInput.value.trim();

  // Traducir el texto utilizando el modelo de aprendizaje automático
  const spanishText = model[englishText.toLowerCase()] || '';

  // Mostrar la traducción en la página
  spanishOutput.value = spanishText;
});