export const partOne = (input: string): number => {
	let floor = 0;
	const inputToCharacters = input.split("");

	for (let i = 0; i < inputToCharacters.length; i++) {
		if (inputToCharacters[i] === "(") {
			floor += 1;
		} else if (inputToCharacters[i] === ")") {
			floor -= 1;
		}
	}

	return floor;
};

export const partTwo = (input: string): number => {
	let floor = 0;
	let basementCharacter = 0;
	const inputToCharacters = input.split("");

	for (let i = 0; i < inputToCharacters.length; i++) {
		if (inputToCharacters[i] === "(") {
			floor += 1;
		} else if (inputToCharacters[i] === ")") {
			floor -= 1;
		}

		if (floor === -1) {
			basementCharacter = i + 1;
			break;
		}
	}

	return basementCharacter;
};
