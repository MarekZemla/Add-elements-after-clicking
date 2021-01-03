//1.  Najpierw pobieram element na którym będę pracował...w tym przypadku przy użyciu metody querySelector, jednocześnie przypisując go do zmiennej stałej const. Metoda ta wyszukuje pierwszy element i przestaje szukac dalej po znalezieniu pierwszego...
//2.  za pomocą console.log sprawdzam w consoli czy dobrze wpisałem metodę i czy dany element został znaleziolny...
//  console.log(btn)

// 3. Nastepnie ustawiam nasłuchiwanie za pomocą addEventListener. Zawsze na końcy pzzed znacznikiem zamykającym BODY.  Ustawiam działanie na click i ustawiam funkcję zadeklarowaną zmienną, którą wcześniej stworzyłem i do której przypisałem od razu funkcję, która ma się wykonać. Musi być ona stworzona powyżej metody nasłuchiwania aby interpreter wcześniej ją odnalazł i mógł przypisać ją wewnatrz metody poniżej. 

 // 4. Tworze nowy element za pomocą metody zmiennej const i za pomocą document.createElement() wpisuje w nawiasach jaki ma być to element. W tym przypadku bedzie to div
//  5. Za pomocą document.body.appendChild() dodaję diva do strony. 
// 6. Tworzę licznik przy użyciu zmiennej let number która nie moze być const ponieważ wykonanie funkcji musi ją aktualizować, oraz któa musi być poza funkcja aby jej zawartośc nie była kasowana za każdym razem gdy funkcja się wykona. Następnie wewnatrz funkcji przypisuję właściwość textContent do diva i odnoszę ją do wartości tej zmiennej, która jest poza tą funkcją.

// 7. INSTRUKCJA WARUNKOWA if, która będzie odnosiła się do co piątego elementu div.
// W tym celu wykorzystuję metodę dzielenia MODULO. Dzielę w niej zmienną number przez 5 , co daje mi resztę 0. Dzięki temu w metodzie modulo zapisując ,że jeśli nie ma reszty to div ma przypisywaną clase circle, co daje mi co piąty element div, ponieważ 5/5 daje 0 i nie ma reszty, 10/5 daje wynik 2, ale nie daje zadnej resty i tak dalej co pięć. 
// Inaczej to określając iloraz danej liczby podzielony przez siebie nie daje reszty z dzielenia. 

const btn = document.querySelector("button");
let number = 1;
const addElement = function(){
  
  const div = document.createElement("div");
  if (number % 5 == 0){
    div.classList.add("circle");
  }
  document.body.appendChild(div);
  div.textContent = number;
  number++; //INKREMENTACJA

}
btn.addEventListener ("click", addElement);

