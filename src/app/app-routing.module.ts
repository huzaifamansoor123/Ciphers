import { PlayFairComponent } from './play-fair/play-fair.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { ShiftCipherComponent } from './shift-cipher/shift-cipher.component';
import { VigenereCipherComponent } from './vigenere-cipher/vigenere-cipher.component';
import { SubstitutionCipherComponent } from './substitution-cipher/substitution-cipher.component';
import { RealfenceComponent } from './realfence/realfence.component';


const routes: Routes = [
  {path:'',component:ShiftCipherComponent},
  {path:'vignere',component:VigenereCipherComponent},
  {path:'playfair',component:PlayFairComponent},
  {path:'substitution',component:SubstitutionCipherComponent},
  {path:'shift',component:ShiftCipherComponent},
  {path:'realfence',component:RealfenceComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
