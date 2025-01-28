import { defineBackend } from '@aws-amplify/backend';
import { hack } from './hack/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  hack
});
