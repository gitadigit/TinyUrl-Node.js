import Link from "../Models/Link.js";

const LinkController = {

  addClick: async (req, res) => {
  const { id, ipAddress } = req.body; // שינוי לאיסוף נתונים מהגוף

  try {
    const link = await Link.findById(id);
    if (!link) {
      return res.status(404).json({ message: 'Link not found' });
    }

    const lastClick = link.clicks.find(click => click.ipAddress === ipAddress);

    if (lastClick && (Date.now() - new Date(lastClick.insertedAt).getTime()) < 60000) {
      return res.status(400).json({ message: 'Duplicate click detected' });
    }

    link.clicks.push({ ipAddress, insertedAt: new Date() });
    await link.save();
    res.json({ message: 'Click recorded' });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
},



  getAll: async (req, res) => {
    try {
      const links = await Link.find();
      res.json({ links});
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const link = await Link.findById(req.params.id);//שליפה לפי מזהה
      res.json(link);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  addLink: async (req, res) => {
    const { originalUrl, clicks } = req.body;
    try {
      const nweLink = await Link.create({ originalUrl, clicks });//הוספת חדש
      res.json(nweLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  updateLink: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedLink = await Link.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  deleteLink : async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Link.findByIdAndDelete(id);
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  
  
  //
  redirectLink: async (req, res) => {
    try {
      const link = await Link.findById(req.params.id);
      if (!link) return res.status(404).send('Link not found');

      const targetParamValue = req.query[link.targetParamName] || '';
      const click = {
        ipAddress: req.ip,
        targetParamValue
      };
      link.clicks.push(click);
      await link.save();
      
      res.redirect(link.originalUrl,301);
      
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  
};

export default LinkController;
