const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(typeMachine) {
    this.typeMachine = typeMachine === false ? false : true;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let onlyLetterMessage = message.toUpperCase().replace(/[^A-Z]/g, "");
    if (onlyLetterMessage.length > key.length) {
      key = key.repeat(Math.ceil(onlyLetterMessage.length / key.length));
    }
    const onlyLetterEncryptMessageArr = onlyLetterMessage
      .split("")
      .map((x, index) => {
        const messageNumberInAlphabet = alphabet.indexOf(x);
        const keyNumberInAlphabet = alphabet.indexOf(key[index].toUpperCase());
        const encryptLetterNumber =
          messageNumberInAlphabet + keyNumberInAlphabet > alphabet.length - 1
            ? (messageNumberInAlphabet + keyNumberInAlphabet) % alphabet.length
            : messageNumberInAlphabet + keyNumberInAlphabet;

        return alphabet[encryptLetterNumber];
      });
    let letterCount = 0;
    let res = message
      .toUpperCase()
      .split("")
      .map((x) => {
        if (alphabet.includes(x)) {
          x = onlyLetterEncryptMessageArr[letterCount];
          letterCount += 1;
        }
        return x;
      })
      .join("");
    if (this.typeMachine) {
      return res;
    } else {
      return res.split("").reverse().join("");
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let onlyLetterEncryptedMessage = encryptedMessage
      .toUpperCase()
      .replace(/[^A-Z]/g, "");
    if (onlyLetterEncryptedMessage.length > key.length) {
      key = key
        .repeat(Math.ceil(onlyLetterEncryptedMessage.length / key.length))
        .toUpperCase();
    }
    const onlyLetterDecryptMessageArr = onlyLetterEncryptedMessage
      .split("")
      .map((x, index) => {
        const encryptedMessageNumberInAlphabet = alphabet.indexOf(x);
        const keyNumberInAlphabet = alphabet.indexOf(key[index]);
        const decryptLetterNumber =
          encryptedMessageNumberInAlphabet -
            keyNumberInAlphabet +
            alphabet.length >
          alphabet.length - 1
            ? (encryptedMessageNumberInAlphabet -
                keyNumberInAlphabet +
                alphabet.length) %
              alphabet.length
            : encryptedMessageNumberInAlphabet -
              keyNumberInAlphabet +
              alphabet.length;
        return alphabet[decryptLetterNumber];
      });
    let letterCount = 0;
    const res = encryptedMessage
      .toUpperCase()
      .split("")
      .map((x) => {
        if (alphabet.includes(x)) {
          x = onlyLetterDecryptMessageArr[letterCount];
          letterCount += 1;
        }
        return x;
      })
      .join("");
    if (this.typeMachine) {
      return res;
    } else {
      return res.split("").reverse().join("");
    }
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
