$(document).ready(function(){
    $('#datepicker').datepicker({
        //..
        format: 'dd/mm/yyyy',
    	startDate: '+1d',
    	endDate: '+365d',
        multidate: 2 //Just allow 2 dates to be picked start and enddate
    });
});