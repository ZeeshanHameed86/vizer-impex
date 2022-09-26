import { AiTwotoneMoneyCollect } from "react-icons/ai";

const products_reducer = (state, action) => {
  if (action.type === "PRODUCTS") {
    const data = action.payload;
    const products = data.map((record) => {
      const { id, fields } = record;
      return { id, ...fields };
    });
    const temp = [...products];
    let filtered_products = temp.filter(
      (item) => item.main_category === state.default_filter
    );
    filtered_products = filtered_products.sort((a, b) => {
      return (
        a.name.localeCompare(b.name) &&
        a.article_no.slice(2) - b.article_no.slice(2)
      );
    });
    return { ...state, all_products: products, filtered_products };
  }

  if (action.type === "FILTER_PRODUCTS") {
    const { mainCategory, subCategory } = action.payload;
    const temp = [...state.all_products];
    let filtered_products = temp.filter(
      (item) => item.main_category === mainCategory
    );
    if (subCategory !== undefined) {
      filtered_products = filtered_products.filter(
        (item) => item.sub_category === subCategory
      );
    }
    filtered_products = filtered_products.sort((a, b) => {
      return (
        a.name.localeCompare(b.name) &&
        a.article_no.slice(2) - b.article_no.slice(2)
      );
    });
    return {
      ...state,
      filtered_products,
      m_category: mainCategory,
      s_category: subCategory,
    };
  }

  if (action.type === "SINGLE_PRODUCT_START") {
    return { ...state, loading: true };
  }
  if (action.type === "SINGLE_PRODUCT") {
    const single_product = action.payload;
    return { ...state, single_product, loading: false };
  }

  if (action.type === "TOGGLE_SORT_MENU") {
    const menu = [...state.menu];
    const index = action.payload;
    menu[index] = !menu[index];
    return {
      ...state,
      menu,
    };
  }
  if (action.type === "TOGGLE_BAR_MENU") {
    const toggle_menu = !state.toggle_menu;
    return { ...state, toggle_menu };
  }
  if (action.type === "CLOSE_SIDEBAR") {
    return { ...state, toggle_menu: false };
  }
};

export default products_reducer;
