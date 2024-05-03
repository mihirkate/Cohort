import { atom, selector } from "recoil";
export const networkAtom = atom({
  key: "networlAtom",
  default: 104,
});
export const jobAtom = atom({
  key: "jobAtom",
  default: 0,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalNotificationsSelector = selector({
  key: "totalNotificationsSelector",
  get: ({ get }) => {
    // Make sure to use "get" inside an object here
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobAtom);
    const notificationAtomCount = get(notificationAtom);
    const messagingAtomCount = get(messagingAtom);

    return (
      networkAtomCount +
      jobAtomCount +
      notificationAtomCount +
      messagingAtomCount
    );
  },
});

export const notifications = atom({
  key: "notifications",
  default: {
    network: 4,
    jobs: 6,
    messaging: 3,
    notifications: 3,
  },
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
