from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in todo_app/__init__.py
from todo_app import __version__ as version

setup(
	name="todo_app",
	version=version,
	description="This is a todo app.",
	author="Diya",
	author_email="todo@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
