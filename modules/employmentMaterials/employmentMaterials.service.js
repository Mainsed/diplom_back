const EmploymentMaterials = require('../../database/models/employmentMaterials.model');

const employmentMaterialsService = {
  findOne: async (criteria) => {
    const employmentMaterial = await EmploymentMaterials.findOne({ where: { ...criteria, deletedAt: null } });

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
    return EmploymentMaterials.findAll({ where: { deletedAt: null } });
  },
  create: async (entity) => {
    return EmploymentMaterials.create(entity);
  },
  update: async (id, newEntity) => {
    return employmentMaterialsService.findOne({ id })
      .then(entity => entity.update(newEntity));
  },
  delete: async (id) => {
    return employmentMaterialsService.findOne({ id })
      .then(entity => entity.update({ deletedAt: new Date(Date.now()) }));
  },
};

module.exports = employmentMaterialsService;
