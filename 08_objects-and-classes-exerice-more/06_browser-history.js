// As input, you will receive two parameters: an object and a string array.
// The object will be in format: {Browser Name}:{Name of the browser}, Open tabs:[…], Recently Closed: […], Browser Logs: […]. Your task is to fill in the object based on the actions we will get in the array of strings.
// You can open any site in the world as many times as you like; if you do that add it to the open tabs.
// You can close only these tabs you have opened already! If the current action contains a valid opened site, you should remove it from "Open Tabs" and put it into "Recently closed", otherwise don't do anything!
// Browser Logs will hold every single Valid action, which you did (Open and Close).
// There is a special case in which you can get an action that says: "Clear History and Cache". That means you should empty the whole object.
// In the end, print the object in the format:
// {Browser name}
// Open Tabs: {[…]} // Joined by comma and space
// Recently Closed: {[…]} // Joined by comma and space
// Browser Logs: {[…]} // Joined by comma and space

function printBrowser(browser, commands) {
    browser = {
        ...browser,

        Close(tab) {
            const index = this['Open Tabs'].indexOf(tab)

            if (index < 0) {
                return;
            }

            this['Open Tabs'].splice(index, 1);
            this['Recently Closed'].push(tab);
            this['Browser Logs'].push(`Close ${tab}`);
        },

        Open(tab) {
            this['Open Tabs'].push(tab);
            this['Browser Logs'].push(`Open ${tab}`);
        },

        clearCacheAndHistory() {
            this['Open Tabs'] = [];
            this['Recently Closed'] = [];
            this['Browser Logs'] = [];
        },

        toString() {
            return [
                `${this['Browser Name']}`,
                `Open Tabs: ${this['Open Tabs'].join(', ')}`,
                `Recently Closed: ${this['Recently Closed'].join(', ')}`,
                `Browser Logs: ${this['Browser Logs'].join(', ')}`
            ].join('\n')
        }
    }

    commands.forEach(command => {
        if (command === 'Clear History and Cache') {
            browser.clearCacheAndHistory();

            return;
        }

        const [action, tab] = command.split(' ');
        browser[action](tab);
    })

    return browser.toString();
}

// console.log(printBrowser(
//     {
//         "Browser Name": "Google Chrome",
//         "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//         "Recently Closed": ["Yahoo", "Gmail"],
//         "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
//     },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// ));

// console.log(printBrowser({
//         "Browser Name": "Mozilla Firefox", "Open Tabs": ["YouTube"],
//         "Recently Closed": ["Gmail", "Dropbox"],
//         "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
//     },
//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// ));