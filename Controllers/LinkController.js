import Link from "../Models/Link.js";

const LinkController = {

  getList: async (req, res) => {
    try {
      const links = await Link.find();//ללא סינון
      //const filtered1 = await TaskModel.find({ complete: true });//סינון 1
      //const filtered2 = await TaskModel.where('isComplete', false);//סינון 2
      res.json({ links});
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

//   getById: async (req, res) => {
//     try {
//       const task = await TaskModel.findById(req.params.id);//שליפה לפי מזהה
//       res.json(task);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },

//   add: async (req, res) => {
//     const { name } = req.body;
//     try {
//       const newTask = await TaskModel.create({ name });//הוספת חדש
//       res.json(newTask);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },

//   update: async (req, res) => {
//     const { id } = req.params;
//     try {
//       const updatedTask = await TaskModel.findByIdAndUpdate(id, req.body, {
//         new: true,
//       });//עדכון לפי מזהה
//       res.json(updatedTask);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },

//   delete: async (req, res) => {
//     const { id } = req.params;
//     try {
//       const deleted = await TaskModel.findByIdAndDelete(id);//מחיקה לפי מזהה
//       res.json(deleted);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },
};

export default LinkController;
