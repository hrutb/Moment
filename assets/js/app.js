

//Moment libraries...

// const moment = require("moment/moment");


// let a = moment() ;
  

// let FormattedDate= a.format('YYYY-MM-DD');
//  console.log(FormattedDate);


   
  // const moment = require('moment')
 
// let formattedDate=moment().format('YYYY-MM-DD') ;
// document.getElementById('formattedDate').textContent= formattedDate;    
       


 //month date, year
//  document.getElementById('yearMonth').textContent = moment().format('MMMM D , YY')
//  console.log()   


//It will give Time 
// document.getElementById('setTime').textContent = `Time  :  ${moment().format('h:mm:ss a')} `
//  console.log()


        

    
   //Add 1 day to a date      
  // let date = moment('2026-03-06')
  // document.getElementById('tomorrow').textContent  =`Tommorow :  ${moment(date).add(1,'day')}`
     



// Subtract 1 hour from a date using Moment.js
       let now = moment() 
       
       document.getElementById('hourAgo').textContent =`hourAgo   :  ${moment(now).subtract(1,'hour')}` ;
       
             console.log(hourAgo);


            
//get the difference between to dates... 
       let date = moment('2026-03-06')
 let diff= moment.duration(now.diff(date));  
      
 document.getElementById('timeDiff').textContent =`The difference is     :   ${diff.hours()} hours, ${diff.minutes()} minutes , ${diff.seconds()} seconds`

 


 //30 day trials calulator

 const userSignUp = moment('2026-05-20');
const today =moment();
  console.log(today);
  
 document.getElementById('activeSignUp').textContent = `Active for Days :  ${today.diff(userSignUp,'days')} days`
  
 


 //Digital Clock:- 
 let digiclock= document.getElementById('digitalClock');
 setInterval(() => {
         let liveclock= moment().format('HH:mm:ss A');  
         digiclock.textContent = liveclock;
         
 }, 1000);












































