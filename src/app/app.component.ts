import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cipherName='Shift Ciphere'
  title = 'CipherProj';
  isShiftVisible:boolean = false;
  isVigenereVisible:boolean=false;
  isPlayFairVisible:boolean=true;
  isSubstituteVisible=false;

  ShiftCiphere(){
    this.cipherName='Shift Ciphere'
    this.isShiftVisible=true;
    this.isVigenereVisible=false;
    this.isPlayFairVisible=false;
    this.isSubstituteVisible=false;
  }
  VigenereCiphere(){
    
    this.isShiftVisible=false;
    this.isVigenereVisible=true;
    this.isPlayFairVisible=false;
   this. isSubstituteVisible=false;
    this.cipherName='Vigenere Ciphere'
  }
  playFair(){
    
    this.isShiftVisible=false;
    this.isVigenereVisible=false;
    this.isPlayFairVisible=true;
   this. isSubstituteVisible=false;
    this.cipherName='Play Fair Ciphere'
  }
  substituteCiphere(){
    this.isShiftVisible=false;
    this.isVigenereVisible=false;
    this.isPlayFairVisible=false;
    this.isSubstituteVisible=true;
    this.cipherName='Substitute Ciphere'
  }
  
}
