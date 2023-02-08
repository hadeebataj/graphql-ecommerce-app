exports.Product = {
  category: ({ id: categoryId }, args, { categories }) => {
    return categories.filter((category) => category.id === categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((review) => review.productId === id);
  },
};
