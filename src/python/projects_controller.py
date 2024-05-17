from app import app
from projects_model import Projects
from flask import request, jsonify

projects = Projects();

@app.route("/projects")
def get_all_projects():
    return projects.get_all_projects();

@app.route("/project/<id>")
def get_project_by_id(id):
    return projects.get_project_by_id(id);

@app.route("/project/add", methods=["POST"])
def add_project():
    return projects.add_project(request.form);

@app.route("/project/patch", methods=["PATCH"])
def patch_project():
    return projects.patch_project(request.form);

@app.route("/project/delete/<id>", methods=["DELETE"])
def delete_project(id):
    return projects.delete_project(id);