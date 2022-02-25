import NavalTransport from '@civ-clone/base-unit-type-naval-transport/NavalTransport';

export class Frigate extends NavalTransport {
  capacity(): number {
    return 4;
  }
}

export default Frigate;
