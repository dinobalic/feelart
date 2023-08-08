// Dohvaćanje svih slika
const images = document.querySelectorAll('.gallery-image');

// Kreiranje elementa za overlay
const overlay = document.createElement('div');
overlay.classList.add('overlay');

// Kreiranje elementa za prikaz slike u punoj veličini
const fullImage = document.createElement('img');
fullImage.classList.add('full-image');

// Kreiranje gumba za prethodnu sliku
const prevButton = document.createElement('button');
prevButton.classList.add('prev-button');
prevButton.innerHTML = '&#10094;';

// Kreiranje gumba za sljedeću sliku
const nextButton = document.createElement('button');
nextButton.classList.add('next-button');
nextButton.innerHTML = '&#10095;';

// Trenutni indeks slike
let currentIndex = 0;

// Dodavanje slušača događaja za otvaranje overlay-a za svaku sliku
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index; // Pohranjivanje indeksa trenutne slike
    showImage(); // Prikaz trenutne slike u overlay-u
    document.body.appendChild(overlay); // Dodavanje overlay-a na tijelo dokumenta
  });
});

// Dodavanje slušača događaja za gumb za prethodnu sliku
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Računanje indeksa prethodne slike
  showImage(); // Prikaz prethodne slike u overlay-u
});

// Dodavanje slušača događaja za gumb za sljedeću sliku
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // Računanje indeksa sljedeće slike
  showImage(); // Prikaz sljedeće slike u overlay-u
});

// Dodavanje slika i gumba u overlay

overlay.appendChild(prevButton);
overlay.appendChild(fullImage);
overlay.appendChild(nextButton);

// Dodavanje slušača događaja za zatvaranje overlay-a na klik izvan slike
document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('overlay')) {
    document.body.removeChild(overlay); // Uklanjanje overlay-a iz tijela dokumenta
  }
});

// Funkcija za prikaz trenutne slike u overlay-u
function showImage() {
  fullImage.src = images[currentIndex].src;
  fullImage.alt = images[currentIndex].alt;
}


/*forma*/
/*briše polja kako bi korisnik znao da je poslao mail*/
 document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.subject.value = '';
  e.target.elements.message.value = '';
});