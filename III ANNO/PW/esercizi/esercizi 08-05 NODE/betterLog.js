const debug = function(txt){
    console.log("DEBUG - "+txt)
}

const error = function(err){
    const datetime = new Date()
    console.error(datetime.toISOString()+"ERRORE -"+err)
}

exports.debug = debug
exports.error = error