"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frigate = void 0;
const NavalTransport_1 = require("@civ-clone/base-unit-type-naval-transport/NavalTransport");
class Frigate extends NavalTransport_1.default {
    capacity() {
        return 4;
    }
}
exports.Frigate = Frigate;
exports.default = Frigate;
//# sourceMappingURL=Frigate.js.map