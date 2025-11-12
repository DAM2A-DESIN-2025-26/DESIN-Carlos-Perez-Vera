class Garaje {
    _coches={};
    
    constructor(_numMaxCoches){
        this._coches=[];
        this._numMaxCoches=6;
    }

    get NumeroCoches(){
        return this._numMaxCoches;
    }
    
    addCoche(marca,modelo,matricula,color){

        
        for(let i =0;i<this._numMaxCoches.length;i++){
            if(this._coches.some(fila => fila[3] === matricula)) return false;
        }
        this._coches.push()
            return true;
    }
    
    getCoche(matricula){
        let coche1 = new Coche();
       
        for(let i = 0; i < this._coches.length;i++){
            if (this._coches[i][0] === matricula) {
                console.log("Su coche se encuentra en el garaje.");
            }
        return coche1;
    }
    }

    eliminarCoche(matricula){
        
        for(let i = 0 ; i<this._numMaxCoches.length;i++){
            if (this._coches[i][0] == matricula){
                this._coches.splice(i,3);
                return true;
            }
            return false;

        }
       
    }

    existeCoche(matricula){
        if(!this._coches.some(fila => fila[3] === matricula)) return false;
    }
    
}
