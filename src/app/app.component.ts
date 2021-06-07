import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDMxEMp07_UPvKO8hhKLHbZsNo_CHHDdaI",
      authDomain: "bookshelves-1fd6a.firebaseapp.com",
      databaseURL: "https://bookshelves-1fd6a-default-rtdb.europe-west1.firebasedatabase.app/",
      projectId: "bookshelves-1fd6a",
      storageBucket: "bookshelves-1fd6a.appspot.com",
      messagingSenderId: "243794524752",
      appId: "1:243794524752:web:04acd02dc241484626af55",
      measurementId: "G-KJK316QLNX"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
