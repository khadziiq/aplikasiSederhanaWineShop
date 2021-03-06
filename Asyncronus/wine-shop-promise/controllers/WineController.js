const Wine = require('../models/Wine');
const WineView = require('../views/WineView');

class WineController {
    static help(){
        WineView.help()
    }

    static wines(){
        //biasa
        
        // const wines = Wine.wines()
        // WineView.wines(wines)

        // call back
        // Wine.wines((err,data)=>{
        //     if(err){
        //         WineView.error(err)
        //     } else{
        //         WineView.wines(data)
        //     }
        // })
        
        //promise
        Wine.wines()
        .then(data=>{
            WineView.wines(data)
        })
        .catch(err=>{
            WineView.error(err);
        })
    }

    static add(params){
        Wine.add(params)
        .then(data=>{
            WineView.message(data)
        })
        .catch(err=>{
            WineView.error(err)
        })
    }   

    static sell(params){
        Wine.sell(params)
        .then(data=>{
            WineView.message(data)
        })
        .catch(err=>{
            WineView.error(err)
        })
    }

    static rename(params){
        Wine.rename(params)
        .then(data=>{
            WineView.message(data)
        })
        .catch(err=>{
            WineView.error(err)
        })
    }

    static findById(params){
        Wine.findById(params)
        .then(data=>{
            WineView.message(data)
        })
        .catch(err=>{
            WineView.error(err)
        })
    }

    static message(msg){
        WineView.message(msg)
    }
}

module.exports = WineController