// This file is to be imported for client code using the network interface.
import {
  PersistedQueryNetworkInterface,
  addPersistedQueries,
} from './src/network_interface/ApolloNetworkInterface';

import { ExtractGQL, ExtractGQLOptions } from './src/ExtractGQL';

import {
  OutputMap,
  getQueryDocumentKey,
} from './src/common';

export {
  PersistedQueryNetworkInterface,
  addPersistedQueries,
  getQueryDocumentKey,
  OutputMap,
  ExtractGQL,
  ExtractGQLOptions,
};
