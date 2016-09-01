# wordpress-plugin-starter
A simple starter for building awesome WordPress plugins

### What it does?
This project is designed to facilitate and speed up the production of WordPress plugins.
It depends on __grunt__ to create a fast and well organized working environment. It's super easy to use and to setup.

---

### Getting started
There are few steps to follow in order to start:
* Download the project to your WordPress plugins folder
* Change the **folder name** in order to match your `{your-project}`
* Change `wordpress-plugin-starter.php` to `{your-project}.php`
* Open `{your-project}.php` and change the Text Domain to `{your-project}`
+ Type `npm install && npm run start`

Then you are ready to go!

---

### Structure
```
├── assets
│   ├── dist
│   │   ├── css
│   │   └── js
│   └── src
│       ├── js
│       │   ├── admin-script.js
│       │   └── user-script.js
│       └── scss
│           ├── admin-style.scss
│           └── user-style.scss
├── include
│   └── main-class.php
├── languages
│   └── wordpress-plugin-starter.pot
├── Gruntfile.js
├── package.json
├── README.md
└── wordpress-plugin-starter.php

9 directories, 10 files
```

---

### How does it works?
All your plugin related files are located in `assets/src` folder.
While in watch mode all the files in `assets/src` folder and sub-folders will be compiled, uglified and saved in the `assets/dist` folder with the same name of the source file and following the same folder structure.

The plugin textdomain by default is the same that the package name, in this case **wordpress-plugin-starter**.
A `.pot` file named `{package-name}.pot` is automatically generated using _grunt-wp-i18n_ during the watch task or can be manually generated using: `npm run build`.

**Note:** remember to change the Text Domain in order to match your package name text domain, we suggest to use the same as the folder name.

So you don't forget to update the translation file after you finish your editing. (_something that happened a lot to me_)

Also the starter comes with jQuery automatically loaded and some starting scripts for both the admin and the user view.

---

### Development

Go inside the project folder and install his dependencies by typing:

```bash
npm install
```

Than you can start to write your changes using some npm scripts:

```bash
npm run start     # default task is to watch and rebuild on changes
npm run build     # build task will compile and rebuild everything
```
