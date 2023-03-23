(function (global) {
    const Greetr = function (firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    };

    const supportedLangs = ["en", "nl"];

    const greetings = {
        en: "Hello",
        nl: "Hallo",
    };

    const formalGreetings = {
        en: "Greetings",
        nl: "Gegroet",
    };

    const logMessages = {
        en: "Logged in",
        nl: "Ingelogd",
    };

    Greetr.prototype = {
        fullName: function () {
            return `${this.firstname} ${this.lastname}`;
        },

        validate: function () {
            if (!supportedLangs.includes(this.language))
                throw "Invalid language";
        },

        greeting: function () {
            return `${greetings[this.language]} ${this.firstname}!`;
        },

        formalGreeting: function () {
            return `${formalGreetings[this.language]}, ${this.fullName()}`;
        },

        greet: function (formal) {
            return formal ? this.formalGreeting() : this.greeting();
        },

        log: function () {
            if (console) {
                console.log(
                    `${logMessages[this.language]}: ${this.fullName()}`
                );
            }
            return this;
        },

        setLang: function (lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        updateGreeting: function (selector) {
            document.querySelector(selector).innerText = this.greet();
            return this;
        },
    };

    Greetr.init = function (firstname, lastname, language) {
        const self = this;
        self.firstname = firstname || "";
        self.lastname = lastname || "";
        self.language = language || "en";
        self.validate();
    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;
})(window);
