/**
 * @file event handler
 * @author Zander Koch
 * @version 1.0
 */

/**
 * adds an event listener of type type to element obj with function fn
 * @param {EventTarget} obj the target element
 * @param {String} type the type of event to be added, list on MDN.
 * @param {Function} fn the function to be added
 * 
 * @author Zander Koch
 * @version 1.0
 */
 function addListener(obj, type, fn){
    if(obj.addEventListener){
        obj.addEventListener(type, fn, false);
    }
    else{
        obj.attachEvent("on" + type, fn);
    }
}

/**
 * removes event listener of type type to element obj with function fn
 * @param {EventTarget} obj the target element
 * @param {String} type the type of event to be added, list on MDN.
 * @param {Function} fn the function to be added
 * 
 * @author Zander Koch
 * @version 1.0
 */
function removeListener(obj, type, fn){
    if(obj.removeEventListener){
        obj.removeEventListener(type, fn, false);
    }
    else{
        obj.detachEvent("on" + type, fn);
    }
}
