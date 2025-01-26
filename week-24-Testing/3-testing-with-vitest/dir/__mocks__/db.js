"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const vitest_1 = require("vitest");
exports.prismaClient = {
    request: {
        create: vitest_1.vi.fn()
    },
};
