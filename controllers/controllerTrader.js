class ControllerTrader{
    static getTraders(req,res){
        res.send(`LIST TRADER`)
    }
    static getAdd(req,res){
        res.send(`form add`)
    }
    static getEdit(req,res){
        res.send('form edit')
    }
}

module.exports = ControllerTrader