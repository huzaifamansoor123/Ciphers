import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-fair',
  templateUrl: './play-fair.component.html',
  styleUrls: ['./play-fair.component.css']
})
export class PlayFairComponent implements OnInit {
  plainTextInput='basketball';
  cipherTextInput;
  keyInput='message';
  radio;
  isPlainTrue = false;;
  isCipherTrue = false;
  input
  key
  outputT

  constructor( private router:Router) { }
  // allAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // FiveByFiveArray = [[], [], [], [], []];

  ngOnInit() {
  }
  gotorailfencecipher(){
    this.router.navigate(['realfence'])
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
    let preparedKey = this.preparingKey(this.keyInput);
    if(this.radio=='encrypt'){
    let preparedInput = this.populatingArray(this.plainTextInput);
   
    
    let output=this.encryption(preparedInput, preparedKey);
  this.cipherTextInput=output;
  }


  else{
    
   let output= this.decrypter(this.cipherTextInput,preparedKey)
   this.plainTextInput=output;
  }
  }
  decrypter(cipherText: any, key: string) {
    

    var length = cipherText.length;
    var a, b;
    var a_ind, b_ind, a_row, b_row, a_col, b_col;
    var sb ='';

    for (let i = 0; i < length; i += 2)
    {
        a = cipherText[i];
        b = cipherText[i + 1];

        a_ind = key.indexOf(a);
        b_ind = key.indexOf(b);
        a_row = Math.floor(a_ind / 5);
        b_row = Math.floor( b_ind / 5);
        a_col = a_ind % 5;
        b_col = b_ind % 5;

        if (a_row == b_row)
        {
            if (a_col == 0)
            {
               sb= sb.concat(key[a_ind + 4]);
               sb=   sb.concat(key[b_ind - 1]);
            }
            else if (b_col == 0)
            {
              sb=  sb.concat(key[a_ind - 1]);
              sb=  sb.concat(key[b_ind + 4]);
            }
            else
            {
              sb= sb.concat(key[a_ind - 1]);
              sb=  sb.concat(key[b_ind - 1]);
            }
        }
        else if (a_col == b_col)
        {
            if (a_row == 0)
            {
              sb=    sb.concat(key[a_ind + 20]);
              sb=   sb.concat(key[b_ind - 5]);
            }
            else if (b_row == 0)
            {
              sb=  sb.concat(key[a_ind - 5]);
              sb=   sb.concat(key[b_ind + 20]);
            }
            else
            {
              sb=    sb.concat(key[a_ind - 5]);
              sb=    sb.concat(key[b_ind - 5]);
            }
        }
        else
        {
          sb= sb.concat(key[5 * a_row + b_col]);
          sb=  sb.concat(key[5 * b_row + a_col]);
        }
    }
    return sb;
  }
  preparingKey(key: string) {
    const alphabet = "abcdefghiklmnopqrstuvwxyz";
    key += alphabet;
    for (let i = 0; i < key.length; i++) {
      // already exists ?!
      //secretabcdefghi..
      if (key.indexOf(key[i]) !== i) {
        key = key.slice(0, i) + key.slice(i + 1); //abcdefghi => abcd + fghi
        i--;
      }
  
    }
    console.log(key);
    return key;
  }

  encryption(plainText: string, key) {
    // console.log(plainText)
    let length = plainText.length;
    console.log(key)
    let a, b;
    let a_ind, b_ind, a_row, b_row, a_col, b_col;
    let sb = ''

    for (let i = 0; i < length; i += 2) {
      a = plainText[i];
      b = plainText[i + 1];

      a_ind = key.indexOf(a);
      if(a_ind==-1){
        a_ind=0
      }
      b_ind = key.indexOf(b);
      if(b_ind==-1){
        b_ind=0;
      }
      // console.log(a+"  "+a_ind)
      // console.log(b+"  "+b_ind)

      let a_indCode = a_ind
      let b_indCode = b_ind
      a_row = Math.floor( a_indCode / 5);
      b_row = Math.floor(b_indCode / 5);
      a_col = a_indCode % 5;
      b_col = b_indCode % 5;

      if (a_row == b_row) {
        if (a_col == 4) {
          sb = sb.concat(key[a_ind - 4]);
          sb = sb.concat(key[b_ind + 1]);
        }
        else if (b_col == 4) {
          sb = sb.concat(key[a_ind + 1]);
          sb = sb.concat(key[b_ind - 4]);
        }
        else {
          sb = sb.concat(key[a_ind + 1]);
          sb = sb.concat(key[b_ind + 1]);
        }
      }
      else if (a_col == b_col) {
        if (a_row == 4) {
          sb = sb.concat(key[a_ind - 20]);
          sb = sb.concat(key[b_ind + 5]);
        }
        else if (b_row == 4) {
          sb = sb.concat(key[a_ind + 5]);
          sb = sb.concat(key[b_ind - 20]);
        }
        else {
          sb = sb.concat(key[a_ind + 5]);
          sb = sb.concat(key[b_ind + 5]);
        }
      }
      else {
        sb = sb.concat(key[5 * a_row + b_col]);
        sb = sb.concat(key[5 * b_row + a_col]);
      }
    }
    // return sb.ToString();
    return sb;



  }

  populatingArray(originalText) {

    let length = originalText.length;
    originalText = originalText.toLowerCase();

    let sb = ''

    for (let i = 0; i < length; i++) {
      let c = originalText[i];
      let d = c.charCodeAt(0);

      if (d >= 97 && d <= 122) {
        if (sb.length % 2 == 1 && sb[sb.length - 1] == c) {
          sb = sb.concat('x');
        }
        sb = sb.concat(c);

      }
    }

    if (sb.length % 2 == 1) {
      sb = sb.concat('x');
    }

    return sb


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

}