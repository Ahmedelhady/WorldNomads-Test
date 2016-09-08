var SR = SR || {};
/**
 * @abstract
 * @constructor
 */
SR.Component = function ()
{ };

/**
* @interface
* @param callback
*/
SR.Component.prototype.init = function (callback) { };