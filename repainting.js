function repainting(input){
    // 1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
    //2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
    //3.	Количество разредител (в литри) - цяло число в интервала [1…30]
    //4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]
    let plastic = Number(input[0])
    let paint = Number(input[1])
    let thinner = Number(input[2])
    let hoursNeeded = Number(input[3])
    //•	Предпазен найлон - 1.50 лв. за кв. метър
    //•	Боя - 14.50 лв. за литър
    //•	Разредител за боя - 5.00 лв. за литър
    plastic +=2
    paint *= 1.1
    let moneyPlastic = plastic * 1.50
    let moneyPaint = paint * 14.50
    let moneyThinner = thinner * 5
    let sumFirst = 0.40 + moneyPaint + moneyPlastic + moneyThinner
    let sumSe = sumFirst * 0.30
    sumSe *= hoursNeeded
    console.log(sumSe+sumFirst);
}
repainting( ["5 ",
"10 ",
"10 ",
"1 "]

)