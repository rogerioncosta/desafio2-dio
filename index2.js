let winBalance = VictoriesAndDefeats(76, 1);
let ranking = defineLevel(winBalance);

console.log(`O Herói tem saldo de ${winBalance} e está no nível de ${ranking}`);

function VictoriesAndDefeats(vitories, defeats){
    let winBalance = vitories - defeats;

    return winBalance;
}

function defineLevel(winBalance) {
    let level = "0";

    if(winBalance < 10){
        level = "Ferro";
    }else if(winBalance > 10 && winBalance <= 20){
        level = "Bronze";
    }else if(winBalance > 20 && winBalance <= 50){
        level = "Prata";
    }else if(winBalance > 50 && winBalance <= 80){
        level = "Ouro";
    }else if(winBalance > 80 && winBalance <= 90){
        level = "Diamante";
    }else if(winBalance > 90 && winBalance <= 100){
        level = "Lendário";
    }else if(winBalance >= 101){
        level = "Imortal";
    }

    return level;
}