export function throttle(milissegundos = 500) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        let timer:number = 0;

        descriptor.value = function(...args: any[]) {
            console.log(`timer 2 é ${timer}`)
            if(event) event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
            console.log(`timer após referenciar o retorno do setTimeout ${timer}`);
        }

    }
}