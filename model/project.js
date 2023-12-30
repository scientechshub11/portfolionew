module.exports = (sequelize, type) => {
    const project = sequelize.define('project', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        uuidIdentifier: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            allowNull: false
        },
        name: {
            type: type.TEXT,
            allowNull: true,
        },
        projectLink: {
            type: type.TEXT,
            allowNull: true
        },
        image:{
            type: type.TEXT,
            allowNull: true
        },
        description: {
            type: type.TEXT,
            allowNull: true
        },
        duration: {
            type: type.TEXT,
            allowNull: true
        },
        projectDetails:{
            type: type.TEXT,
            allowNull: true
        },
        demoVideo:{
            type: type.TEXT,
            allowNull: true
        },
        deletedAt: {
            type: type.DATE,
            allowNull: true
        }
    }, {
        underscored: true,
        freezeTableName: true,
    })

    // user relationship
    // sequelize.model('user').belongsTo(role, {
    //     foreignKey: {
    //         allowNull: true
    //     }
    // })
    // role.belongsToMany(role,{
    //     as: 'childRoles',
    //     through: 'role_to_role',
    //     allowNull: false
    // })
    return project
}

/**
 * @swagger
 *  components:
 *    schemas:
 *      RoleWithoutId:
 *        type: object
 *        required:
 *          - name
 *          - description
 *        properties:
 *          name:
 *            type: string
 *          description:
 *            type: string
 *          privilegeIds:
 *            type: array
 *            items:
 *              type: string
 *              format: uuid
 *          rolePrivileges:
 *            type: array
 *            items:
 *              type: string
 *              format: uuid 
 */

/**
* @swagger
*  components:
*    schemas:
*      RoleForUpdate:
*        type: object
*        properties:
*          name:
*            type: string
*          description:
*            type: string
*          privilegeIds:
*            type: array
*            items:
*              type: string
*              format: uuid
*/

/**
* @swagger
*  components:
*    schemas:
*      RoleWithId:
*        type: object
*        properties:
*          uuidIdentifier:
*            type: string
*            format: uuid
*          name:
*            type: string
*          description:
*            type: string
*          createdAt:
*            type: string
*            format: date-time
*          updatedAt:
*            type: string
*            format: date-time
*          deletedAt:
*            type: string
*            format: date-time
*/