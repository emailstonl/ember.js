import { Dict, VMArguments } from '@glimmer/interfaces';
import { createComputeRef, Reference } from '@glimmer/reference';
import { reifyNamed } from '@glimmer/runtime';

/**
@module ember
*/

/**
   Use the `{{hash}}` helper to create a hash to pass as an option to your
   components. This is specially useful for contextual components where you can
   just yield a hash:

   ```handlebars
   {{yield (hash
      name='Sarah'
      title=office
   )}}
   ```

   Would result in an object such as:

   ```js
   { name: 'Sarah', title: this.get('office') }
   ```

   Where the `title` is bound to updates of the `office` property.

   Note that the hash is an empty object with no prototype chain, therefore
   common methods like `toString` are not available in the resulting hash.
   If you need to use such a method, you can use the `call` or `apply`
   approach:

   ```js
   function toString(obj) {
     return Object.prototype.toString.apply(obj);
   }
   ```

   @method hash
   @for Ember.Templates.helpers
   @param {Object} options
   @return {Object} Hash
   @since 2.3.0
   @public
 */
export default function(args: VMArguments): Reference<Dict<unknown>> {
  let positional = args.named.capture();

  return createComputeRef(() => reifyNamed(positional), null, 'hash');
}
