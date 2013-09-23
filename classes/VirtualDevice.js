VirtualDevice = function (id, controller) {
    this.id = id;
    this.controller = controller;
    this.deviceType = null;
    this.metrics = {};
};

VirtualDevice.prototype.setMetricValue = function (name, value) {
    this.metrics[name] = value;
    this.controller.emit("device.metricUpdated", this.id, name, value);
};

VirtualDevice.prototype.performCommand = function (command) {
    return false;
};