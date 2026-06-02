

//Moment libraries...


// let a = moment() ;
  

// let FormattedDate= a.format('YYYY-MM-DD');
//  console.log(FormattedDate);


//  import moment from 'moment'; 
//  const moment = require('moment')
 
let formattedDate=moment().format('YYYY-MM-DD') ;
document.getElementById('formattedDate').textContent= formattedDate;    
       


 //month date, year
 document.getElementById('yearMonth').textContent = moment().format('MMMM D , YY')
 console.log()   


//It will give Time 
document.getElementById('setTime').textContent = `Time  :  ${moment().format('h:mm:ss a')} `
 console.log()


        

    
   //Add 1 day to a date      
  let date = moment('2026-03-06')
  document.getElementById('tomorrow').textContent  =`Tommorow :  ${moment(date).add(1,'day')}`
     



// Subtract 1 hour from a date using Moment.js
       let now = moment() 
       
       document.getElementById('hourAgo').textContent =`horuAgo   :  ${moment(now).subtract(1,'hour')}` ;
       
             console.log(hourAgo);
            
//get the difference between to dates... 
      
 let diff= moment.duration(now.diff(date));  
      
 document.getElementById('timeDiff').textContent =`The difference is     :   ${diff.hours()} hours, ${diff.minutes()} minutes , ${diff.seconds()} seconds`
Document.write();
             