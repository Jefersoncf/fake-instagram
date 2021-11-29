const { Publication, User } = require("../models");

const mainController = {
  async showHome(req, res) {
    //buscar publicaçoes
    try {
    const publications = await Publication.findAll({
      include: [
        { 
          model: User,
        },
      ],
      order: [['create_at', 'DESC']],
    });

    return res.render("home", { publications: publications});
    }catch(error){
      console.log(error);
    }
  },
  
  showCreatePublication(req, res) {
    return res.render("post");
  },

  async createPublication(req, res) {
    const { filename } = req.file;
    const { user } = req.session;

    try {
      const newPost = await Publication.create({
        image: filename,
        user_id: user.id,
        create_at: new Date().toISOString(),
      });

      return res.redirect("/home");
    } catch (err) {
      console.log(err);
      return res.render("posts", {
        error: "Erro ao tentar cadastrar a publicação",
      });
    }
  },
};

module.exports = mainController;