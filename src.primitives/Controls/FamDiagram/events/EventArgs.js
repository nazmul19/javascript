/**
 * @class EventArgs
 */
primitives.orgdiagram.EventArgs = function () {
	/**
   * Current item
   * 
   * @type {string}
   */
  this.oldContext = null;

  /**
   * New item
   * 
   * @type {string}
   */
  this.context = null;

  /**
   * Parent items
   * 
   * @type {string[]}
   * @ignore
   */
  this.parentItems = null;

  /**
   * Node position on the diagram.
   * 
   * @type {Rect}
   */
  this.position = null;

  /**
   * Relative object name.
   * 
   * @type {string}
   */
  this.name = null;

  /**
   * If true cancels subsequent event and layout update.
   * 
   * @type {boolean}
   */
  this.cancel = false;
};