
const TABLA = 'post';

module.exports = function(injectedStore){
    let store = injectedStore;
    if(!store){
        store = require('../../../store/mysql');
    }
    function list(){
        return store.list(TABLA);
    }

    function get(id){
        return store.get(TABLA, id)
    }

    function upsert(body){
        const newPost={
            id: body.id,
            text: body.text,
            user: body.user
        }

        return store.insert(TABLA, newPost)
    }

    function eliminar(id){

        return store.eliminar(TABLA,id)
    }

    

    return {
        list,
        get,
        upsert,
        eliminar,
        
    }
}