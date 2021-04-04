

function convertTimestamp(ts) {
    var date = new Date(ts);
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var monthStr = months[date.getMonth()];
    var dateStr = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;

    return monthStr+' '+ dateStr+' '+ year+' '+hours + ':' + minutes.substr(-2) + ampm;
}


exports.convertTimestamp = convertTimestamp;