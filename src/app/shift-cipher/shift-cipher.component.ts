import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-shift-cipher',
    templateUrl: './shift-cipher.component.html',
    styleUrls: ['./shift-cipher.component.css']
})
export class ShiftCipherComponent implements OnInit {

    constructor(private router:Router) { }

    ngOnInit() {

    }




    plainTextInput;
    cipherTextInput;
    keyInput;
    radio;
    isPlainTrue = false;;
    isCipherTrue = false;
    input
    key
    outputT


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

    encryption(input, key) {
        let d;
        var letters = /^[a-zA-Z" "]+$/;
        if (!input.match(letters)) {

            alert('Enter Alphabets only')
        }

        else if (input === " ") {
            return input;
        }
        else {
            if (input === input.toUpperCase()) {
                d = 'A';
            }
            else {
                d = 'a';
            }
            input = input.charCodeAt(0)
            d = d.charCodeAt(0);
            let result = ((((input + key) - d) % 26) + d)
            return String.fromCharCode(result)


            // let d = char.IsUpper(ch) ? 'A' : 'a';
            // return (char)((((ch + key) - d) % 26) + d);

        }
    }



    //   decryption(input) {
    //       console.log(input);
    //       return this.encryption(input, 26 - this.key);

    //   }



    submit() {
        this.input = '';
        this.key = this.keyInput.value;
        if (this.radio == "encrypt") {
            let input = this.plainTextInput;

            this.key = parseInt(this.keyInput);
            let output = '';

            for (let index = 0; index < input.length; index++) {
                output += this.encryption(input[index], this.key)

            }
            this.cipherTextInput = output;
        }


        else if (this.radio === "decrypt") {
            this.outputT = ''
            let input = this.cipherTextInput;
            this.key = parseInt(this.keyInput);
            for (let index = 0; index < input.length; index++) {
                this.outputT += this.encryption(input[index], 26 - this.key)
                console.log(this.outputT)


            }
            // this.plainTextInput = '';
            this.plainTextInput = this.outputT;

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


    gotorailfencecipher(){
        this.router.navigate(['realfence'])
      }
      





}
