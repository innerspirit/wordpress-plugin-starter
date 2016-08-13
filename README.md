# wordpress-plugin-starter
A simple starter for building awesome WordPress plugins

### What it does?

This project is designed to facilitate and speed up the production of WordPress plugins.
It depends on __grunt__ to create a fast and well organized working environment.

---

### How does it work?

Download the project, change the `package.json` name property and the **folder name** in order to match your *plugin name*, go to the `project-name.php` file in the root folder and change the plugin prefix from **WPS** to what you want.

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
