<?php

class WordPress_Plugin_Starter {

    public function __construct() {

        // Plugin uninstall hook
        register_uninstall_hook( WPS_FILE, array('WordPress_Plugin_Starter', 'plugin_uninstall') );

        // Plugin activation/deactivation hooks
        register_activation_hook( WPS_FILE, array($this, 'plugin_activate') );
        register_deactivation_hook( WPS_FILE, array($this, 'plugin_deactivate') );

        // Plugin Actions
        add_action( 'plugins_loaded', array($this, 'plugin_init') );

    }

    public static function plugin_uninstall() {

    }

    public function plugin_activate() {

    }

    public function plugin_deactivate() {

    }

    function plugin_init() {

        // before all load plugin text domain
        load_plugin_textdomain( 'wordpress-plugin-starter', false, dirname(WPS_DIRECTORY_BASENAME) . '/languages' );

    }

}

new WordPress_Plugin_Starter;
