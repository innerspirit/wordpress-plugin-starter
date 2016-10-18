<?php

/**
 * WordPress Plugin Starter
 *
 * @package     WordPress Plugin Starter
 * @author      codekraft-studio
 * @copyright   2016 codekraft-studio
 * @license     GPL-2.0+
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

// Block direct access to file
defined( 'ABSPATH' ) or die( 'Not Authorized!' );

// Plugin Defines
define( "WPS_FILE", __FILE__ );
define( "WPS_DIRECTORY", dirname(__FILE__) );
define( "WPS_TEXT_DOMAIN", dirname(__FILE__) );
define( "WPS_DIRECTORY_BASENAME", plugin_basename( WPS_FILE ) );
define( "WPS_DIRECTORY_PATH", plugin_dir_path( WPS_FILE ) );
define( "WPS_DIRECTORY_URL", plugins_url( null, WPS_FILE ) );

// Require the main class file
require_once( WPS_DIRECTORY . '/include/main-class.php' );
