var RadiantUI;
if (!RadiantUI) {
	RadiantUI = {};
	RadiantUI.TriggerEvent = function() {}
	RadiantUI.NotifyPropertyChanged = function(propertyName, newValue) 
	{
		var test = (propertyName + ' new value is: ' + newValue.toString());
	}
	RadiantUI.SetCallback = function() {}
	RadiantUI.RemoveCallback = function() {}
}