<?php

/**
 * WordPress Plugin Starter
 *
 * @package     WordPress Plugin Starter
 * @author      codekraft-studio
 * @copyright   2016 codekraft-studio
 * @license     ISC
 *
 * @wordpress-plugin
 * Plugin Name: WordPress Plugin Starter
 * Plugin URI:
 * Description: A simple starter for building awesome WordPress plugins
 * Version:     0.0.1
 * Author:      codekraft-studio
 * Author URI:  http://codekraft.it
 * Text Domain: wordpress-plugin-starter
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 */


define( "WORDPRESS_PLUGIN_STARTER_FILE", __FILE__ );
define( "WORDPRESS_PLUGIN_STARTER_DIRECTORY", dirname(__FILE__) );
define( "WORDPRESS_PLUGIN_STARTER_DIRECTORY_BASENAME", plugin_basename( WORDPRESS_PLUGIN_STARTER_FILE ) );
define( "WORDPRESS_PLUGIN_STARTER_DIRECTORY_PATH", plugin_dir_path( WORDPRESS_PLUGIN_STARTER_FILE ) );
define( "WORDPRESS_PLUGIN_STARTER_DIRECTORY_URL", plugins_url( null, WORDPRESS_PLUGIN_STARTER_FILE ) );

require_once( WORDPRESS_PLUGIN_STARTER_DIRECTORY . 'include/main-class.php' );
