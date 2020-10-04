import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-substitution-cipher',
  templateUrl: './substitution-cipher.component.html',
  styleUrls: ['./substitution-cipher.component.css']
})
export class SubstitutionCipherComponent implements OnInit {

  plainTextInput = 'defend the west wall of the china';
  cipherTextInput;
  keyInput = 'phqgiumeaylnofdxjkrcvstzbb';
  radio;
  isPlainTrue = false;;
  isCipherTrue = false;
  input
  key
  outputT
  output
  abcd = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  constructor( private router:Router) { }

  ngOnInit() {
  }

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

    if (this.radio === 'encrypt') {

      this.cipherTextInput = "";





    }
    else if (this.radio === 'decrypt') {

      this.plainTextInput = "";
    }

  }

  submit() {
    this.input = '';
    this.key = this.keyInput
    console.log('SUBMIT KEY  ', this.key)
    if (this.radio == "encrypt") {
      let input = this.plainTextInput;





      this.output = this.encryption(input, this.key)


      this.cipherTextInput = this.output;
    }


    else if (this.radio === "decrypt") {
      this.outputT = ''
      let input = this.cipherTextInput;


      this.outputT += this.decrypt(input, this.key)




      this.plainTextInput = this.outputT;

    }
  }
  decrypt(input: any, key: any) {
    this.outputT = ''
    for (let index = 0; index < input.length; index++) {

      const element = input[index];
      if (element === " ") {
        this.outputT += element
      }
      else {
        let indexing = key.indexOf(element);
        this.outputT+=this.abcd[indexing];
        console.log(indexing)

      }
    }
    return this.outputT
  }
  encryption(input: any, key: any) {

    console.log(input)
    console.log(key)
    let indexing
    let tempOut = ''
    for (let index = 0; index < input.length; index++) {

      if (input[index] === ' ') {
        tempOut += input[index]
      }
      else {
        indexing = this.abcd.findIndex((element) => {
          return element === input[index]

        })
        console.log(indexing)
        tempOut += key[indexing]


      }
    }
    return tempOut;
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
gotorailfencecipher(){
  this.router.navigate(['realfence'])
}




}
