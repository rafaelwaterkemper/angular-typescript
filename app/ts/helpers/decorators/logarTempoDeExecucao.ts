export function logarTempoDeExecucao(emSegundos: boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
        const metodoOriginal = descriptor.value;
        
        descriptor.value = function(...args: any[]) {
            console.log(`Conteúdo do descriptor ${JSON.stringify(descriptor)}`);
            console.log(`Value do descriptor ${JSON.stringify(descriptor.value)}`);
            console.log(`Parämetro recebido no decorator emSegundos ${emSegundos}`)
            console.log(`Referência para o objeto decorado ${JSON.stringify(target)}`);
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`)
            
            const start = performance.now();
            
            let resultado = metodoOriginal.apply(this, args);
            console.log(`This é ${JSON.stringify(this)}`);

            const end = performance.now();

            console.log(`O tempo de execução foi de ${end - start} ms`);
            console.log(`Resultado do método ${resultado}`);
            

            return resultado;
        }

        return descriptor;

    }
}