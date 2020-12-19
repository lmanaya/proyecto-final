//Llamado a los modelos
const models = require('../models');
//Manejo de contraseñas encriptadas
const bcrypt = require('bcryptjs');

const tokenServices = require('../services/token.js');

//Login
exports.login = async (req, res, next) => {
    try {
        // Verificar que el usuario exista
        const user = await models.Usuario.findOne({ where: { email: req.body.email } });
        if (user) {
            // Verificar que la contraseña sea correcta
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                const token = await tokenServices.encode(user);
                // res.status(200).send({
                //     auth: true,
                //     tokenReturn: token,
                //     user: user,
                // });
                res.status(200).json({
                    tokenReturn: token,
                    user: user,
                });
            } else {
                // res.status(401).json({
                //     error: "Error en el usuario o contraseña"
                // });
                res.status(401).send({ 
                    auth: false, 
                    tokenReturn: null, 
                    reason: "Invalid Password!" });
            }
        } else {
            // res.status(404).json({
            //     error: "Error en el usuario o contraseña"
            // });
            res.status(404).send({
                error: "User Not Found."
            });
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        }),
            next(error);
    }
};
exports.add = async (req, res, next) => {
    try {
        const user = await models.Usuario.create(req.body);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
};
exports.list = async (req, res, next) => {
    try {
        const user = await models.Usuario.findAll();
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).send({
                message: 'There is not user in the system'
            })
        }
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
};
exports.update = async (req, res, next) => {
    // try {
    //     const user = await models.Usuario.update({ rol: req.body.rol, nombre: req.body.nombre, email: req.body.emai },
    //         {
    //             where: {
    //                 id: req.body.id
    //             }
    //         });
    //     res.status(200).json(user);
    // }
    // catch (error) {
    //     res.status(500).send({
    //         message: 'Error ->'
    //     });
    //     next(error);
    // }
    try {
        const user = await models.Usuario.findOne({ where: { email: req.body.email } });
        if (user) {
            const user = await models.Usuario.update({ rol: req.body.rol, nombre: req.body.nombre},
                {
                    where: {
                        email: req.body.email
                    }
                });
            res.status(200).json(user);
        }
        else {
            res.status(404).send({
                message: "User not found"
            })
        }
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
};
exports.activate = async (req, res, next) => {
    try {
        const user = await models.Usuario.update({ estado: 1 },
            {
                where: {
                    id: req.body.id
                }
            });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
};
exports.deactivate = async (req, res, next) => {
    try {
        const user = await models.Usuario.update({ estado: 0 },
            {
                where: {
                    id: req.body.id
                }
            });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
}
