<?php

class WordPress_Plugin_Starter {

    public function __construct() {

        add_action( 'plugins_loaded', '_plugin_init' ); // plugin init function

    }

    function _plugin_init() {

        // before all load plugin text domain
        load_plugin_textdomain( 'mio-plugin', false, dirname(WORDPRESS_PLUGIN_STARTER_DIRECTORY_BASENAME) . '/languages' ) );

    }

}

new WordPress_Plugin_Starter;
