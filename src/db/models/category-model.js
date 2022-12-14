import { model } from 'mongoose';
import { CategorySchema } from '../schemas/category-schema';

const Category = model('category', CategorySchema);

export class CategoryModel {
  async findByCategory(name) {
    const category = await Category.findOne({ name });
    return category;
  }

  async findById(CategoryId) {
    const category = await Category.findOne({ _id: CategoryId });
    return category;
  }

  async findByCodeName(CategoryCode) {
    const category = await Category.findOne({ code: CategoryCode });
    return category;
  }

  async findByCodeRef(CategoryCodeRef) {
    const category = await Category.findOne({ codeRef: CategoryCodeRef });
    return category;
  }

  async create(CategoryInfo) {
    const createdNewCategory = await Category.create(CategoryInfo);
    return createdNewCategory;
  }

  async findAll() {
    const categorys = await Category.find({});
    return categorys;
  }

  async update({ categoryId, update }) {
    const filter = { _id: categoryId };
    const option = { returnOriginal: false };

    const updatedCategory = await Category.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedCategory;
  }

  // delteCategory 추가
  async deleteCategory(categoryId) {
    await Category.deleteOne({ _id: categoryId });
  }

  async deleteCode(code) {
    await Category.deleteOne({ code });
  }
}

const categoryModel = new CategoryModel();

export { categoryModel };
