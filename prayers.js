/**
 * prayers.js — litanies for when 2.4GHz has abandoned you
 */
(function () {
 var PRAYERS = [
 "O Router in the ceiling, deliver unto me one unbroken video call.",
 "I shall walk to the corner of the lab where the bars are three.",
 "Ping 8.8.8.8 and ye shall receive… request timed out.",
 "Forgive me, for I have opened 40 browser tabs on 1 Mbps.",
 "The captive portal asks who I am again. Fair.",
 "Someday fiber will come. Until then, we tether.",
 "Hotspot of my roommate, hallowed be thy data pack.",
 "404: campus network not found. The canteen password is still written on the board.",
 ];

 function pray() {
 var i = Math.floor(Math.random() * PRAYERS.length);
 document.getElementById("msg").textContent = PRAYERS[i];
 }

 document.getElementById("again").addEventListener("click", pray);
 pray();
})();
