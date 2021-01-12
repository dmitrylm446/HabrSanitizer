/** @typedef {{banned:Array<{name:string, disabled: boolean}>,isQuickActionsOn: boolean}} SanitizerSettings */

/**
 * Check equality for nullable string ignoring case
 * @param {string} v1 First string
 * @param {string} v2 Second string
 * @return {boolean} Is strings equals ignoring case
 */
const isEquals = (v1, v2) => (v1 || '').toString().toLowerCase() === (v2 || '').toString().toLowerCase();

/**
 * Checks if string is null or empty
 * @param {string} v String to check
 * @return {boolean} is string null or empty
 */
const isNull = (v) => v == null || v === '';

/**
 * Persistent storage for the user settings
 */
export class Storage {
    /**
     * Returns instance of the storage
     */
    constructor() {
        this._notify = (settings) => {
            typeof this._handler === 'function' && this._handler(settings);
        };
    }

    /**
     * Gets settings from the Storage
     * @return {SanitizerSettings}
     */
    async getSettings() {
        const settings = await this._loadSettings();
        return settings;
    }

    /**
     * Push new settings to the storage (overrides all)
     * @param {SanitizerSettings} settings
     */
    async applySettings(settings) {
        if (!settings || !settings.banned || !Array.isArray(settings.banned)) {
            throw new Error('Settings formatted incorrectly');
        }
        this._saveSettings(settings);
        this._notify(settings);
    }

    /**
     * Add author to ban list
     * @param {{name:string}} author author object
     */
    async addNewBan(author) {
        if (author == null) {
            return;
        }

        const settings = await this._loadSettings();
        const exists = !!settings.banned.find((x) => isEquals(x.name, author.name));

        if (exists) {
            return false;
        }

        settings.banned.push(author);
        await this._saveSettings(settings);
        this._notify(settings);

        return true;
    }

    /**
     * Removes author from banlist
     * @param {string} userName name of the author
     */
    async removeFromBan(userName) {
        if (isNull(userName)) {
            return;
        }

        const settings = await this._loadSettings();
        settings.banned = settings.banned.filter((author) => !isEquals(author.name, userName));

        await this._saveSettings(settings);
        this._notify(settings);
    }

    /**
     * Update and save various options
     * @param {boolean} isQuickActionsOn is quick actions available
     */
    async setQuickActionsFlag(isQuickActionsOn) {
        const settings = await this._loadSettings();
        settings.isQuickActionsOn = isQuickActionsOn;
        await this._saveSettings(settings);
    }

    /**
     * Subscribe to settings change
     * @param {Function} handler
     */
    onChange(handler) {
        this._handler = handler;
    }

    /** Private
     * @return {SanitizerSettings} user settings
     */
    async _loadSettings() {
        return new Promise((res, _) => {
            chrome.storage.sync.get('settings', (data) => res(data && data.settings ? data.settings : { banned: [] }));
        });
    }

    /**
     * Private
     * @param {SanitizerSettings} settings
     */
    async _saveSettings(settings) {
        return new Promise((res, _) => {
            chrome.storage.sync.set({ settings }, res);
        });
    }
}
