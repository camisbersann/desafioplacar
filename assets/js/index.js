var contB = 0;
var setB = [];
var ganhosB = 0;
var maxPoints = 10;
var maxPointsEmpate = 5;

function adicionarB() {
    if (contB != ganhar) {
        contB++;
        document.getElementById("valorB").innerHTML = contB;
    }
    if (contB-contA > 1 ) {
        if (contB == ganhar && sets < 5) {
            setA[sets] = contA;
            document.getElementById(`setA${sets}`).innerHTML = setA[sets];
            setB[sets] = contB;
            document.getElementById(`setB${sets}`).innerHTML = setB[sets];
    
            contB = 0;
            document.getElementById("valorB").innerHTML = contB;
            contA = 0;
            document.getElementById("valorA").innerHTML = contA;
            ganhosB++;
            document.getElementById("setganhob").innerHTML = ganhosB;
            i++;
            sets++;
            ganhar = maxPoints;
        }
        if (sets == 5 && contB == ganhar) {
            setA[sets] = contA;
            document.getElementById(`setA${sets}`).innerHTML = setA[sets];
            setB[sets] = contB;
            document.getElementById(`setB${sets}`).innerHTML = setB[sets];
    
            contB = 0;
            document.getElementById("valorB").innerHTML = contB;
            contA = 0;
            document.getElementById("valorA").innerHTML = contA;
            ganhosB++;
            document.getElementById("setganhob").innerHTML = ganhosB;
            i++;
            sets++;
        }
    } 
    if (ganhosB == 3) {
        document.getElementById("aparv").innerHTML = `<section id="vitorioso"><strong>Equipe B venceu!✔</strong></section>`;
        contB = 0;
        document.getElementById("valorB").innerHTML = contB;
        contA = 0;
        document.getElementById("valorA").innerHTML = contA;
        document.getElementById("bloco2").style.backgroundImage = 'url(https://usagif.com/wp-content/uploads/firework-1.gif)';
        document.getElementById("bloco2").style.color = 'transparent';
    }
    if (ganhosA == 3) {
        contB = 0;
        contA = 0;
        document.getElementById("valorB").innerHTML = contB;
        document.getElementById("valorA").innerHTML = contA;
        document.getElementById("bloco2").style.backgroundImage = 'url(https://usagif.com/wp-content/uploads/firework-1.gif)';
        document.getElementById("bloco2").style.color = 'transparent';
    }
    if(contA+contB == ganhar*2-2){
        ganhar++;
    }
    if(sets == 5 && i == 5) {
        ganhar = maxPointsEmpate;
        i++;
    }
}

function subtrairB() {
    if (contB > 0) {
        contB--;
        document.getElementById("valorB").innerHTML = contB;
    }
}





var contA = 0;
var setA = [];
var ganhosA = 0;

function adicionarA() {
    if (contA != ganhar) {
        contA++;
        document.getElementById("valorA").innerHTML = contA;
    }
    if (contA-contB > 1 ) {
        if (contA == ganhar && sets < 5) {
            setA[sets] = contA;
            document.getElementById(`setA${sets}`).innerHTML = setA[sets];
            setB[sets] = contB;
            document.getElementById(`setB${sets}`).innerHTML = setB[sets];
    
            contB = 0;
            document.getElementById("valorB").innerHTML = contB;
            contA = 0;
            document.getElementById("valorA").innerHTML = contA;
            ganhosA++;
            document.getElementById("setganhoa").innerHTML = ganhosA;
            i++;
            sets++;
            ganhar = maxPoints;
        }
        if (sets == 5 && contA == ganhar) {
            setA[sets] = contA;
            document.getElementById(`setA${sets}`).innerHTML = setA[sets];
            setB[sets] = contB;
            document.getElementById(`setB${sets}`).innerHTML = setB[sets];
    
            contB = 0;
            document.getElementById("valorB").innerHTML = contB;
            contA = 0;
            document.getElementById("valorA").innerHTML = contA;
            ganhosA++;
            document.getElementById("setganhob").innerHTML = ganhosA;
            i++;
            sets++;
        }
    }
    if (ganhosA == 3) {
        document.getElementById("aparv").innerHTML = `<section id="vitorioso"><strong>Equipe A venceu!✔</strong></section>`;
        contB = 0;
        contA = 0;
        document.getElementById("valorB").innerHTML = contB;
        document.getElementById("valorA").innerHTML = contA;
        document.getElementById("bloco2").style.backgroundImage = 'url(https://usagif.com/wp-content/uploads/firework-1.gif)';
        document.getElementById("bloco2").style.color = 'transparent';
    }
    if (ganhosB == 3) {
        contB = 0;
        contA = 0;
        document.getElementById("valorB").innerHTML = contB;
        document.getElementById("valorA").innerHTML = contA;
        document.getElementById("bloco2").style.backgroundImage = 'url(https://usagif.com/wp-content/uploads/firework-1.gif)';
        document.getElementById("bloco2").style.color = 'transparent';
    }
    if(contA+contB == (ganhar*2)-2){
        ganhar++;
    }
    if(sets == 5 && i == 5) {
        ganhar = maxPointsEmpate;
        i++;
    }
}

function subtrairA() {
    if (contA > 0) {
        contA--;
        document.getElementById("valorA").innerHTML = contA;
    }
}



if(contA+contB == (ganhar*2)-2){
    ganhar++;
}
var sets = 1;
var i = 1;
var ganhar = maxPoints;

if(sets == 5 && i == 5) {
    ganhar = maxPointsEmpate;
}
