const moment =require('moment')

console.log(moment().format())

//january 1st 1970 @12:00am -> 0
//january 1st 1970 @12:01am -> 60

var now=moment()

console.log('current timestamp',now.unix())
var timestamp=2577712825
var currentMoment=moment.unix(timestamp)
console.log('current moment',currentMoment.format('MMM D,YY @ h:mm a'))

console.log('current moment',currentMoment.format('MMMM Do,YYYY @ h:mm a'))