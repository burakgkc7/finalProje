import { Sonuc } from './../../models/sonuc';
import { FbServiceService } from './../../services/fbService.service';
import { Cevaplar } from './../../models/soru';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/soru';
import { map } from 'rxjs';



@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css']
})
export class DetayComponent implements OnInit {
  key!: string;
  sorular: any;
  cevaplar: any;
  sonuc: Sonuc = new Sonuc();
  secSoru: Question = new Question();
  secCevap: Cevaplar = new Cevaplar();
  
  constructor(
    public route: ActivatedRoute,
    public fbServis: FbServiceService,
    public router: Router
  ) { }

  ngOnInit() {
    this.CevapListele(),
    this.route.params.subscribe(p =>{
      this.key=p['key'];
      this.KayitGetir();
    })
  }
  KayitGetir() {
    this.fbServis.KayitByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secSoru = (y as Question);
    });
  }
  Sil() {
    this.fbServis.KayitSil(this.key).then(d => {
      this.router.navigate(['/']);
    });
  }
  cevapKaydet() {
    if (this.secCevap.key == null) {
      
      this.fbServis.cevapEkle(this.secCevap).then(() => {
        this.sonuc.islem = true;
        
      });
    }
    else {
      this.fbServis.cevapDuzenle(this.secCevap).then(() => {
        this.sonuc.islem = true;
        
      });
    }
  }
  CevapListele() {
    this.fbServis.cevapListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.cevaplar = data;
    });

  }
  
}
