#!/bin/bash

BASE_DIR="$(cd "$(dirname "$0")"; pwd -P)"

cd "$BASE_DIR/backend/"
python3 manage.py makemigrations users
python3 manage.py migrate users
python3 manage.py makemigrations commons
python3 manage.py migrate commons
python3 manage.py makemigrations datacom
python3 manage.py migrate datacom
python3 manage.py makemigrations partners
python3 manage.py migrate partners
python3 manage.py makemigrations companies
python3 manage.py migrate companies
python3 manage.py makemigrations vendors
python3 manage.py migrate vendors
python3 manage.py makemigrations commons2
python3 manage.py migrate commons2
python3 manage.py makemigrations humanresources
python3 manage.py migrate humanresources
python3 manage.py makemigrations employees
python3 manage.py migrate employees
python3 manage.py makemigrations financial
python3 manage.py migrate financial
python3 manage.py makemigrations salesoffices
python3 manage.py migrate salesoffices
python3 manage.py makemigrations warehouses
python3 manage.py migrate warehouses
python3 manage.py makemigrations inventory
python3 manage.py migrate inventory
python3 manage.py makemigrations customers
python3 manage.py migrate customers
python3 manage.py makemigrations leads
python3 manage.py migrate leads
python3 manage.py makemigrations calendars
python3 manage.py migrate calendars
python3 manage.py makemigrations blog
python3 manage.py migrate blog
python3 manage.py makemigrations attendance
python3 manage.py migrate attendance
python3 manage.py makemigrations vthpp
python3 manage.py migrate vthpp
python3 manage.py makemigrations invoices
python3 manage.py migrate invoices
python3 manage.py makemigrations
python3 manage.py migrate
