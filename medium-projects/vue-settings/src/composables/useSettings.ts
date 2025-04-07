import { ref, watch } from 'vue';

interface SettingsMap {
  general: GeneralSettings;
  notifications: NotificationsSettings;
  privacy: PrivacySettings;
}

type SettingsKey = keyof SettingsMap;

interface GeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

interface NotificationsSettings {
  email: boolean;
  sms: boolean;
}

interface PrivacySettings {
  visibility: visibility;
  searchEngineIndexing: boolean;
}

type visibility = 'public' | 'private';

const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
  const stored = localStorage.getItem(key);

  return stored !== null ? JSON.parse(stored) : defaults;
};

const watcher =
  <T extends SettingsKey>(key: T) =>
  (value: SettingsMap[T]) =>
    localStorage.setItem(key, JSON.stringify(value));
const general = ref<GeneralSettings>(
  init('general', {
    username: '',
    email: '',
    about: '',
    gender: 'male',
    country: 'USA',
  }),
);

const notifications = ref<NotificationsSettings>(
  init('notifications', {
    email: false,
    sms: false,
  }),
);

const privacy = ref<PrivacySettings>(
  init('privacy', {
    visibility: 'public',
    searchEngineIndexing: false,
  }),
);

watch(general, watcher('general')), { deep: true };
watch(notifications, watcher('notifications')), { deep: true };
watch(privacy, watcher('privacy')), { deep: true };

export function useSettings() {
  return {
    general,
    notifications,
    privacy,
  };
}
