###
# Leaflet.Draw Patches
 ###
L.EditToolbar.Edit.include
  __removeHooks: L.EditToolbar.Edit::removeHooks
  __revertLayer: L.EditToolbar.Edit::_revertLayer

  # Patch missing event
  removeHooks: ->
    @__removeHooks.apply @, arguments
    if @_map
      @_map.off 'draw:editvertex', @_updateTooltip, @

  # Patch handlers not reverted on cancel edit. See https://github.com/Leaflet/Leaflet.draw/issues/532
  _revertLayer: (layer) ->
    id = L.Util.stamp layer
    @__revertLayer.apply @, arguments
    layer.editing.latlngs = this._uneditedLayerProps[id].latlngs
    layer.editing._poly._latlngs = this._uneditedLayerProps[id].latlngs
    layer.editing._verticesHandlers[0]._latlngs = this._uneditedLayerProps[id].latlngs

  _editStyle: ->
    # missing method declaration in Leaflet.Draw
    return

L.EditToolbar.include
  # Patch _activeMode is null
  _save: ->
    handler = this._activeMode.handler
    handler.save()
    handler.disable()
