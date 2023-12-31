import { Op } from "sequelize";
import Favorites from "../models/favorites.models.js";

const insertFavoriteRepository = async (gamesId, usersId) => {
  try {
    return await Favorites.create(gamesId, usersId);
  } catch (err) {
    console.log(err);
  }
};

const updateFavoriteRepository = async (paramsEnviado) => {
  try {
    await Favorites.update(paramsEnviado, {
      where: {
        id: paramsEnviado.id,
      },
    });

    return getFavoriteRepository(paramsEnviado.id);
  } catch (err) {
    console.log(err);
  }
};

const deleteFavoriteRepository = async (id) => {
  try {
    await Favorites.destroy({
      where: {
        gamesId: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getFavoritesRepository = async () => {
  try {
    return await Favorites.findAll();
  } catch (err) {
    console.log(err);
  }
};

const getFavoriteRepository = async (name) => {
  try {
    return await Favorites.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${name}%`
            }
          },
        ]
      } // Substitua 'coluna' pelo nome da coluna e 'valor' pelo valor que você deseja procurar
    })
  } catch (err) {
    console.log(err);
  }
};

// const getFavoritesAondeGamesOuUsers = async (paramsEnviado) => {
//   Favorites.findAll({
//     where:{id:paramsEnviado.id}, 
//     include:[
//         { model:Games, 
//           where:{ 
//                 is_valid:1, 
//                 is_vertify:1},   
//           required:false
//           }
//         ]
//      })
//      .success(function(result) {
//        callback(result);
//    });
// }

export {
  insertFavoriteRepository,
  updateFavoriteRepository,
  deleteFavoriteRepository,
  getFavoritesRepository,
  getFavoriteRepository,
};