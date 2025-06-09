"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_guard_1 = __importDefault(require("./modules/appguard"));
const app = (0, express_1.default)();
// AC #1:
// Able to use as direct express module
// Only uncomment this if not using with AC #2 and AC #3
// app.use(appGuard)
// AC #2: 
// Able to use as middleware to specific route
app.get('/some-route', app_guard_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: 'Hello World' });
}));
app.get('/index', app_guard_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: 'Hello World' });
}));
// AC #3:
// Able to uses a default route controller
app.get('*', app_guard_1.default);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
