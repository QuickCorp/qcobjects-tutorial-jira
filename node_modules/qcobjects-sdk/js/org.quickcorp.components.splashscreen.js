/**
 * QCObjects SDK 1.0
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
(function() {
'use strict';
Package('org.quickcorp.components.splashscreen',[
  Class('VideoSplashScreenComponent', Component, {
    name: 'splashscreen',
    basePath:CONFIG.get('splashscreenBasePath',CONFIG.get('remoteSDKPath')),
    cached: false,
    shadowed: true,
    _new_: function(o) {
      var component = this;
      o.data.basePath = component.basePath;
      var displayEffectDuration = 1000;
      var duration = component.body.getAttribute('duration');
      if (duration === null){
        duration = 3000;
      } else {
        duration = parseInt(duration);
      }
      component._bgcolor = document.body.style.backgroundColor;
      var mainElement = document.body.subelements('component[name=main]')[0];
      component._mainPosition = mainElement.style.position;
      mainElement.style.position = "fixed";
      component._mainDisplay = mainElement.style.display;
      component.body.style.width = "100%";
      component.body.style.height = "100%";
      document.body.style.backgroundColor = "#111111";
      mainElement.style.display = "none";
      setTimeout(function() {
        if (typeof component.shadowRoot !== "undefined"){
          document.body.style.backgroundColor = component._bgcolor;
          mainElement.style.display = component._mainDisplay;
          component.shadowRoot.subelements('#slot-logo').map(function (slotlogo){
            slotlogo.style.display = "block";
            slotlogo.style.transformOrigin = "center";
            Resize.apply(slotlogo,1,0);
          });
          Fade.apply(component.shadowRoot.host, 1, 0);
          Fade.apply(mainElement, 0, 1);
        }
      }, (duration-displayEffectDuration));
      setTimeout(function() {
        mainElement.style.position = component._mainPosition;
        document.body.removeChild(component.body);
        document.body.style.backgroundColor = component._bgcolor;
      }, duration);
      _super_('Component', '_new_').call(this, o);
    }
  })
]);

}).call(null);
