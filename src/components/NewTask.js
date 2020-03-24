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
      createdOn: +new Date()
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleAdd}>
      <div className="form-group">
        <label htmlFor="text" className="text-muted">
          Task:
        </label>
        <input name="text" type="text" id="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="text-muted">
          Description:
        </label>
        <textarea
          name="description"
          id="description"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};
