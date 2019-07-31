var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }

  console.log("Prime Numbers");
  let primeNumbers = nestedData.innerData.numberData.primeNumbers;

  for (let i=0; i<primeNumbers.length; i++) {
      console.log(primeNumbers[i]);
  }

  console.log("Fibonacci Numbers");
  let fibonnaciNumbers = nestedData.innerData.numberData.fibonnaci;

  for(let i=0; i<fibonnaciNumbers.length; i++) {
      console.log(fibonnaciNumbers[i]);
  }

  console.log(nestedData.innerData.order[1]);

  nestedData.innerData.addSnack("chocolate");
  console.log("\n");

  // keyword this in the addSnack functions refers to the innerData object

  var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    },
    addSpeaker: function(name) {
        this.speakers.push({name:name});
    },
    addLanguage: function(name, hello) {
        this.data.languages[name] = {hello: hello};
    },
    addCountry: function(name, capital, population) {
        let countries = this.data.continents.europe.countries; // coutnries obj
        
        countries[name] = {
            capital: capital,
            population: population
        };
    }
  }

  nestedObject.addSpeaker("SHARTY");

  console.log(JSON.stringify(nestedObject, null, 2));

  nestedObject.addLanguage("portuguese", "Oi");

  console.log(JSON.stringify(nestedObject, null, 2));

  nestedObject.addCountry("portugal", "Lisbon", 505526);

  console.log(JSON.stringify(nestedObject, null, 2));
