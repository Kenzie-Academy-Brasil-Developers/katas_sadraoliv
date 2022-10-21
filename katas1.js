//exercicio1
function cubicSquare() {
  for (let i = 1; i <= 10; i++) {
    console.log(i ** 3)
  }
}
cubicSquare();
//exercicio2

function divisiblesFor(limite, divisor) {
  for (i = 1; i <= limite; i++)
    if (i % divisor == 0) {
      console.log(i)
    }
}
divisiblesFor(50, 2)
//exercicio3
function stringElement(string, numero) {
  for (i = 0; i <= string.length; i++) {
    console.log(string[numero].toUpperCase())
  }
}
stringElement("eletrodomestico", 2)
//exercicio4
function stringSlicer(string, number) {
  let novaString = ""
  for (i = 0; i <= string.length; i++) {
    if (i <= number) {
      novaString += string[i]
    }
  }
  console.log(novaString);

}
stringSlicer("eletrodomestico", 6)
//exercicio 5

function stringRest(string, number) {
  let novaStringRest = ""
  for (i = 0; i < string.length; i++) {

    if (i >= number) {
      novaStringRest += string[i]
    }
  }
  console.log(novaStringRest);
}
stringRest("eletrodomestico", 6)

//exercicio 6
function countVowels(string) {
  let contVogal = 0
  for (let i = 0; i <= string.length; i++) {
    if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
      contVogal++
    }
  }
  console.log(contVogal);
}
countVowels("eletrodomestico")


//exercicio 7

function countTextOccurrences(string, letra) {
  contLetra = 0
  for (let i = 0; i <= string.length; i++) {
    if (string[i] == letra) {
      contLetra++
    }
  }
  console.log(contLetra);
  return contLetra

}
countTextOccurrences("eletronica", "e")

//exercicio 8

function textBackwards(string) {
  let textContrario = ""
  for (let i = string.length - 1; i > 0; i--) {
    textContrario += string[i]
  }
  console.log(textContrario);
}
textBackwards("eletrodomestico")

// exercicio 9
function removeBlank(string) {
  let novaFrase = ""
  for (let i = 0; i < string.length; i++) {
    if (string[i] != " ")
      novaFrase += string[i]
  }
  console.log(novaFrase);
}
removeBlank("O rato roeu a roupa do rei de Roma")

// exercicio 10
function encryptText(string) {
  let novaFrase1 = ""
  for (let i = 0; i < string.length; i++) {

    if (string[i] == "a") {
      novaFrase1 += "x"
    } else if (string[i] == "e") {
      novaFrase1 += "y"
    } else if (string[i] == "i") {
      novaFrase1 += "w"
    } else if (string[i] == "o") {
      novaFrase1 += "k"
    } else if (string[i] == "u") {
      novaFrase1 += "z"


    } else
      novaFrase1 += string[i]

  }
  console.log(novaFrase1);
}

encryptText("O rato roeu a roupa do rei de Roma")


