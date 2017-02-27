function MyParameterDecorator(
    target: Function, // The prototype of the class
    propertyKey: string | symbol, // The name of the method
    parameterIndex: number // The index of parameter in the list of the function's parameters
    ) {
    console.log("MyParameterDecorator called on: ", target, propertyKey, parameterIndex);
}

class MyParameterDecoratorExample {
    method( @MyParameterDecorator param1: string,
        @MyParameterDecorator param2: number) {
    }
}