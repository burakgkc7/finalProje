/*import { Question, } from './../../models/soru';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-populer',
  templateUrl: './populer.component.html',
  styleUrls: ['./populer.component.css']
})
export class PopulerComponent implements OnInit {
  kategoriler: Array<string>= ["Hepsi","Matematik","Tarih","Sağlık","Teknoloji","Hukuk","Dil Bilgisi","Bilim"];
  populerSorular!: Question[];
  ad!: string;
  sorular!: Question [];
  
  constructor(public servis:DataService) { }

  ngOnInit() {
    
    this.sorular=this.servis.soruListele();
  }

}*/
