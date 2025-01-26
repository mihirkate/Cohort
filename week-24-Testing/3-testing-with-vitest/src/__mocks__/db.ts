
import { vi } from "vitest";
export const prismaClient = {
    request: {
        create: vi.fn()
    },
}