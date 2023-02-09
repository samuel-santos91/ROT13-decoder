const rot13 = (str) => {
    const alphabet = {
      N: "A",
      O: "B",
      P: "C",
      Q: "D",
      R: "E",
      S: "F",
      T: "G",
      U: "H",
      V: "I",
      W: "J",
      X: "K",
      Y: "L",
      Z: "M",
      A: "N",
      B: "O",
      C: "P",
      D: "Q",
      E: "R",
      F: "S",
      G: "T",
      H: "U",
      I: "V",
      J: "W",
      K: "X",
      L: "Y",
      M: "Z",
    };
    let result = [];
    for (let i = 0; i < str.length; i++) {
      if (/[a-zA-Z]/.test(str.charAt(i)) === true) {
        result.push(alphabet[str.charAt(i)]);
      } else {
        result.push(str.charAt(i));
      }
    }
    return console.log(result.join(""));
  }

  //ENTER ROT13 AND CALL FUNCTION FOR CONVERSION
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");