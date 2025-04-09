module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define("Cliente", {
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING  // 👈 Agregas aquí el nuevo campo
  });

  Cliente.associate = (models) => {
    Cliente.hasMany(models.Pedido, { foreignKey: "clienteId" });
  };

  return Cliente;
};
