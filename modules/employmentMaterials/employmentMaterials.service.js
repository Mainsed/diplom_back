const EmploymentMaterials = require('../../models/employmentMaterials.model');

const employmentMaterialsService = {
  findOne: async (criteria) => {
    const employmentMaterial = await EmploymentMaterials.findOne({ ...criteria, deletedAt: null });

    if (!employmentMaterial) throw new Error(JSON.stringify(
      {
        message: 'Not found employment material',
        status: 'Not Found',
        code: 404
      }
    ));

    return employmentMaterial;
  },
  findAll: async () => {
    return EmploymentMaterials.find({ deletedAt: null });
  },
  create: async (entity) => {
    return EmploymentMaterials.create(entity);
  },
  update: async (_id, newEntity) => {
    return EmploymentMaterials.updateOne({ _id }, newEntity);
  },
  delete: async (_id) => {
    return EmploymentMaterials.updateOne({ _id }, { deletedAt: new Date(Date.now()) });
  },
};

module.exports = employmentMaterialsService;
