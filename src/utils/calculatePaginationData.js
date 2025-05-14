export const calculatePaginationData = (count, perPage, page) => {
  const totalPages = Math.ceil(count / perPage);

  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
  };
};
