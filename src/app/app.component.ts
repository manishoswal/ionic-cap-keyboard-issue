import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';

const { SplashScreen, StatusBar } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      // If we comment the status bar code the keyboard works
      StatusBar.setStyle({
        style: StatusBarStyle.Light,
      });

      // Display content under transparent status bar (Android only)
      StatusBar.setOverlaysWebView({
        overlay: true,
      });

      SplashScreen.hide();
    });
  }
}
