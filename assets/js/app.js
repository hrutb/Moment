

//Moment libraries...


// let a = moment() ;
  

// let FormattedDate= a.format('YYYY-MM-DD');
//  console.log(FormattedDate);


//  import moment from 'moment'; 
const moment = require('moment')
 
let formattedDate=moment().format('YYYY-MM-DD') ;
    console.log(formattedDate);
       


 //
 console.log(moment().format('MMMM D , YY'))   


//It will give Time 
 console.log(moment().format('h:mm:ss a'))


        

    
   //Add 1 day to a date      
  let date = moment('2026-03-06')
   let tommorrow =moment(date).add(1,'day');

     console.log(tommorrow);
     



// Subtract 1 hour from a date using Moment.js
       let now = moment() 
       
       let hourAgo = moment(now).subtract(1,'hour');
             console.log(hourAgo);
            
//get the difference between to dates... 
      
 let diff= moment.duration(now.diff(date));  
        
 console.log(`The difference is${diff.hours()} hours, ${diff.minutes()} minutes , ${diff.seconds()} seconds`);
             