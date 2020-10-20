/**
 * @fileOverview <code>jsgl.stroke.LongDashDashStyle</code> implementation.
 * @author Tomas Rehorek
 * @since version 1.0
 */   

/**
 * @class Dash pattern class providing pattern of long dashes.
 * @extends jsgl.stroke.AbstractDashStyle
 * @constructor
 * @description Creates new instance of <code>jsgl.stroke.LongDashDashStyle</code>
 * class. Typically, calling this constructor is not necessary since there is
 * a singleton instance available via <code>jsgl.DashStyles.LONG_DASH</code>.
 * Also, the singleton instance may be obtained via the static
 * {@link jsgl.stroke.LongDashDashStyle.getInstance} method.
 * @since version 1.0
 */
jsgl.stroke.LongDashDashStyle = function() {

}
jsgl.stroke.LongDashDashStyle.jsglExtend(
  jsgl.stroke.AbstractDashStyle);

/**
 * @methodOf jsgl.stroke.LongDashDashStyle#
 * @returns {array} [7,4]
 * @see jsgl.stroke.AbstractDashStyle#getDashArray  
 * @since version 1.0
 */  
jsgl.stroke.LongDashDashStyle.prototype.getDashArray = function() {

  return [7,4];
}

/**
 * @methodOf jsgl.stroke.LongDashDashStyle#
 * @see jsgl.stroke.AbstractDashStyle#applyToVmlStrokeElement   
 * @since version 1.0
 */  
jsgl.stroke.LongDashDashStyle.prototype.applyToVmlStrokeElement = function(strokeElement) {

  strokeElement.dashstyle = "longdash";
}

/**
 * @description Gets a singleton instance of the
 * <code>jsgl.stroke.LongDashDashStyle</code> class.
 * @methodOf jsgl.stroke.LongDashDashStyle 
 * @static
 * @since version 1.0
 */
jsgl.stroke.LongDashDashStyle.getInstance = jsgl.util.singletonInstanceGetter;