import { test, expect, describe } from "bun:test";
import { partOne, partTwo } from "./index.ts";

describe("Day One - Part One", () => {
	test("Puzzle Input", async () => {
		const path = "./src/day-01/input.txt";
		const file = Bun.file(path);
		const input = await file.text();

		expect(partOne(input)).toEqual(280);
	});
});

describe("Day One - Part Two", () => {
	test("Puzzle Input", async () => {
		const path = "./src/day-01/input.txt";
		const file = Bun.file(path);
		const input = await file.text();

		expect(partTwo(input)).toEqual(1797);
	});
});
