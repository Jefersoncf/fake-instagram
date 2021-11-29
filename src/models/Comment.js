module.exports = (conection, DataTypes) => {

    const Comment = conection.define('Comment',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        content: {
            type: DataTypes.STRING,
        },
        publication_id: {
            type: DataTypes.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        create_at: {
            type: DataTypes.DATE,
        },
    },{
        tableName: 'comments',
        timestamps: false,
    });
    Comment.associate = (models) => {
        Comment.belongsTo(models.Publication, {
            foreignKey: "publication_id",
        });
        Comment.belongsTo(models.User, {
            foreignKey: "user_id",
        });
    };

    return Comment;
};