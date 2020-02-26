class ControllerComm{
    static getComm(req,res){
        res.send(`LIST COMMODITIES`)
    }
    static getAdd(req,res){
        res.send(`form add comm`)
    }
    static getEdit(req,res){
        res.send('form edit comm')
    }
}

module.exports = ControllerComm