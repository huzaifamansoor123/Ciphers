import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realfence',
  templateUrl: './realfence.component.html',
  styleUrls: ['./realfence.component.css']
})
export class RealfenceComponent implements OnInit {

  constructor( private router:Router) { }
  ngOnInit(){}


  
  plainTextInput;
  cipherTextInput;
  keyInput;
  radio;
  input
  rail = [];
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
gotorailfencecipher(){
  this.router.navigate(['realfence'])
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



encrypt(input: any, key: any): any {
  console.log(input)
  console.log(key)
  let result = ''
  for (let i = 0; i < key; i++) {
    this.rail[i] = new Array();
  }
  for (let i = 0; i < key; i++)
    for (let j = 0; j < input.length; j++)
      this.rail[i][j] = '\n';

  let dir_down = false;
  let row = 0, col = 0;

  for (let i = 0; i < input.length; i++) {

    if (row == 0 || row == key - 1)
      dir_down = !dir_down;


    this.rail[row][col++] = input[i];


    dir_down ? row++ : row--;
  }

  for (let i = 0; i < key; i++)
    for (let j = 0; j < input.length; j++)
      if (this.rail[i][j] != '\n')
        result += this.rail[i][j];


  
  return result

}
decrypt(cipher: any, key: any) {
  this.rail = []
  for (let i = 0; i < key; i++) {
    this.rail[i] = new Array();
  }

  let result = '';



  let dir_down;

  let row = 0, col = 0;

  // mark the places with '*' 
  for (let i = 0; i < cipher.length; i++) {
  
    if (row == 0)
      dir_down = true;
    else if (row == key - 1)
      dir_down = false;

    // place the marker 
    this.rail[row][col++] = '*';

    // find the next row using direction flag 
    dir_down ? row++ : row--;
  }

  // now we can construct the fill the rail matrix 
  let index = 0; ``
  for (let i = 0; i < key; i++)
    for (let j = 0; j < cipher.length; j++)
      if (this.rail[i][j] == '*' && index < cipher.length)
        this.rail[i][j] = cipher[index++];


  // now read the matrix in zig-zag manner to construct 
  // the resultant text 


  row = 0, col = 0;
  for (let i = 0; i < cipher.length; i++) {
    // check the direction of flow 
    if (row == 0)
      dir_down = true;
    if (row == key - 1)
      dir_down = false;

    // place the marker 
    if (this.rail[row][col] != '*')
      result += this.rail[row][col++];
      // this.textobj.plaintextOutput=result;

    // find the next row using direction flag 
    dir_down ? row++ : row--;
  }
   return (result)

}



}
