import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vigenere-cipher',
  templateUrl: './vigenere-cipher.component.html',
  styleUrls: ['./vigenere-cipher.component.css']
})
export class VigenereCipherComponent implements OnInit {

  constructor( private router:Router) { }
  ngOnInit(){}


  
  plainTextInput;
  cipherTextInput;
  keyInput;
  radio;
  input

  key 
  outputT
  output


  isPlainTrue = false;;
  isCipherTrue = false;
  // alert('hello')
  changeRadio(radioObject, plain, cipher) {



    this.radio = radioObject

    if (this.radio === 'encrypt') {
      this.isCipherTrue = true;
      this.isPlainTrue = false;
    }
    else if (this.radio === 'decrypt') {
      this.isCipherTrue = false;
      this.isPlainTrue = true;
    }

    this.abc();
  }


  abc() {

    if (this.radio=== 'encrypt') {
            
      this.cipherTextInput = "";





    }
    else if (this.radio === 'decrypt') {
        
      this.plainTextInput = "";
    }
  }
  
   submit() {
  this.input = '';
  this.key = this.keyInput;
  if (this.radio == "encrypt") {
    let input = this.plainTextInput;

    //  key = parseInt(key);
    let output = '';

    // for (let index = 0; index < input.length; index++) {
    output = this.encrypt(input, this.key)

    // }
    this.cipherTextInput = output;
  }


  else if (this.radio === "decrypt") {
    let input = this.cipherTextInput;
    this.outputT = this.decrypt(input, this.key)
    this.plainTextInput = '';
    this.plainTextInput= this.outputT;

  }
}

 
gotoshiftcyphir(){
  this.router.navigate(['shift']);

}
gotovigenerecyphir(){
  this.router.navigate(['vignere']);
}
gotoplayfaircyphir(){
  this.router.navigate(['playfair']);
}
gotosubstitutioncyphir(){
  this.router.navigate(['substitution']);
}



 encrypt(word,keyword) {
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/ ";
  var encryptWord = "";
  for (var i = 0;i < word.length;i++) {
    encryptWord += alphabet.charAt((alphabet.indexOf(word.charAt(i)) + alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
  }
  return encryptWord;
}

 decrypt(word,keyword) {
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/ ";
  var decryptWord = "";
  for (var i = 0;i < word.length;i++) {
    decryptWord += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
  }
  return decryptWord;
}
gotorailfencecipher(){
  this.router.navigate(['realfence'])
}


}
