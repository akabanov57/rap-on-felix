/*******************************************************************************
 * Copyright (c) 2011, 2017 EclipseSource and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    EclipseSource - initial API and implementation
 ******************************************************************************/

rwt.remote.HandlerRegistry.add( "rwt.widgets.Slider", {

  factory : function( properties ) {
    var isHorizontal = properties.style.indexOf( "HORIZONTAL" ) != -1;
    var result = new rwt.widgets.Slider( isHorizontal );
    rwt.remote.HandlerUtil.addStatesForStyles( result, properties.style );
    result.setUserData( "isControl", true );
    rwt.remote.HandlerUtil.setParent( result, properties.parent );
    return result;
  },

  destructor : rwt.remote.HandlerUtil.getControlDestructor(),

  properties : rwt.remote.HandlerUtil.extendControlProperties( [
    "minimum",
    "maximum",
    /**
      * @name setSelection
      * @methodOf Slider#
      * @description Sets the 'selection', which is the receiver's value, to the argument which
      * must be greater than or equal to zero.
      * @param {int} selection the new selection (must be zero or greater)
      */
    "selection",
    "increment",
    "pageIncrement",
    "thumb"
  ] ),

  propertyHandler : rwt.remote.HandlerUtil.extendControlPropertyHandler( {} ),

  getDestroyableChildren : rwt.remote.HandlerUtil.getDestroyableChildrenFinder(),

  events : [ "Selection" ],

  listeners : rwt.remote.HandlerUtil.extendControlListeners( [] ),

  listenerHandler : rwt.remote.HandlerUtil.extendControlListenerHandler( {} ),

  methods: [ "addListener", "removeListener" ],

  methodHandler : rwt.remote.HandlerUtil.extendListenerMethodHandler( {} ),

  /**
   * @class RWT Scripting analoge to org.eclipse.swt.widgets.Slider
   * @name Slider
   * @extends Control
   * @description The constructor is not public.
   * @since 3.2
   */
  scriptingMethods : rwt.remote.HandlerUtil.extendControlScriptingMethods(
    /** @lends Slider.prototype */
  {
     /**
      * @description Returns the 'selection', which is the receiver's position.
      * @return {int} the selection
      */
    getSelection : function() {
      return this._selection;
    },
     /**
      * @description Returns the maximum value which the receiver will allow.
      * @return {int} the maximum
      */
    getMaximum : function() {
      return this._maximum;
    },
     /**
      * @description Returns the minimum value which the receiver will allow.
      * @return {int} the minimum
      */
     getMinimum : function() {
      return this._minimum;
    }
  } )

} );
