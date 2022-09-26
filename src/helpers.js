export const filterProducts = (products) => {
  if (products === null) {
    return;
  }
  const mainCategory = [];
  const subCategory = [];
  products.map((record) => {
    let { main_category, sub_category } = record;
    mainCategory.push(main_category);
    return subCategory.push({ main_category, sub_category });
  });
  return { mainCategory: [...new Set(mainCategory)], subCategory };
};

export const filterCategories = (products, category) => {
  const subCategories = products.filter(
    (record) => record.main_category === category
  );
  let temp = [];
  subCategories.map((item) => {
    const { sub_category } = item;
    return temp.push(sub_category);
  });
  return [...new Set(temp)];
};
