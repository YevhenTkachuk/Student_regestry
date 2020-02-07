class Human {
  constructor(name, age, debt){
    this.name = name;
    this.age = age;
    this.debt = debt;
    this.getDebt = function(){
      this.debt = true;
        }
    this.delDebt = function(){
        this.debt = false;
            }
            myApp.outputArray();
      }
  }
 
Human.delDebt = function(){
  let password = prompt(`Enter password:`);
  if(password = `Vitaliy`){
    let delADebt = document.getElementById("debt").value;
    humans[delADebt-1].delDebt();
    myApp.outputArray();
  }else{
    let error = alert(`You enter error number!`);
  }

}

const humans = new Array();

const myApp = {
  createHuman: function() {
    let name = prompt(`Name`);
    let age = +prompt(`Age`);
    let debt = confirm(`У студента есть задолженности?`);
    const chelovek = new Human(name, age, debt);
    humans.push(chelovek);
    myApp.outputArray();
  },
  outputArray: function () {
    document.getElementById('humans').innerHTML = (``);
    humans.forEach(element => {
      document.getElementById('humans').insertAdjacentHTML('beforeend', `Имя: ${element.name} | Возраст: ${element.age} \n`);
      if (element.debt) {
        document.getElementById('humans').insertAdjacentHTML('beforeend', `Есть задолженности`);
      }else{
        document.getElementById('humans').insertAdjacentHTML('beforeend', `Задолженности нет!`);
      }
      document.getElementById('humans').insertAdjacentHTML('beforeend', `\n`);
    });

    

  },
  sortArray: function () {
    humans.sort(function (a, b) {
      return a.age-b.age;
    });
    myApp.outputArray();
  },
  sortNegativeArray: function () {
    humans.sort(function (a, b) {
      return b.age-a.age;
    });
    myApp.outputArray();
  },
  addDebt(){
    let getADebt = document.getElementById("debt").value;
    humans[getADebt-1].getDebt();
    myApp.outputArray();
  }

};
