# DataBoxx with DataPOS
## by Datacom Business Systems

## Getting started

This project requires Python 3.x, `virtualenv` and NodeJs 8.x or better, and is deployed on an Ubuntu 18.04 server.

Node and `virtualenv` are development dependencies and are not needed for production.

* Clone the project
* Install the dependencies on your machine
* Populate the database

**Notes**
* The setup script will set everything up and install all the dependencies
`source scripts/setup.sh`. **THIS MUST BE EXECUTED FROM THE ROOT OF THE PROJECT** You should run this when ever you open a terminal to work on this project.

## Clone or Fork the Project

## Installation Prerequisites
### Install Postgres
The databse uses Django-Cities which is a spatial database. This project is set up for Postgres.
You will need to install Postgres as a pre-requisite.

`sudo apt update && sudo apt upgrade`
`sudo apt install git python3 python3-dev python3-pip libpq-dev postgresql-12 postgresql-contrib postgresql-server-dev-12 postgresql-client-12, postgresql-12-postgis, python-psycopg2`

`sudo apt-get install sqlite3 libsqlite3-dev`

### Manage Postgres
Install PGAdmin for a GUI interface or
Log in through comand line
`sudo su postgres`
`psql`
`CREATE DATABASE myproject;`
`CREATE USER username WITH PASSWORD 'password';`
`GRANT ALL PRIVILEGES ON DATABASE myproject TO username;`
`\q`
`Exit`

### Install NodeJS
`curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -`
`sudo apt-get install -y nodejs`
Change the permissions Loevel of the node_modules folder
`sudo chmod -R 777 /usr/lib/node_modules`
`sudo chmod -R 777 /dev/project/directory/.../node/node_modules`

### Set up Machine Dependencies
`sudo npm install nodemon`
`sudo npm install -g cordova`
`sudo apt-get install yarn`
`sudo npm install -g framework7-cli`
`sudo npm install -g npx`
`sudo npm install -g @vue/cli`
`sudo pip3 install virtualenv`
`sudo apt-get install ghostscript`
restart Ubuntu

### Installing Spatial Database
Follow the Django Installation instructions. for installation at this link -> Installing PostGIS:
https://docs.djangoproject.com/en/dev/ref/contrib/gis/

Follow the direction to install GEOS and PROJ.4, but not GDAL (Installed from different method below)
Make the installation in your /usr/local/bin folder on your system

You will need the following links and packages to complete the installation:

#### GEOS
> wget https://download.osgeo.org/geos/geos-3.8.0rc3.tar.bz2
>tar xjf geos-3.8.0rc3.tar.bz2
...follow instructions on Django website
>sudo ldconfig


#### PROJ.4
##### If you hava a WSL system
`sudo apt install libtiff5-dev libcurl4-gnutls-dev libsqlite3-dev libtiff-dev pkg-config pkg-kde-tools sharutils sqlite3 xz-utils`
`sudo apt-get install binutils libproj-dev gdal-bin`

>sudo wget https://download.osgeo.org/proj/proj-7.0.1RC1.tar.gz
>sudo wget https://download.osgeo.org/proj/proj-datumgrid-north-america-1.4RC1.tar.gz

>sudo tar xzf proj-7.0.1RC1.tar.gz
>sudo tar xzf ../../proj-datumgrid-north-america-1.4RC1.tar.gz

...follow instructions on Django website
* Optional Configuration Settings if installation doesnt work initially. (on the ./configure step)
`sudo ./configure SQLITE3_CFLAGS="-I$sqliteDir/include" SQLITE3_LIBS="-L$sqliteDir/lib -lsqlite3" `
`sudo ./configure -prefix=/opt/proj-7.0.1 SQLITE3_CFLAGS="-I$sqliteDir/include" SQLITE3_LIBS="-L$sqliteDir/lib -lsqlite3"`

>sudo ldconfig

#### GDAL
Download file from: https://launchpad.net/ubuntu/+source/gdal/2.2.3+dfsg-2
`sudo wget https://download.osgeo.org/gdal/3.0.4/gdal-3.0.4.tar.gz`
`sudo tar xzf gdal_2.2.3+dfsg.orig.tar.xz`
`sudo ./configure --with-python="python3"`

sudo ldconfig

#### PostGIS
Instructions: https://postgis.net/docs/postgis_installation.html#install_short_version

`wget http://postgis.net/stuff/postgis-3.0.2dev.tar.gz`
`tar -xvzf postgis-3.0.2dev.tar.gz`
`sudo sudo ./configure`
`sudo make`
`sudo sudo make instal`l
`cd ..`

#### Create Database Extension
`sudo su postgres`
`psql -d databaseName -c "CREATE EXTENSION postgis;"`

#### Populate Database
Run the commands from the `/backend` directory
`manage.py migrate cities`
`manage.py cities --import=all`

#### User PostGIS
import to use in Models with the following import statement:
`from django.contrib.gis.db import models`

## Running the project
To start the development server run `devserver`. This will start Django and
Webpack

## Directory structurer

### `env/`
This is the virtual environment directory for the python aspect of this project.
It is not tracked and unique to each computer. Its is also not movable. There
is no reason to interact with this directory directly.

### `backend/`
This directory hold the Django projecy. `manage.py` is set to be part of your
path when you activate the development environment and you do not have to worry
about where it is being executed from. Also, **DO NOT** pre-pend `manage.py`
with `python/3` or `./`, this will break stuff.

All the Django apps and config are also kept in this directory.

The `requirements.txt` file is also kept here.

### `frontend/`
This is where the Vue.JS project and any front end or static resources are kept.

The `package.json` file is also here.

When the development environment is activated, the
`/frontend/node_modules/.bin/` directory is pre-pended to your path.

### `scripts/`
This directory holds scripts for helping with the development process.

When the development environment is activated, the `scripts` directory is
pre-pended to your path.

## Updating the database
When a model is changed the databse needs to be migrated. To do this run
`manage.py makemigrations` to stage the changes. This will update files in
the app and they need to commited. To migrate the data base run,
`manage.py migrate`.
run the following commands to populate the Database from the `/backend` directory
`manage.py loaddata holidays`
`manage.py loaddata days-of-week`
`manage.py loaddata industries`


## API documents
This project uses self documenting tools for API references. They can be found
at while they server is running:

http(s)://{site URL}/api/redoc/

## Plugins

### Django Rest framwork
We are using the Django Rest framwork to set up the RESR API:

https://www.django-rest-framework.org/

### Django-REST-Registration
User registration REST API, based on django-rest-framework.

https://github.com/apragacz/django-rest-registration
