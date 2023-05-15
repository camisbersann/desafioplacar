var contB = 0
var setB = []
var ganhosB = 0

function adicionarB() {
    if (contB != 25) {
        contB++
        document.getElementById("valorB").innerHTML = contB
    }
    if (contB == 25 && sets < 5) {
        setA[i] = contA
        document.getElementById(`setA${i}`).innerHTML = setA[i]
        setB[i] = contB
        document.getElementById(`setB${i}`).innerHTML = setB[i]

        contB = 0
        document.getElementById("valorB").innerHTML = contB
        contA = 0
        document.getElementById("valorA").innerHTML = contA
        ganhosB++
        document.getElementById("setganhob").innerHTML = ganhosB
        i++
        sets++
    }
    if (sets == 5 && contB == 15) {
        setA[i] = contA
        document.getElementById(`setA${i}`).innerHTML = setA[i]
        setB[i] = contB
        document.getElementById(`setB${i}`).innerHTML = setB[i]

        contB = 0
        document.getElementById("valorB").innerHTML = contB
        contA = 0
        document.getElementById("valorA").innerHTML = contA
        ganhosB++
        document.getElementById("setganhob").innerHTML = ganhosB
        i++
        sets++
    }
    if (ganhosB == 3) {
        document.getElementById("aparv").innerHTML = `<section id="vitorioso"><strong>Equipe B venceu!</strong></section>`
        contB = 0
        document.getElementById("valorB").innerHTML = contB
        contA = 0
        document.getElementById("valorA").innerHTML = contA
    }
    if (ganhosA == 3) {
        contB = 0
        contA = 0
        document.getElementById("valorB").innerHTML = contB
        document.getElementById("valorA").innerHTML = contA
    }
}

function subtrairB() {
    if (contB > 0) {
        contB--
        document.getElementById("valorB").innerHTML = contB
    }
}





var contA = 0
var setA = []
var ganhosA = 0

function adicionarA() {
    if (contA != 25) {
        contA++
        document.getElementById("valorA").innerHTML = contA
    }
    if (contA == 25 && sets < 5) {
        setA[i] = contA
        document.getElementById(`setA${i}`).innerHTML = setA[i]
        setB[i] = contB
        document.getElementById(`setB${i}`).innerHTML = setB[i]

        contB = 0
        document.getElementById("valorB").innerHTML = contB
        contA = 0
        document.getElementById("valorA").innerHTML = contA
        ganhosA++
        document.getElementById("setganhoa").innerHTML = ganhosA
        i++
        sets++
    }
    if (sets == 5 && contA == 15) {
        setA[i] = contA
        document.getElementById(`setA${i}`).innerHTML = setA[i]
        setB[i] = contB
        document.getElementById(`setB${i}`).innerHTML = setB[i]

        contB = 0
        document.getElementById("valorB").innerHTML = contB
        contA = 0
        document.getElementById("valorA").innerHTML = contA
        ganhosA++
        document.getElementById("setganhob").innerHTML = ganhosA
        i++
        sets++
    }
    if (ganhosA == 3) {
        document.getElementById("aparv").innerHTML = `<section id="vitorioso"><strong>Equipe A venceu!</strong></section>`
        contB = 0
        contA = 0
        document.getElementById("valorB").innerHTML = contB
        document.getElementById("valorA").innerHTML = contA
    }
    if (ganhosB == 3) {
        contB = 0
        contA = 0
        document.getElementById("valorB").innerHTML = contB
        document.getElementById("valorA").innerHTML = contA
    }
}

function subtrairA() {
    if (contA > 0) {
        contA--
        document.getElementById("valorA").innerHTML = contA
    }
}





var sets = 1
var i = 1

