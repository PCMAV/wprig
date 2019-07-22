/* eslint-env es6 */
'use strict';

/**
 * Internal dependencies
 */
import {
	gulpTestPath,
	prodThemePath,
	rootPath,
} from '../../constants';

export const filesToMock = [
	{
		mock: `${ gulpTestPath }/prod-build/config.local.json`,
		dest: `${ rootPath }/config/config.local.json`,
	},
	{
		mock: `${ gulpTestPath }/translations/fr_FR.po`,
		dest: `${ rootPath }/languages/fr_FR.po`,
		prodDest: `${ prodThemePath }/languages/fr_FR.po`,
	},
	{
		mock: `${ gulpTestPath }/translations/fr_FR.mo`,
		dest: `${ rootPath }/languages/fr_FR.mo`,
	},
	{
		mock: `${ gulpTestPath }/translations/wp-5.1.x-fr.po`,
		dest: `${ rootPath }/languages/wp-5.1.x-fr.po`,
		prodDest: `${ prodThemePath }/languages/wp-5.1.x-fr.po`,
	},
	{
		mock: `${ gulpTestPath }/translations/wp-5.1.x-fr.mo`,
		dest: `${ rootPath }/languages/wp-5.1.x-fr.mo`,
	},
];