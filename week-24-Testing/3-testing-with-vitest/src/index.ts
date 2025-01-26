
import express from "express";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { vi } from "vitest";

export const app = express();
vi.mock('../db');