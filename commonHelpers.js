import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as a,f as y}from"./assets/vendor-651d7991.js";const S=1e3;let d=null,r=null,e=null,l=0;const s=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),g=document.querySelector("[data-days]"),C=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");a.success({title:"👋 Greeting, my Friend!",message:'Please, choose a date and click on "Start" button to start timer',position:"topCenter"});o.disabled=!0;o.addEventListener("click",M);const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){k(t)}};y(s,T);function k(t){if(r=t[0].getTime(),e=new Date().getTime(),r>e){a.info({title:"🥰 Congratulation! Click on start!",message:'Please click on the "Start" button to start timer',position:"topCenter",timeout:1e4}),o.disabled=!1;return}a.error({title:"🥺 Ooops...",message:"Please choose a date in the future",position:"topCenter"})}function M(){d=setInterval(()=>{if(e=new Date().getTime(),r-e<=1e3){clearInterval(d),o.disabled=!0,s.disabled=!1,a.success({title:"👏 Congratulation! Timer stopped!",message:'Please, if you want to start timer, choose a date and click the "Start" button',position:"topCenter"});return}else o.disabled=!0,s.disabled=!0,e+=1e3,l=Math.floor(r-e),q(v(l))},S)}function q({days:t,hours:i,minutes:c,seconds:u}){g.textContent=`${n(t)}`,C.textContent=`${n(i)}`,b.textContent=`${n(c)}`,D.textContent=`${n(u)}`}function v(t){const m=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:p}}function n(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
