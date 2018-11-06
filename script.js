/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start()
{
  if (confirm('Byrja nýjan leik')){
    play()
  } else {
    close();
  };
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  ask()
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {

  let correct = 0;
  let operations = ['+', '-', '*', '/'];
  let number1 = 0;
  let number2 = 0;
  let correctanswer = 0;

  t0 = performance.now();
  for (counter = 0; counter < 10; counter++ ) {
    let selection = operations[randomNumber(0,3)];
    if ( selection == '+' ) {
      number1 = randomNumber(1,100);
      number2 = randomNumber(1,100);
      correctanswer = number1 + number2;
    } else if (selection == '-') {
      number1 = randomNumber(1,100);
      number2 = randomNumber(1,100);
      correctanswer = number1 - number2;
    } else if (selection == '*') {
      number1 = randomNumber(1,10);
      number2 = randomNumber(1,10);
      correctanswer = number1 * number2;
    } else {
      number2 = randomNumber(2,10);
      number1 = number2*randomNumber(2,10);
      correctanswer = number1 / number2;
    };
    let svar = prompt('Hvað er ' + number1 + ' ' + selection + ' '  + number2 + '?');
    if ( svar == correctanswer ){
      correct++;
    };
  };
  let time = (performance.now()-t0)/1000;
  let cps = correct/time;

  alert('Þú svaraðir ' + correct + ' spurningum rétt af 10 á ' + time.toFixed(0) + ' sekúndum. Þannig að meðalrétt svör eru ' + cps.toFixed(1) + ' á sekúndu.')

  
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
