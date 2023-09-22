import 'react-native';

import type {NativeModules} from '../dtos';

declare module 'react-native' {
  interface NativeModulesStatic extends NativeModules {
    // TODO
  }
}
