


const notificationModel = require('../models/notificationModel');

const notificationController = {
  async getAllNotifications(req, res) {
    try {
      const notifications = await notificationModel.getAllNotifications();
      res.json(notifications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getNotificationById(req, res) {
    const { id } = req.params;
    try {
      const notification = await notificationModel.getNotificationById(parseInt(id));
      if (!notification) {
        return res.status(404).json({ error: 'Notification non trouvée' });
      }
      res.status(200).json(notification);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createNotification(req, res) {
    const data = req.body;
    try {
      const newNotification = await notificationModel.createNotification(data);
      res.status(201).json(newNotification);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateNotification(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedNotification = await notificationModel.updateNotification(parseInt(id), data);
      res.status(200).json(updatedNotification);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteNotification(req, res) {
    const { id } = req.params;
    try {
      await notificationModel.deleteNotification(parseInt(id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = notificationController;
