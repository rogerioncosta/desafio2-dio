let resultado = VictoriesAndDefeats(90, 2);
console.log(resultado);

function VictoriesAndDefeats(qtdeVitories, qtdeDefeats){
    let saldoVitorias = qtdeVitories - qtdeDefeats;  
    let nivel = "0";

    if(saldoVitorias < 10){
        nivel = "Ferro";
    }else if(saldoVitorias > 10 && saldoVitorias <= 20){
        nivel = "Bronze";
    }else if(saldoVitorias > 20 && saldoVitorias <= 50){
        nivel = "Prata";
    }else if(saldoVitorias > 50 && saldoVitorias <= 80){
        nivel = "Ouro";
    }else if(saldoVitorias > 80 && saldoVitorias <= 90){
        nivel = "Diamante";
    }else if(saldoVitorias > 90 && saldoVitorias <= 100){
        nivel = "Lendário";
    }else if(saldoVitorias >= 101){
        nivel = "Imortal";
    }

    return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}