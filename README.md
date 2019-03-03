# django-2020

The Django server for the 2020 MRDC Game Server.

## Requirements

* You should have at least Python 3.5 (*definitely* some version of Python 3).
  * Along with this, you'll need pip3.
  * Both can be installed with `sudo apt install python3 python3-pip`.
* Obviously, you'll need Django (`pip3 install Django`).

## Running the server

* Use `python3 manage.py runserver` to start the Django server.

## Good-to-knows

* Database models are located in `djangogame/models.py`. In order to change models:
  * Edit the model classes in `djangogame/models.py` (see `polls/models.py` for an example)
  * Run `python3 manage.py makemigrations` to create migrations for your changes
  * `python3 manage.py sqlmigrate <app_name> <migration_number>` shows the SQL actions for a migration
  * Run `python3 manage.py migrate` to apply the created migrations to the database
* Installed apps are listed in `djangogame/settings.py`
* Start the shell with `python3 manage.py shell`
* Register models that need an admin interface in `djangogame/admin.py`
