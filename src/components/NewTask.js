import React from "react";

export default ({ addTodo }) => {
  const handleAdd = e => {
    e.preventDefault();
    // we need data from Form; for that we can use FormData API
    const formData = new FormData(e.target);
    console.log("---Form---", formData);
    addTodo({
      text: formData.get("text"),
      description: formData.get("description"),
      createdOn: new Date().toUTCString()
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleAdd}>
      <div class="form-group">
        <label htmlFor="text" className="text-muted">
          Task:
        </label>
        <input name="text" type="text" id="text" class="form-control" />
      </div>
      <div class="form-group">
        <label htmlFor="description" className="text-muted">
          Description:
        </label>
        <textarea name="description" id="description" class="form-control" />
      </div>
      <div class="form-group">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};
