/*import { Question,  Cevaplar } from './../models/soru';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public cevapVeriler: Cevaplar [] = 
  [{"yeniCevap":"cevap1",},
    {"yeniCevap":"cevap2",},
    {"yeniCevap":"cevap3"}]
  public veriler: Question[] = [ 
    { "key":5,
      "Soru":"İstanbul kaç yılında fethedilmiştir?",
      "Cevap":"1453"},
  
];
  
constructor() { }
  
soruListele() {
    return this.veriler;
  }
cevapListele() {
    return this.cevapVeriler;
  }

  soruDetay(veri: string){
    var filtre=this.veriler.filter((s=> s.Soru==veri));
    return filtre[0];
  }
}*/
