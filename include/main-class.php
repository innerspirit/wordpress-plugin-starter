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
        add_action( 'wp_enqueue_scripts', array($this, 'plugin_enqueue_scripts') );
        add_action( 'admin_enqueue_scripts', array($this, 'plugin_enqueue_admin_scripts') );

    }

    public static function plugin_uninstall() { }

    public function plugin_activate() { }

    public function plugin_deactivate() { }

    function plugin_init() {

        // before all load plugin text domain
        load_plugin_textdomain( 'wordpress-plugin-starter', false, dirname(WPS_DIRECTORY_BASENAME) . '/languages' );

    }

    function plugin_enqueue_admin_scripts() {

        wp_register_style( 'wps-admin-style', WPS_DIRECTORY_URL . '/assets/dist/css/admin-style.css', array(), null );
        wp_enqueue_style('wps-admin-style');

        wp_register_script( 'wps-admin-script', WPS_DIRECTORY_URL . '/assets/dist/js/admin-script.min.js', array(), null, true );

        wp_enqueue_script('jquery');
        wp_enqueue_script('wps-admin-script');

    }

    function plugin_enqueue_scripts() {

        wp_register_style( 'wps-user-style', WPS_DIRECTORY_URL . '/assets/dist/css/user-style.css', array(), null );
        wp_enqueue_style('wps-user-style');

        wp_register_script( 'wps-user-script', WPS_DIRECTORY_URL . '/assets/dist/js/user-script.min.js', array(), null, true );

        wp_enqueue_script('jquery');
        wp_enqueue_script('wps-user-script');

    }

}

new WordPress_Plugin_Starter;
