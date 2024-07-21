


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const notificationModel = {
  getAllNotifications: async () => {
    try {
      const notifications = await prisma.Notification.findMany();
      return notifications;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération des notifications.');
    }
  },

  getNotificationById: async (id) => {
    try {
      const notification = await prisma.Notification.findUnique({ where: { id } });
      return notification;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération de la notification.');
    }
  },

  createNotification: async (data) => {
    try {
      const newNotification = await prisma.Notification.create({ data });
      return newNotification;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la création de la notification.');
    }
  },

  updateNotification: async (id, data) => {
    try {
      const updatedNotification = await prisma.Notification.update({ where: { id }, data });
      return updatedNotification;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la mise à jour de la notification.');
    }
  },

  deleteNotification: async (id) => {
    try {
      await prisma.Notification.delete({ where: { id } });
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la suppression de la notification.');
    }
  },
};

module.exports = notificationModel;
