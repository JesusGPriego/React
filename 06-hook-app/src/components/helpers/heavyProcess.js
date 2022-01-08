export const heavyProcess = (iteraciones) => {
        for (let i = 0; i < iteraciones; i++) {
            console.log('iterated');    
        };
        
        return `${iteraciones} iteraciones completadas`;
    }