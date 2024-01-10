const startButton = document.getElementById('start-button');
const welcomeContainer = document.getElementById('welcome-container');

const questions = [

    /*Macarena*/
  
    {
      question: 'What song is this?',
      options: [
        'Macarena',
        'La bamba',
        'Silent Night',
        'Starry night'
      ],
      correctAnswer: 0,
      song: './assets/midi/macarena.mid'
    },
  
    /* Beautiful Day */
  
    {
      question: 'What song is this?',
      options: [
        'Help',
        'Beautiful Day',
        'Mambo no. 5',
        'Crazy Train'
      ],
      correctAnswer: 1,
      song: './assets/midi/beautifulDay.mid'
    },
  
    /* Yesterday*/
  
    {
      question: 'What artist released this song?',
      options: [
        'Black Sabbath',
        'The Beatles',
        'Oasis',
        'The Rolling Stones'
      ],
      correctAnswer: 1,
      song: './assets/midi/yesterday.MID'
    },
  
    /*Without Me*/
  
    {
      question: 'What year was this released?',
      options: [
        '2000',
        '2001',
        '2002',
        '2003'
      ],
      correctAnswer: 2,
      song: './assets/midi/withoutMe.mid'
    },
  
    /* Gangstas Paradise*/
  
    {
      question: 'Which Michelle Pfeiffer film was this song famous for being in?',
      options: [
        'Dangerous Minds',
        'Boyz n the Hood',
        "Don't Be A Menace",
        'Juice'
      ],
      correctAnswer: 0,
      song: './assets/midi/gangstasParadise.mid'
    },
  
    /* Tainted Love*/
    {
      question: 'What year did was this song released?',
      options: [
        '1981',
        '2001',
        '1987',
        '1995'
      ],
      correctAnswer: 0,
      song: './assets/midi/taintedLove.mid'
    },
  
    /* Fell In Love With A Girl */
  
    {
      question: 'What song is this?',
      options: [
        'My Doorbell',
        'Hardest Button To Button',
        'Fell In Love With A Girl',
        'Seven Nation Army'
      ],
      correctAnswer: 2,
      song: './assets/midi/fellInLoveWithAGirl.mid'
    },
  
    /* Champagne Supernova */
    {
      question: 'What song is this?',
      options: [
        'Shape Of You',
        'Seaside',
        'Tender',
        'Champagne Superova'
      ],
      correctAnswer: 3,
      song: './assets/midi/champagneSupernova.mid'
    },
  
    /* Get Lucky */
    {
      question: 'What year was this song released?',
      options: [
        '2012',
        '2013',
        '2014',
        '2015'
      ],
      correctAnswer: 1,
      song: './assets/midi/getLucky.mid'
    },
  
    /* I Don't Wanna Miss A Thing */
  
    {
      question: 'What movie was this song famously in?',
      options: [
        'Top Gun',
        'Armageddon',
        'Titanic',
        'Airplane'
      ],
      correctAnswer: 1,
      song: './assets/midi/iDontWantToMissAThing.mid'
    }
  ]


startButton.addEventListener('click', (function() {

    welcomeContainer.style.display = 'none';
  }))