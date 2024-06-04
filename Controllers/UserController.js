import User from "../Models/User.js";

const UserController = {

  getAll: async (req, res) => {
    try {
      const users = await User.find();
      res.json({ users});
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);//שליפה לפי מזהה
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  addUser: async (req, res) => {
    const { name, email, password, links } = req.body;
    try {
      const newUser = await User.create({ name, email, password, links }); // הוספת משתמש חדש עם כל השדות
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  
  updateUser: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await User.findByIdAndDelete(id);
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default UserController;
