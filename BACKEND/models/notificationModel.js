


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const notificationModel = {
  getAllNotifications: async () => {
    try {
      const notifications = await prisma.notification.findMany();
      return notifications;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération des notifications.');
    }
  },

  getNotificationById: async (id) => {
    try {
      const notification = await prisma.notification.findUnique({ where: { id } });
      return notification;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération de la notification.');
    }
  },

  createNotification: async (data) => {
    try {
      const newNotification = await prisma.notification.create({ data });
      return newNotification;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la création de la notification.');
    }
  },

  updateNotification: async (id, data) => {
    try {
      const updatedNotification = await prisma.notification.update({ where: { id }, data });
      return updatedNotification;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la mise à jour de la notification.');
    }
  },

  deleteNotification: async (id) => {
    try {
      await prisma.notification.delete({ where: { id } });
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la suppression de la notification.');
    }
  },
};

module.exports = notificationModel;
