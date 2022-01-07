import { Cevaplar } from './../models/soru';
import { Uye } from './../models/uye';
import { Question } from 'src/app/models/soru';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FbServiceService {
  private dbUye = '/Uyeler';
  private dbSoru = '/Sorular';
  private dbCevap = '/Cevaplar';
  uyeRef: AngularFireList<Uye> = null;  
  soruRef: AngularFireList<Question> = null;
  cevapRef: AngularFireList<Cevaplar> = null;
    
    constructor (
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
    )
    
    {
    this.soruRef = db.list(this.dbSoru);
    this.cevapRef = db.list(this.dbCevap);
    }
    soruListele() {
      return this.soruRef;
    }
    soruEkle(kayit: Question) {
      return this.soruRef.push(kayit);
    }
    KayitDuzenle(kayit: Question) {
      return this.soruRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
      return this.soruRef.remove(key);
    }
    KayitByKey(key: string) {
      return this.db.object("/Sorular/" + key);
    }
    OturumAc(mail: string, parola: string) {
      return this.afAuth.signInWithEmailAndPassword(mail, parola);
    }
    OturumKontrol() {
      if (localStorage.getItem("user")) {
        return true;
      } else {
        return false;
      }
    }
    OturumKapat() {
      return this.afAuth.signOut();
    }
    UyeOl(uye: Uye) {
      return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
    }
  
    UyeEkle(uye: Uye) {
      return this.uyeRef.push(uye);
    }
    cevapEkle(kayit: Cevaplar) {
      return this.cevapRef.push(kayit);
    }
    cevapDuzenle(kayit: Cevaplar) {
      return this.cevapRef.update(kayit.key, kayit);
    }
    cevapListele() {
      return this.cevapRef;
    }
}
