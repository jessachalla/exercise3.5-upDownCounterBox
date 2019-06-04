"use strict";
function UpDownCounter() {
   const ctrl = this;
   ctrl.count = 0;

   ctrl.goUp = function(){
     ctrl.count = ctrl.count+10;
   }
   ctrl.goDown = function(){
     ctrl.count = ctrl.count-10;
   }
 }

 angular.module('MyApp').component('upDownCounter', {
   template: `
       <div class="container">
          <p>Grow and shrink the box using the 'up' and 'down' buttons.</p>
          <div><button ng-click="$ctrl.goUp()">Up</button></div>
          <div>{{$ctrl.count}}<div>
          <div><button ng-click="$ctrl.goDown()">Down</button></div>
          <p>Click inside the box below to see it's size.</p>
          <input count="$ctrl.count" expand-on-focus></input>
       </div>
       `, 
   controller: UpDownCounter
 });