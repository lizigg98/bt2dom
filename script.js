const form = document.querySelector("#form");
form.addEventListener("submit", function(event) {

    event.preventDefault();
    

    const moneyInput = form.elements["money"];
    console.log(2, moneyInput)

    const yearsInput = form.elements["years"];
    console.log(2, yearsInput)

    const timeInput = form.elements["time"];
    console.log(2, timeInput)

    const money = moneyInput.value;
    console.log(3, money)

    const years = yearsInput.value;
    console.log(3, years);

     const annual = Number(years)/100;
    console.log(4, annual)

    const time = timeInput.value;
    console.log(3, time)

    if(!money || !years || !time){
      return alert("Mong quý khách nhập thông tin! ")
    }

    const months = Number(time)/12;
    console.log(4, months);

    const month = Number(time)*12
    console.log(4, month)

    

    const Monthly= (Number(money)*annual)+(Number(money)*months)

    console.log(5,  Monthly)


    const amount = Monthly*months

    console.log(5,  amount)


    

     const totalProfit = amount - Number(money);

     console.log(5,  totalProfit);

    
});