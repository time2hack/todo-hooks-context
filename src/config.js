const config = {
  sortBy: "createdOn",
  sortOrder: "DESC"
};

const sorters = {
  ASC: (a, b) => a[config.sortBy] - b[config.sortBy],
  DESC: (a, b) => b[config.sortBy] - a[config.sortBy]
};

const sorter = (todos = []) => todos.sort(sorters[config.sortOrder]);

export default {
  ...config,
  sorter
};
