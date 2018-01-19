import {PI, calculateCircumference} from "./circle";
import * as Circle from "./circle";

/**
 * We can use user defined name 'calc' here, for this we need to add 'export default'
 */
import calc from "./rectangle"; 

/**
 * Angular style import, absulte path default find in node_modules
 */
//import {comopnent} from "@angular/core"; 

/**
 * Core javascript not support any kind of file load.
 * ES6 is have feature to load file load but all browser is  not support ES6
 * loader module => It just javascript lib, added extension to load files
 * For achiving this we need to use loader module, like SystemJs
 * We include SystemJs in demo-module.html, Please see configuration	
 * Need to setup config in 
 */


console.log(PI);
console.log(Circle.calculateCircumference(1));
console.log(calc(25,25));



/**
 * Namespace and module
 * Namespace
 * 1) Orgnize application with JS object
 * 2) Can be split up over multiple files
 * 3) No module Loader Required
 * 4) Depenanci get difficult to manage in bigger Application. We dont know wchich file have wchich module
 * 
 *
 * Modules 
 * 1) Orgnize our application with real module
 * 2) Can be split up over multiple files
 * 3) Requie module loader
 * 4) Explicit dependency Declaration
 */