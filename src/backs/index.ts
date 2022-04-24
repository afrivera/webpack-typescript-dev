import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Villain, Hero } from '../interfaces/index';


// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3});
// printObject('Hola Mundo');

// console.log( genericFunctionArrow( 3.141516).toFixed(2) );
// console.log( genericFunctionArrow( 'Hola Mundo' ).toUpperCase() );
// console.log( genericFunctionArrow( new Date() ).getDate() );

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winson Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>( deadpool).dangerLevel)