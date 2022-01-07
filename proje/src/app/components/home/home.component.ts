import { Router } from '@angular/router';
import { FbServiceService } from './../../services/fbService.service';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/soru';
/*import { DataService } from 'src/app/services/data.service';*/
import { map } from 'rxjs';
import { Sonuc } from 'src/app/models/sonuc';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sorular: any;
  secSoru: Question = new Question();
  sonuc: Sonuc = new Sonuc();
  key: string;
  constructor(
    public fbServis: FbServiceService,
    public router: Router
  ) { }

  ngOnInit() {
    this.KayitListele();
    this.secSoru.key = null;
    
  }
  KayitListele() {
    this.fbServis.soruListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.sorular = data;
    });

  }
  KayitDuzenle(kayit: Question) {
    Object.assign(this.secSoru, kayit);
  }
  KayitSil(kayit: Question) {
    this.fbServis.KayitSil(kayit.key).then(() => {
      this.sonuc.islem = true;
      
    });
  }
  Kaydet() {
    if (this.secSoru.key == null) {
      
      this.fbServis.soruEkle(this.secSoru).then(() => {
        this.sonuc.islem = true;
        
      });
    }
    else {
      this.fbServis.KayitDuzenle(this.secSoru).then(() => {
        this.sonuc.islem = true;
        
      });
    }
  }
  Vazgec() {
    this.secSoru = new Question();
    this.secSoru.key = null;
  }
  
}
