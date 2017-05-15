import Search from '../apis/twitter/search';

/**
 * Currently only one twitter api is integrated.
 * Later if we want to integrate moew twitter apis we can easily do it
 * by adding api key names here and loading corresponding class!
 *
 * Things to consider where creating new twitter api class:
 * Class must not be static
 * All the class must have a method named call
 * All the class must extend base class present at path: ROOT_DIR/src/apis/base.js, to leverage common stuffs
 */
export default {
	'search': Search
};