const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    },
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
};

        // Get your shorts on - this is an array workout!
        // ## Array Cardio Day 1

        // Some data we can work with

        const inventors = [{
                first: 'Albert',
                last: 'Einstein',
                year: 1879,
                passed: 1955
            },
            {
                first: 'Isaac',
                last: 'Newton',
                year: 1643,
                passed: 1727
            },
            {
                first: 'Galileo',
                last: 'Galilei',
                year: 1564,
                passed: 1642
            },
            {
                first: 'Marie',
                last: 'Curie',
                year: 1867,
                passed: 1934
            },
            {
                first: 'Johannes',
                last: 'Kepler',
                year: 1571,
                passed: 1630
            },
            {
                first: 'Nicolaus',
                last: 'Copernicus',
                year: 1473,
                passed: 1543
            },
            {
                first: 'Max',
                last: 'Planck',
                year: 1858,
                passed: 1947
            },
            {
                first: 'Katherine',
                last: 'Blodgett',
                year: 1898,
                passed: 1979
            },
            {
                first: 'Ada',
                last: 'Lovelace',
                year: 1815,
                passed: 1852
            },
            {
                first: 'Sarah E.',
                last: 'Goode',
                year: 1855,
                passed: 1905
            },
            {
                first: 'Lise',
                last: 'Meitner',
                year: 1878,
                passed: 1968
            },
            {
                first: 'Hanna',
                last: 'Hammarström',
                year: 1829,
                passed: 1909
            }
        ];

        const people = [
            'Benn, Tony',
            'Bennington, Chester',
            'Benson, Leana',
            'Bent, Silas',
            'Bentsen, Lloyd',
            'Berger, Ric',
            'Bergman, Ingmar',
            'Berio, Luciano',
            'Berle, Milton',
            'Berlin, Irving',
            'Berne, Eric',
            'Bernhard, Sandra',
            'Berra, Yogi',
            'Berry, Halle',
            'Berry, Wendell',
            'Bethea, Erin',
            'Bevan, Aneurin',
            'Bevel, Ken',
            'Biden, Joseph',
            'Bierce, Ambrose',
            'Biko, Steve',
            'Billings, Josh',
            'Biondo, Frank',
            'Birrell, Augustine',
            'Black, Elk',
            'Blair, Robert',
            'Blair, Tony',
            'Blake, William',
            'Beck, Glenn',
            'Becker, Carl',
            'Beckett, Samuel',
            'Beddoes, Mick',
            'Beecher, Henry',
            'Beethoven, Ludwig',
            'Begin, Menachem',
            'Belloc, Hilaire',
            'Bellow, Saul',
            'Benchley, Robert',
            'Benenson, Peter',
            'Ben-Gurion, David',
            'Benjamin, Walter'
        ];

        // Array.prototype.filter()
        // 1. Filter the list of inventors for those who were born in the 1500's
        let OldInventors = inventors.filter(person => person["year"] > 1499);
        OldInventors = OldInventors.filter(person => person["year"] < 1600);
        //OldInventors.forEach(person => console.log(person["first"] + " " + person["last"]));


        // Array.prototype.map()
        // 2. Give us an array of the inventors' first and last names
        let nameList = inventors;

        let nameInventors = inventors.map(person => {
            let name = {
                first: person["first"],
                last: person["last"]
            };
            return name;
        });
        //console.log(nameInventors);

        // Array.prototype.sort()
        // 3. Sort the inventors by birthdate, oldest to youngest
        let sortedInventors = inventors;
        sortedInventors.sort(function (a, b) {
            return a["year"] - b["year"];
        });
        //console.log(sortedInventors);

        // Array.prototype.reduce()
        // 4. How many years did all the inventors live?
        let years = inventors.map(person => {
            return person["year"];
        })
        console.log(years);

        let deaths = inventors.map(person => {
            return person["passed"];
        })
        console.log(deaths);

        let num1 = deaths.reduce(myFunc) - years.reduce(myFunc);
        console.log(num1);

        function myFunc(total, num) {
            return total + num;
        }

        // 5. Sort the inventors by years lived

        let ageSortedInventors = inventors;
        ageSortedInventors.sort(function (a, b) {
            let aAge = a["passed"] - a["year"]
            let bAge = b["passed"] - b["year"]
            return aAge - bAge;
        });
        console.log(ageSortedInventors);

        // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
        // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
        // goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the 
        // console. Use that list to finish the problem.
        // const category = document.querySelector('.mw-category');
        // const links = Array.from(category.querySelectorAll('a'));

        // 7. sort Exercise
        // Sort the people alphabetically by last name
        people.sort();
        console.log(people);

        // 8. Reduce Exercise
        // Sum up the instances of each of these
        const data = [
            'car',
            'car',
            'truck',
            'truck',
            'bike',
            'walk',
            'car',
            'van',
            'bike',
            'walk',
            'car',
            'van',
            'car',
            'truck'
        ];

        let dataSet = new Set(data);
        dataSet.forEach(element => {
            let count = 0;
            data.forEach(mode => {
                if (element == mode)
                {
                    count++;
                }
            });   
            console.log(element + " " + count)
        }); 

    
const game = {
    start(quiz){
        view.hide(view.start);
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask(){
      const question = `What is ${this.question.name}'s real name?`;
      view.render(view.question,question);
      const response =  prompt(question);
      this.check(response);
  },
  check(response){
      const answer = this.question.realName;
      if(response === answer){
      view.render(view.result,'Correct!',{'class':'correct'});
      alert('Correct!');
      this.score++;
      view.render(view.score,this.score);
      } else {
      view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
      alert(`Wrong! The correct answer was ${answer}`);
      }
  },
  gameOver(){
      view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
      view.show(view.start);
  }
}

view.start.addEventListener('click', () => game.start(quiz), false);
